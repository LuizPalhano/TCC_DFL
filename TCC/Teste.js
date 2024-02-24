import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Teste = () => {
  const styles = StyleSheet.create({
    start: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    allAccountsWrapper: {
      backgroundColor: '#0000FF', // Defina a cor azul aqui para Teste.js
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
      fontWeight: '700',
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
    <View style={styles.start}>
      <View style={styles.allAccountsWrapper}>
        <View style={styles.allAccounts}>
          <Text style={styles.textWrapper}>TESTE</Text>
        </View>
      </View>
    </View>
  );
};

export default Teste;
