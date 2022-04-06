import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/home';
import Modal from './screens/modal';

export default function HomeTab() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          headerShown: false,
        }}>
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
