import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Start = () => {
  const handlePress = () => {
    // Adicione aqui a lógica para iniciar o jogo
    // Alert.alert('Game Started!');
  };

  const styles = StyleSheet.create({
    start: {
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    allAccountsWrapper: {
      backgroundColor: '#ffffff',
      height: 812,
      width: 375,
    },
    allAccounts: {
      backgroundColor: '#F8777D', 
      position: 'relative',
    },
    textWrapper: {
      color: '#ffffff',
      fontFamily: 'Asap-Bold', 
      fontSize: 60,
      fontWeight: '700',a
      letterSpacing: -1.2,
      lineHeight: 70, 
      textAlign: 'center',
      textShadowColor: '#00000040',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 7,
      position: 'absolute',
      top: 247,
      width: 375,
    },
  });

  return (
    <TouchableOpacity onPress={handlePress} style={styles.start}>
      <View style={styles.allAccountsWrapper}>
        <View style={styles.allAccounts}>
          <Text style={styles.textWrapper}>TOUCH THE SCREEN TO START THE GAME</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Start;
