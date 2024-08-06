import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthContext } from "../../contexts/AuthContext";
import { login } from "../../services/dfl-server"
import LoadingScreen from "../../components/LoadingContainer";
import Toast from "react-native-toast-message";

const AccountLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const { loading, handleLogin } = useContext(AuthContext);
  const navigation = useNavigation();

  const singIn = useCallback(async () => {
    setLoginLoading(true);
    try {
      const response = await login(username, password);

      await handleLogin(response);
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao fazer Login',
        text2: err.response.data.message ?? 'Erro ao fazer Login'
      });
    } finally {
      setLoginLoading(false);
    }
  }, [username, password]);

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={() => singIn()} disabled={loginLoading} />
      <Text style={styles.registerText} onPress={() => navigation.navigate("ForgotPasswordStart")}>
        Esqueci minha senha
      </Text>
      <Text style={styles.registerText} onPress={() => navigation.navigate("RegisterScreen")}>
        Não possui uma conta? Crie aqui!
      </Text>
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
  registerText: {
    marginTop: 20,
  },
});

export default AccountLogin;
