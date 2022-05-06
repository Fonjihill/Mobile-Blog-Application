import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './Screen/OnboardingPages/OnboardingScreen'

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        <Stack.Screen 
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;