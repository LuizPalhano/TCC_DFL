import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { findUserByUsername, listTopics, getUserPreferences } from '../services/dfl-server';

const CategoryFriend = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentTopics, setCurrentTopics] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [userPreferences, setUserPreferences] = useState([]);

  useEffect(() => {
    if (userExists) {
      fetchCategories();
    }
  }, [userExists]);

  const checkUser = async () => {
    if (!username.trim()) {
      Alert.alert('Campo Vazio', 'Por favor, digite um nome de usuário.');
      return;
    }
    try {
      const user = await findUserByUsername(username);
      if (user) {
        setUserExists(true);
      } else {
        Alert.alert('Usuário Não Encontrado', 'O nome de usuário não corresponde a nenhum usuário registrado.');
        setUserExists(false);
      }
    } catch (error) {
      console.error('Erro ao verificar usuário:', error);
      Alert.alert('Erro de Conexão', 'Não foi possível conectar ao servidor para verificar o usuário.');
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await listTopics();
      setCategories(data);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  };

  const fetchUserPreferences = async (category) => {
    try {
      const pares = await getUserPreferences(username, category);
      if (pares && pares.length > 0) {
        setUserPreferences(pares);
        showNextTopics(pares);
      } else {
        Alert.alert('Erro', 'Não há pares disponíveis nesta categoria.');
      }
    } catch (error) {
      console.error('Erro ao buscar preferências:', error);
      Alert.alert('Erro ao Carregar Preferências', 'Não foi possível carregar as preferências.');
    }
  };

  const showNextTopics = (pares) => {
    if (pares.length > 0) {
      const randomIndex = Math.floor(Math.random() * pares.length);
      const selectedPair = pares[randomIndex];
      shuffleTopics(selectedPair);
      setGameStarted(true);
    } else {
      console.log('Sem pares para mostrar');
    }
  };

  const shuffleTopics = (pair) => {
    const isUpperFirst = Math.random() > 0.5;
    setCurrentTopics(isUpperFirst ? [pair.upper, pair.lower] : [pair.lower, pair.upper]);
    setCorrectAnswer(pair.upper); // Define qual é a resposta correta independentemente da ordem
  };

  const handleTopicSelection = (selectedTopic) => {
    setTotalAnswers(totalAnswers + 1); // Incrementa o total de respostas
    if (selectedTopic === correctAnswer) {
      setScore(score + 1); // Adiciona ponto se a escolha for correta
    }
    showNextTopics(userPreferences);
  };

  const handleEndGame = () => {
    const percentage = totalAnswers > 0 ? (score / totalAnswers * 100).toFixed(2) : 0; // Calcula a porcentagem de acertos
    navigation.navigate('GameOver', { score, totalAnswers, percentage });
  };

  if (!userExists) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Nome do usuário"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} onPress={checkUser}>
          <Text style={styles.buttonText}>Verificar Usuário</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (gameStarted) {
    return (
      <View style={styles.container}>
        <Text style={styles.score}>Pontuação: {score}</Text>
        {currentTopics.map((topic, index) => (
          <TouchableOpacity key={index} style={styles.topicButton} onPress={() => handleTopicSelection(topic)}>
            <Text style={styles.topicButtonText}>{topic}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.endGameButton} onPress={handleEndGame}>
          <Text style={styles.endGameButtonText}>Encerrar Jogo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma categoria</Text>
      <View style={styles.row}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => fetchUserPreferences(category.name)}>
            <Text style={styles.buttonText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    color: '#333',
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
    marginHorizontal: 5,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
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
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  topicButton: {
    width: '45%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  topicButtonText: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  endGameButton: {
    marginTop: 20,
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  endGameButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default CategoryFriend;
