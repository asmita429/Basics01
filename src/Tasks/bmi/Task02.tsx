import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Task02() {
  const {
    container,
    headingStyle,
    textInputView,
    textStyle,
    inputStyle,
    buttonStyle,
    btnFontStyle,
  } = styles;
  const [weight, setWeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [bmi, setBmi] = useState<number>();

  const handleBtnPress = () => {
    if (height && weight) {
      let heightArr = String(height).split('.');
      let ft = Number(heightArr[0]);
      let inch;
      if (heightArr.length > 1) {
        inch = Number(heightArr[1]);
      } else {
        inch = 0;
      }
      let meterHeight = ft * 0.3048 + inch * 0.0254;
      let result = weight / (meterHeight * meterHeight).toPrecision(3);
      setBmi(result.toFixed(2));
    } else {
      setBmi(0);
    }
  };

  return (
    <React.Fragment>
      <View style={container}>
        <Text style={headingStyle}>BMI Calculator</Text>
        <View style={textInputView}>
          <Text style={textStyle}>Enter Height:(in feets)</Text>
          <TextInput
            style={inputStyle}
            inputMode="decimal"
            maxLength={6}
            onChangeText={input1 => {
              setHeight(input1);
            }}
          />
        </View>
        <View style={textInputView}>
          <Text style={textStyle}>Enter Weight:(in kilograms)</Text>
          <TextInput
            style={inputStyle}
            inputMode="decimal"
            maxLength={6}
            onChangeText={input2 => {
              setWeight(input2);
            }}
          />
        </View>
        <TouchableOpacity style={buttonStyle} onPress={handleBtnPress}>
          <Text style={btnFontStyle}>calculate</Text>
        </TouchableOpacity>
        <Text style={btnFontStyle}>Your BMI is... {bmi}</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69FAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingStyle: {
    color: 'blue',
    fontSize: 28,
  },
  textInputView: {
    margin: 5,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    flex: 4,
    color: '#145C80',
  },
  inputStyle: {
    fontSize: 20,
    borderWidth: 1,
    flex: 1,
    borderRadius: 8,
  },
  buttonStyle: {
    backgroundColor: '#0A85A9',
    padding: 10,
    marginVertical: 30,
    borderRadius: 8,
  },
  btnFontStyle: {
    fontSize: 20,
    margin: 5,
    color: '#000000',
  },
});
export default Task02;
