import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeScreen} from '../../components';

const Home = () => {
  const {container, touchableStyle} = styles;
  const navigation = useNavigation();
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   let fetchedData = async () => {
  //     let response = await fetch(
  //       'https://jsonplaceholder.typicode.com/comments',
  //     );
  //     let data = await response.json();
  //     //   console.log("check the fetched Data => ", data);
  //     setComments(data);
  //   };
  //   fetchedData();
  // });

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <SafeScreen style={container}>
      {/* <Icon name="house" size={20} /> */}
      <FlatList
        data={comments}
        scrollEventThrottle={16}
        keyExtractor={(item, index) =>
          item.id.toString() + Math.random() + index
        }
        renderItem={({item}) => {
          return (
            // <View key={Math.random()} style={touchableStyle}>
            //   <Text>{item.body}</Text>
            // </View>
            <TouchableOpacity
              style={touchableStyle}
              key={item.id}
              onPress={() => navigation.navigate('Details', item)}>
              <Text>{item.body}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  touchableStyle: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 3,
    padding: 3,
  },
});
