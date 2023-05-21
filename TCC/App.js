import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

//Função root; rodada sempre e sempre primeiro
export default function App() {
  return (
    <View style = {styles.backgroundStyle}>
      <View style = {{padding: '8%'}}></View>
      <View style = {{alignItems: 'center'}}>
        <Text style = {styles.textStyle}>Hello, world!</Text>
      </View>
    </View>
  );
}

//Stylesheet guarda os estilos do app
const styles = StyleSheet.create({
  //Estilo geral de fundo de tela
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'cyan'
  },

  //Estilo geral de botão
  buttonStyle: {
    
  },

  //Estilo geral de caixa de input
  inputStyle: {
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'gray',
  },

  //Estilo geral de bloco de texto
  textStyle: {
    padding: 15,
    backgroundColor: '#0062ff',
    textAlign: 'center',
    width: '50%'
  }
});
