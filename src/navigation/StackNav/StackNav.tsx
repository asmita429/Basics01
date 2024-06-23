import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Settings, Details} from '../../routing';
import BottomTab from '../BottomTab/BottomTab';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default MyStack;

const styles = StyleSheet.create({});
