import 'react-native';
import {routes} from './routes';

it('has valid routes', () => {
  const isArray = Array.isArray(routes);
  const hasAtLeastOneItem = routes.length > 0;
  expect(isArray && hasAtLeastOneItem).toBe(true);
});
