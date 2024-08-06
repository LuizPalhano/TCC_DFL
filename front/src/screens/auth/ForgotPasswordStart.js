import { useNavigation } from "@react-navigation/native";
import { forgotPasswordStart } from "../../services/dfl-server";
import { useCallback, useState } from "react";
import Toast from "react-native-toast-message";
import { Button, StyleSheet, TextInput, View } from "react-native";

const ForgotPasswordStartPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const forgotPasswordStartHandle = useCallback(async () => {
    setLoading(true);
    try {
      const response = await forgotPasswordStart(email);

      // navigate to ForgotPasswordFinish
      navigation.navigate("ForgotPasswordEnd", {email: email})
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao tentar recuperar a senha',
        text2: err.response.data.message ?? 'Erro ao enviar o email de recuperação'
      });
    } finally {
      setLoading(false);
    }
  }, [email]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Recuperar Senha" onPress={() => forgotPasswordStartHandle()} disabled={loading} />
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

export default ForgotPasswordStartPage;