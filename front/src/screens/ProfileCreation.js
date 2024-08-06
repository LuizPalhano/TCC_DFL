import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';

const ProfileCreation = ({ route, navigation }) => {
  const { categoryName, pairCount } = route.params;

  const handlePress = () => {
    navigation.navigate('Homescreen');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#23395d" />
      <View style={styles.content}>
        <Text style={styles.headerText}>Perfil Criado</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Categoria: <Text style={styles.valueText}>{categoryName}</Text></Text>
          <Text style={styles.detailText}>Número de Pares: <Text style={styles.valueText}>{pairCount}</Text></Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Voltar ao Início</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23395d',  // Fundo azul escuro
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#f5f5f5',  // Fundo claro
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  headerText: {
    color: '#23395d',
    fontFamily: 'sans-serif-medium',
    fontSize: 36,
    marginBottom: 20,
  },
  detailsContainer: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  detailText: {
    color: '#23395d',
    fontSize: 20,
    lineHeight: 30,  // Espaço vertical entre linhas
    textAlign: 'left',
  },
  valueText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6a7f98',  // Botão em azul cinza
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default ProfileCreation;
