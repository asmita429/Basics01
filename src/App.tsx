import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {Home, Settings} from './screen';
// import {BMI, Calculator, Images} from './Tasks';
// import {Home} from './routing';
import RootNavigation from './navigation/RootNav/Root.tsx';

const Root = () => {
  // const {container} = styles;
  return <RootNavigation />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F8F4E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Root;
