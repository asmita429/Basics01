import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';

interface IProps extends SafeAreaViewProps {
  childeren: React.ReactNode;
}
const SafeScreen = ({children, ...props}) => {
  const {container, textStyle} = styles;
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={container} {...props}>
      {route.name !== 'Home' && (
        <TouchableOpacity onPress={() => navigation.goBack('Home')}>
          <Text style={textStyle}>{'<-'}</Text>
        </TouchableOpacity>
      )}
      {children}
    </SafeAreaView>
  );
};

export default SafeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
  },
});
