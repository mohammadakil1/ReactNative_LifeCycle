import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Initial from './screens/Initial';
import StackNav from './screens/Stack';
import FUnLC from './screens/LifeCycle/FunctionLC';
import ClassLC from './screens/LifeCycle/ClassLC';
import BottomScreen from './screens/BottomScreen';
import DrawerScreen from './screens/DrawerScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Initial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StackNav"
          component={StackNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FUnLC"
          component={FUnLC}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ClassLC"
          component={ClassLC}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomScreen"
          component={BottomScreen}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name='DrawerScreen'
          component={DrawerScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
