import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E88E5',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
    width: 250,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  addButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#FF4081',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  addIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

const Homescreen = () => {
  const navigation = useNavigation();

  const navigateToCategoryFriend = () => {
    navigation.navigate('CategoryFriend');
  };

  const navigateToCategoryPersonal = () => {
    navigation.navigate('CategoryPersonal');
  };

  const navigateToAccountProfile = () => {
    navigation.navigate('AccountProfile'); // Navega para a tela AccountLogin
  };

  return (
    <View style={styles.homeScreen}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToCategoryFriend}>
          <Text style={styles.buttonText}>Iniciar Jogo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToCategoryPersonal}>
          <Text style={styles.buttonText}>Criar Perfil</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={navigateToAccountProfile}>
        <Text style={styles.addIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Homescreen;
