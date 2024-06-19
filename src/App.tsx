import 'react-native-gesture-handler';

import { NavigationContainer, StackActions } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { StackNavigation } from './presentation/routes/StackNavigation';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';

export const App = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigation /> */}
        <SideMenuNavigator/>
    </NavigationContainer>
  )
}
