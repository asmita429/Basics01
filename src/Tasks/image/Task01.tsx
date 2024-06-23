import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

function Task01(): React.JSX.Element {
  // group styles into one obj
  const {container, textStyle, touchable, imgContainer, image} = styles;
  const btnAlert = () => {
    return Alert.alert('Button is clicked');
  };

  return (
    <React.Fragment>
      <View style={container}>
        <Text style={textStyle}>Hello Nitesh Dai!</Text>

        {/* Always keep image inside a view component */}
        {/* <Image source={{uri:'www.someimage.com'}} /> */}
        <View style={imgContainer}>
          <Image style={image} source={require('../../assets/SS.png')} />
        </View>
        {/* Buttons in RN */}
        <TouchableOpacity style={touchable} onPress={btnAlert}>
          <Text style={textStyle}>Click me</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
    // create a constants folder and save image url file, text files then use it
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    color: 'blue',
    padding: 3,
    fontSize: 22,
  },
  touchable: {
    backgroundColor: 'pink',
    padding: 2,
    borderRadius: 10,
  },
  imgContainer: {
    width: 200,
    height: 200,
    textAlign: 'center',
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Task01;
