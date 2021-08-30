import messaging from '@react-native-firebase/messaging';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetching1, fetching, increment, decrement} from './action';
import fetchSaga from './saga'

const FileOne = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(0);

  const dispatch = useDispatch();
  var count = useSelector(state => state);

  const press = () => {
    dispatch(fetching1());
   
  };

  // console.log('c', count.high);
  return (
    <SafeAreaView style={{flex: 2, backgroundColor: 'white'}}>
      <TouchableOpacity style={{borderWidth: 1, padding: 10}} onPress={press}>
        <Text>fetch data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{padding: 20}}
        onPress={() => {
          
          dispatch(increment(count.high));
        }}>
        <Text style={{fontSize: 40}}>plus</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 30}}>{count.high}</Text>

      <TouchableOpacity
        style={{padding: 20}}
        onPress={() => {
          dispatch(decrement(count.high));
        }}>
        <Text style={{fontSize: 40}}>minus</Text>
      </TouchableOpacity>

      <FlatList
        data={count.data}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={{borderWidth: 1}}>{item.title}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default FileOne;
