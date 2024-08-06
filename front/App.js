import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AppNavigator from './AppNavigator'; // Importe o componente de navegação principal
import { AuthProvider } from './src/contexts/AuthContext';
import Toast from 'react-native-toast-message';

const App = () => {
 

  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </NavigationContainer>
      <Toast />
    </>
    
  );
};

export default App;