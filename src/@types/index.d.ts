import {
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from '@react-navigation/native';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

declare type RouteProps = RouteConfig<
  ParamListBase,
  string,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
>;
