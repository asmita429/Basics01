import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

interface Iprops {
  onChangeText: any;
}
const Input = props => {
  const {textInputStyle} = styles;
  //   const [text, setText] = useState('');
  //   console.log(text);
  console.log(props);
  return (
    <View>
      <TextInput
        style={textInputStyle}
        onChangeText={input => props.onChangeText(input)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: 22,
    borderWidth: 2,
    borderRadius: 8,
    margin: 3,
    paddingHorizontal: 5,
    width: 100,
  },
});
