import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Tabs } from './routes/Tabs';
import Camera from './screen/Camera';
import { ChooseIcon } from './screen/ChooseIcon';
import { EditProfiles } from './screen/EditProfiles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChooseIcon"
          component={ChooseIcon}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="EditProfiles"
          component={EditProfiles}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
