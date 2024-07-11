import 'react-native-gesture-handler';

import { NavigationContainer, StackActions } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { StackNavigation } from './presentation/routes/StackNavigation';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottomTabNavigation } from './presentation/routes/BottomTabsNavigation';

export const App = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigation /> */}
        <SideMenuNavigator/>
        {/* <BottomTabNavigation/> */}
    </NavigationContainer>
  )
}
