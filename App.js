import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaskinScreen from './LaskinScreen';
import HistoryScreen from './HistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Laskin">
        <Stack.Screen name="Laskin" component={LaskinScreen} />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ title: 'History' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
