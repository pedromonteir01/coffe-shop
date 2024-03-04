import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages

//home
import Home from './src/screens/home';

//menu
import Menu from './src/screens/menu';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Menu' 
          component={Menu} 
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#006341'
            }
          }}
          />
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}
