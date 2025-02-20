import { DrawerContent, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabNavigation } from './BottomTabsNavigation';
import { StackNavigation } from './StackNavigation';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { View } from 'react-native';
import { Text } from 'react-native-reanimated/lib/typescript/Animated';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  return (
    <Drawer.Navigator 

      drawerContent={ (props) => <CustomDrawerContent{...props}/>}


     screenOptions={{
      headerShown:false,
      drawerType: 'slide',

      drawerActiveBackgroundColor: globalColors.primary,
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: globalColors.primary,
      drawerItemStyle: {
        borderRadius: 100,
        paddingHorizontal: 20,
      }
      
     }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigation} /> */}
      <Drawer.Screen name="Tabs" component={BottomTabNavigation} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height:200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}