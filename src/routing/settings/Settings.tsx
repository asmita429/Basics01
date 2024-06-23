import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeScreen} from '../../components';

const Settings = () => {
  // const {btnStyle, container} = styles;
  // const navigation = useNavigation();
  return (
    <SafeScreen>
      <Text>Settings page</Text>
    </SafeScreen>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 3,
    padding: 3,
  },
});
