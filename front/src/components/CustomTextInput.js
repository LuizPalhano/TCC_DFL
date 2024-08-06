import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const CustomTextInput = ({ label, ...rest }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.placeholder}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.divider} />
        <TextInput {...rest} placeholderTextColor="#94a3b8" style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  placeholder: {
    padding: 5
  },
  label: {
    color: '#4A5568',
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: '#E2E8F0', // Cor da borda
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 10,
    width: "100%"
  },
  input: {
    flex: 1,
    height: 45,
    paddingHorizontal: 15,
    color: '#0d0c22',
  },
});

export default CustomTextInput;