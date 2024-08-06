import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';

import { AuthContext } from './src/contexts/AuthContext';

// AuthComponents
import AccountLogin from './src/screens/auth/AccountLogin';
import RegisterScreen from './src/screens/auth/RegisterScreen';

// UserComponents
import Start from './src/screens/Start';
import Homescreen from './src/screens/Homescreen';
import CategoryFriend from './src/screens/CategoryFriend';
import CategoryPersonal from './src/screens/CategoryPersonal';
import AccountProfile from './src/screens/AccountProfile';
import ProfileCreation from './src/screens/ProfileCreation';
import GameOver from './src/screens/GameOver';
import ForgotPasswordStartPage from './src/screens/auth/ForgotPasswordStart';
import ForgotPasswordEndPage from './src/screens/auth/ForgotPasswordEnd';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="AccountLogin" component={AccountLogin} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
      <AuthStack.Screen name="ForgotPasswordStart" component={ForgotPasswordStartPage} />
      <AuthStack.Screen name="ForgotPasswordEnd" component={ForgotPasswordEndPage} />
      

    </AuthStack.Navigator>
  );
}

const UserRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="CategoryFriend" component={CategoryFriend} />
      <Stack.Screen name="CategoryPersonal" component={CategoryPersonal} />
      <Stack.Screen name="AccountProfile" component={AccountProfile} />
      <Stack.Screen name="ProfileCreation" component={ProfileCreation} />
      <Stack.Screen name="GameOver" component={GameOver} />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  return !loading && isAuthenticated  ? <UserRoutes /> : <AuthRoutes />;
};

export default AppNavigator;