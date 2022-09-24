import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import screen
import Home from './Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './Details';
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
          gestureEnabled: true,
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
