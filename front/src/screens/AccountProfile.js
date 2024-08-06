import { useCallback, useContext, useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Color } from "../../GlobalStyles";
import { AuthContext } from "../contexts/AuthContext";
import CustomTextInput from "../components/CustomTextInput";
import Divider from "../components/Divider";
import { updateUserPassword, updateUserProfile } from "../services/dfl-server";
import Toast from "react-native-toast-message";

const AccountProfile = () => {
  const [loadingUpdateProfile, setLoadingUpdateProfile] = useState(false);
  const [loadingUpdatePassword, setLoadingUpdatePassword] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { user, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
  }
  , [user]);

  const handleProfileUpdate = useCallback(async () => {
    setLoadingUpdateProfile(true);
    try {

      if (!username || !email) {
        Toast.show({
          type: 'error',
          text1: 'Erro nos dados do formulário',
        });
        return;
      }

      if (password !== confirmPassword) {
        Toast.show({
          type: 'error',
          text1: 'Erro na confirmação de senha',
        });
        return;
      }

      await updateUserProfile(username, email);
      
      Toast.show({
        type: 'success',
        text1: 'Usuário atualizado com sucesso',
      });
      handleLogout();
    } catch (error) {
      console.error('Erro ao atualizar o perfil:', error.response.data.message);
      
      Toast.show({
        type: 'error',
        text1: 'Erro ao atualizar o perfil',
        text2: error.response.data.message ?? 'error'
      });
    } finally {
      setLoadingUpdateProfile(false);
    }
  }, [username, email]);

  const handlePasswordUpdate = useCallback(async () => {
    setLoadingUpdatePassword(true);
    try {
      if (!password || !oldPassword || !confirmPassword) {
        Toast.show({
          type: 'error',
          text1: 'Erro nos dados do formulário',
        });
        return;
      }

      if (password !== confirmPassword) {
        Toast.show({
          type: 'error',
          text1: 'Erro na confirmação de senha',
        });
        return;
      }


      await updateUserPassword(oldPassword, password);
      
      Toast.show({
        type: 'success',
        text1: 'Senha atualizada com sucesso',
      });
      handleLogout();
    } catch (error) {
      console.error('Erro ao atualizar a senha:', error.response.data.message);
      
      Toast.show({
        type: 'error',
        text1: 'Erro ao atualizar a senha',
        text2: error.response.data.message ?? 'error'
      });
    } finally {
      setLoadingUpdatePassword(false);
    }
  }, [oldPassword, password, confirmPassword]);

  return (
    <View style={styles.container}>
      <CustomTextInput label="Nome" 
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      
      <CustomTextInput label="Email" 
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />

      <Button title="Atualizar Perfil" onPress={() => handleProfileUpdate()}/>
      
      <Divider />

      <CustomTextInput label="Senha Antiga" 
        placeholder="Senha Antiga"
        onChangeText={setOldPassword}
        value={oldPassword}
      />

      <CustomTextInput label="Nova Senha" 
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
      />
      
      <CustomTextInput label="Confirme a Senha" 
        placeholder="Confirme a senha"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />

      <Button title="Atualizar a Senha" onPress={() => handlePasswordUpdate()}/>

      <Divider />

      <Button title="Logout" onPress={() => handleLogout()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  }
});

export default AccountProfile;
