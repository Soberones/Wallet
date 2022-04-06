import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SettingsHome from './screens/settingsHome';
import SettingsModal from './screens/settingsModal';

export default function SettingTab() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="SettingHome" component={SettingsHome} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          headerShown: false,
        }}>
        <Stack.Screen name="SettingsModal" component={SettingsModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
