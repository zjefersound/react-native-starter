import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import {NavigationContainer} from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';

export type RootStackParamList = {
  Home: {};
};

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator initialRouteName="Home">
          {routes.map(route => (
            <Stack.Screen key={route.name} {...route} />
          ))}
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default Router;
