import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import { forgotPasswordEnd } from "../../services/dfl-server";

const ForgotPasswordEndPage = () => {
  const [recoverCode, setRecoverCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const { email } = route.params;
  const navigation = useNavigation();

  const forgotPasswordEndHandle = useCallback(async () => {
    setLoading(true);
    try {
      if (password !== confirmPassword) {
        Toast.show({
          type: 'error',
          text1: 'Erro na confirmação de senha',
        });
        return;
      }

      const response = await forgotPasswordEnd(email, recoverCode, password);

      // navigate to ForgotPasswordFinish
      navigation.navigate("AccountLogin")
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao tentar atualizar a senha',
        text2: err.response.data.message ?? 'Erro ao tentar atualizar a senha'
      });
    } finally {
      setLoading(false);
    }
  }, [email, password, recoverCode]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Código de recuperação"
        onChangeText={setRecoverCode}
        value={recoverCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme a Senha"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
      />
      <Button title="Atualizar a Senha" onPress={() => forgotPasswordEndHandle()} disabled={loading} />
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

export default ForgotPasswordEndPage;