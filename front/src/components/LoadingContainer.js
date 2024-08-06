import { StyleSheet, Text, View } from "react-native";


const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>
        Carregando
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
  loadingText: {
    marginTop: 20,
  },
});

export default LoadingScreen;
