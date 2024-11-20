import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, Text, View} from 'react-native';
import Home from '../Home';
import Profile from '../Profile';

const Tab = createBottomTabNavigator();

const BottomScreen = () => {
  return (
    // <SafeAreaView>
    //   <Text> Bottom Screen </Text>
    // </SafeAreaView>
    <Tab.Navigator>
      <Tab.Screen
        name={'home'}
        component={Home}
        options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen
        name={'profile'}
        component={Profile}
        options={{headerShown: false}}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomScreen;
