
import HomeScreen from '@screens/HomeScreen';
import { RouteProps } from '@types';

export const routes: RouteProps[] = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      headerShown: false,
    }
  },
];
