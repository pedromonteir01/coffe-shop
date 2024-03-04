import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages

//home
import Home from './src/screens/home';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}
