import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();






export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarLabelStyle:{
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
        },
        tabBarStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        }
      }}
    
    
    >
      <Tab.Screen name="Tab1" options = {{ title: 'Settings', tabBarIcon: ({ color }) => (<Text style={{color:color}}>Tab</Text>) }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options = {{ title: 'Profile', tabBarIcon: ( { color } ) => (<Text style={{color:color}}>Tab</Text>) }}  component={Tab2Screen} />
      <Tab.Screen name="Tab3" options = {{ title: 'Car', tabBarIcon: ( {color} ) => (<Text style={{color:color}}>Tab</Text>) }}  component={Tab3Screen} />
    </Tab.Navigator>
  );
}