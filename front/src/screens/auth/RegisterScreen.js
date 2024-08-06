import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import { createUser } from "../../services/dfl-server"
import { Color } from "../../../GlobalStyles";
import Toast from "react-native-toast-message";

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false
  })
  const navigation = useNavigation();

  const handleRegister = async () => {
    setLoading(true);
    try {
      setErrors({
        username: false,
        email: false,
        password: false,
        confirmPassword: false
      })

      if (!username || !email || !password) {
        setErrors({username: !username, email: !email, password: !password, confirmPassword: !confirmPassword})
        Toast.show({
          type: 'error',
          text1: 'Erro nos dados do formulário',
        });
        return;
      }

      if (password !== confirmPassword) {
        setErrors({ ...errors, ...{confirmPassword: true} })
        Toast.show({
          type: 'error',
          text1: 'Erro na confirmação de senha',
        });
        return;
      }


      const createdUser = await createUser(username, email, password);
      
      Toast.show({
        type: 'success',
        text1: 'Usuário criado com sucesso',
      });
      navigation.navigate("AccountLogin");
    } catch (error) {
      console.error('Erro ao registrar:', error.response.data.message);
      Toast.show({
        type: 'error',
        text1: 'Erro ao realizar o cadastro',
        text2: error.response.data.message ?? 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={errors.username ? styles.errorInput : styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={errors.email ? styles.errorInput : styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={errors.password ? styles.errorInput : styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={errors.confirmPassword ? styles.errorInput : styles.input}
        placeholder="Confirme a Senha"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  errorInput: {
    width: '80%',
    height: 40,
    margin: 12,
    padding: 10, 
    borderWidth: 1,
    borderColor: Color.red,
  },
});

export default RegisterScreen;