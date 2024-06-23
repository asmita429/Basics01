import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Input} from '../../components';

const Home = () => {
  const [text, setText] = useState('');
  function cb(input: string) {
    setText(input);
  }
  console.log(text);
  return (
    <View>
      <Text>Home</Text>
      <Input onChangeText={cb} />
      {text && <Text>{text}</Text>}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
