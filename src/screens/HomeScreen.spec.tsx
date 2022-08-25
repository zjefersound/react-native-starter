import 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen';
import {render} from '@testing-library/react-native';
import {TailwindProvider} from 'tailwindcss-react-native';

it('renders correctly', () => {
  render(
    <TailwindProvider>
      <HomeScreen />
    </TailwindProvider>,
  );
});
