import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './FormScreen'; // Your form screen
import SummaryScreen from './SummaryScreen'; // Your summary screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
