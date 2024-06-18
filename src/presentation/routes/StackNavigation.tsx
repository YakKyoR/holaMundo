import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/Home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';


export type RootStackParams = {
  Home: undefined,
  Product: {id: number, name: string},
  Products: undefined,
  Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();


export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        shadowColor: 'transparent',
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />

      <Stack.Screen name="Product" component={ProductScreen}/>
    </Stack.Navigator>
  );
}