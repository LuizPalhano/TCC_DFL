import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return (
    <View style={styles.divider}></View>
  );
};

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0', // Cor mais sutil
    marginVertical: 10,
    width: '100%',
  },
});

export default Divider;