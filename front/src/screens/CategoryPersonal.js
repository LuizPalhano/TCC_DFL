import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getToken, listTopics, saveRankedTopics, getUserPreferences } from '../services/dfl-server';
import { AuthContext } from '../contexts/AuthContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CategoryPersonal = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState({});
  const [rankedTopics, setRankedTopics] = useState([]);
  const [existingPairs, setExistingPairs] = useState([]);
  const [originalTopics, setOriginalTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saveEnabled, setSaveEnabled] = useState(false);
  const [startFromScratch, setStartFromScratch] = useState(false);
  const [firstSaveDone, setFirstSaveDone] = useState(false); // New state to track if the first save is done

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setSaveEnabled(rankedTopics.length === 5);
  }, [rankedTopics]);

  const fetchCategories = async () => {
    try {
      const data = await listTopics();
      const categoriesData = data.reduce((acc, category) => {
        acc[category.name] = category.itens.sort(() => 0.5 - Math.random()).slice(0, 5);
        return acc;
      }, {});
      setCategories(categoriesData);
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryPress = (category) => {
    Alert.alert(
      'Escolha uma opção',
      'Você gostaria de continuar com as preferências salvas ou começar um novo jogo?',
      [
        {
          text: 'Novo Jogo',
          onPress: () => {
            setSelectedCategory(category);
            setOriginalTopics([...categories[category]]);
            setExistingPairs([]);
            setStartFromScratch(true);
            setFirstSaveDone(false); // Reset the first save done state
          },
        },
        {
          text: 'Continuar',
          onPress: async () => {
            try {
              const pares = await getUserPreferences(user.username, category);
              if (pares.length > 0) {
                setSelectedCategory(category);
                setOriginalTopics([...categories[category]]);
                setExistingPairs(pares);
                setStartFromScratch(false);
                setFirstSaveDone(true); // Set the first save done state
                console.log('Pares encontrados:', pares);
              } else {
                Alert.alert('Nenhum par encontrado', 'Não há preferências salvas para esta categoria.');
                setSelectedCategory(null);
              }
            } catch (error) {
              console.log('Erro ao buscar preferências do usuário:', error);
              Alert.alert('Erro', 'Não foi possível carregar as preferências.');
              setSelectedCategory(null);
            }
          },
        },
        { text: 'Cancelar', style: 'cancel' },
      ]
    );
  };

  const handleBackPress = () => {
    setSelectedCategory(null);
  };

  const handleRankPress = (topic) => {
    if (rankedTopics.includes(topic)) {
      setRankedTopics(prevRankedTopics => prevRankedTopics.filter(item => item !== topic));
    } else {
      if (rankedTopics.length < 5) {
        setRankedTopics(prevRankedTopics => [...prevRankedTopics, topic]);
        const updatedCategories = { ...categories };
        const updatedItems = updatedCategories[selectedCategory].filter(item => item !== topic);
        updatedCategories[selectedCategory] = updatedItems;
        setCategories(updatedCategories);
      } else {
        Alert.alert('Limite atingido', 'Você já selecionou 5 tópicos para ranqueamento.');
      }
    }
  };

  const handleClearList = () => {
    setCategories(prevCategories => ({
      ...prevCategories,
      [selectedCategory]: [...originalTopics],
    }));
    setRankedTopics([]);
  };

  const renderTopic = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handleRankPress(item)}>
      <Text style={styles.buttonText}>{item}</Text>
    </TouchableOpacity>
  );

  const handleSave = async (finalizar = false) => {
    try {
      const token = await getToken('root', 'password');
      if (!token) {
        Alert.alert('Erro', 'Não foi possível obter o token de autenticação.');
        return;
      }

      const newPairs = [];
      for (let i = 0; i < rankedTopics.length; i++) {
        for (let j = i + 1; j < rankedTopics.length; j++) {
          newPairs.push({ upper: rankedTopics[j], lower: rankedTopics[i] });
        }
      }

      const allPairs = (startFromScratch && !firstSaveDone) ? newPairs : [...existingPairs, ...newPairs];
      const completePairs = generateTransitivePairs(allPairs);

      const payload = {
        name: selectedCategory,
        pares: completePairs,
      };
      console.log('Sending preferences:', JSON.stringify(payload));

      const saveStatus = await saveRankedTopics(payload);
      if (saveStatus === 'Sucesso') {
        Alert.alert('Sucesso', 'Os tópicos foram salvos com sucesso!');
        fetchCategories();
        setRankedTopics([]);
        setExistingPairs(completePairs);
        if (finalizar) {
          navigation.navigate('ProfileCreation', { categoryName: selectedCategory, pairCount: completePairs.length });
        }
        setFirstSaveDone(true); // Set the first save done state after saving
      }
    } catch (error) {
      console.error('Erro ao salvar os tópicos:', error);
      Alert.alert('Erro', 'Houve uma contradição. Você pode retornar às categorias e iniciar uma nova configuração do zero.', [
        { text: 'OK' },
        {
          text: 'Retornar ao Menu Inicial',
          onPress: () => {
            navigation.navigate('Homescreen');
          },
        },
      ]);
    }
  };

  const generateTransitivePairs = (pairs) => {
    let changes = true;
    const relations = new Map();

    pairs.forEach(pair => {
      if (!relations.has(pair.upper)) {
        relations.set(pair.upper, new Set());
      }
      relations.get(pair.upper).add(pair.lower);
    });

    while (changes) {
      changes = false;
      for (let [upper, lowers] of relations.entries()) {
        const newLowers = new Set([...lowers]);
        lowers.forEach(lower => {
          if (relations.has(lower)) {
            relations.get(lower).forEach(subLower => {
              if (!newLowers.has(subLower)) {
                newLowers.add(subLower);
                changes = true;
              }
            });
          }
        });
        relations.set(upper, newLowers);
      }
    }

    const transitivePairs = [];
    relations.forEach((lowers, upper) => {
      lowers.forEach(lower => {
        transitivePairs.push({ upper, lower });
      });
    });

    return transitivePairs;
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1E88E5" />
      </View>
    );
  }

  const filteredCategories = Object.keys(categories).filter(category => category !== 'teste4');

  const sortedRankedTopics = rankedTopics.slice();

  return (
    <View style={styles.container}>
      {selectedCategory ? (
        <>
          <FlatList
            data={categories[selectedCategory]}
            renderItem={renderTopic}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatListContainer}
          />
        </>
      ) : (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Escolha uma Categoria</Text>
          </View>
          <View style={styles.row}>
            {filteredCategories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => handleCategoryPress(category)}>
                <Text style={styles.buttonText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      {sortedRankedTopics.length > 0 && (
        <View style={styles.rankedContainer}>
          <Text style={styles.rankedTitle}>Tópicos Ranqueados:</Text>
          {sortedRankedTopics.map((topic, index) => (
            <Text key={index} style={styles.rankedItem}>{5 - index}. {topic}</Text>
          ))}
          <TouchableOpacity style={styles.clearButton} onPress={handleClearList}>
            <Text style={styles.clearButtonText}>Limpar Lista</Text>
          </TouchableOpacity>
        </View>
      )}

      {saveEnabled && (
        <View>
          <TouchableOpacity style={styles.saveButton} onPress={() => handleSave()}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={() => {
            Alert.alert(
              'Finalizar Criação de Perfil',
              'Você deseja finalizar a criação de perfil?',
              [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => handleSave(true) },
              ]
            );
          }}>
            <Text style={styles.saveButtonText}>Salvar e Finalizar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 10, // Ajuste conforme necessário
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E88E5',
    marginVertical: 10,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankedContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    width: '100%',
  },
  rankedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  rankedItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  saveButton: {
    backgroundColor: '#03dac6',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    elevation: 3,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#b00020',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    elevation: 3,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
  },
  categoryButton: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E88E5',
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default CategoryPersonal;
