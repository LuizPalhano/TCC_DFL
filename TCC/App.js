import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Start = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Teste');
  };

  const styles = StyleSheet.create({
    start: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    allAccountsWrapper: {
      backgroundColor: '#FF0000',
      height: 812,
      width: 375,
    },
    allAccounts: {
      backgroundColor: '#F8777D',
      position: 'relative',
    },
    textWrapper: {
      color: '#ffffff',
      fontFamily: 'sans-serif',
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
    <TouchableOpacity onPress={handlePress} style={styles.start}>
      <View style={styles.allAccountsWrapper}>
        <View style={styles.allAccounts}>
          <Text style={styles.textWrapper}>CLIQUE AQUI PARA JOGAR</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Start;
