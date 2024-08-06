import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

const Start = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  const handlePress = () => {
    navigation.navigate('Homescreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#23395d" />
      <View style={styles.content}>
        <TouchableOpacity onPress={handlePress} style={styles.start}>
          <Text style={styles.headerText}>{`Olá, ${user.username}`}</Text>
          <Text style={styles.subText}>Toque na tela para iniciar o jogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23395d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  start: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#23395d',
    fontFamily: 'sans-serif-medium',
    fontSize: 36,
    marginBottom: 20,
  },
  subText: {
    color: '#23395d',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
  },
});

export default Start;
