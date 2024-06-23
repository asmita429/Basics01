import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeScreen} from '../../components';

const DetailsScreen = () => {
  const {container, btnStyle} = styles;
  const navigation = useNavigation();

  const route = useRoute();
  // console.log(route);
  const {body} = route.params;
  return (
    <SafeScreen>
      <TouchableOpacity
        style={btnStyle}
        onPress={() => navigation.navigate('Settings')}>
        <Text>Goto Settings</Text>
      </TouchableOpacity>
      <Text>{body}</Text>
    </SafeScreen>
  );
};

export default DetailsScreen;

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
