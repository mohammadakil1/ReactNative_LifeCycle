import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import React, {useEffect, useState} from 'react';

interface FUnLCProps {
  navigation: any;
  route: any;
}

const FUnLC: React.FC<FUnLCProps> = ({navigation, route}) => {
  // console.log('route===>', route?.params);
  let [count, setCount] = useState(0);

  //Mounting
  useEffect(() => {
    setCount(count + 1);
    // console.log('value is mounted');
  }, []);

  //Updating
  useEffect(() => {
    // console.log('value is updated');
  }, [count]);

  //UnMounting
  useEffect(() => {
    console.log('value is unMounted outside');

    const intervalId = setInterval(() => {
      setCount(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      console.log('value is unMounted inside');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <Text>FUnLC</Text>
      <Text>count : {count}</Text>
      <View style={styles.incDecView}>
        <TouchableOpacity
          style={styles.btnn}
          onPress={() => {
            setCount(count - 1);
          }}>
          <Text>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnn}
          onPress={() => {
            setCount(count + 1);
          }}>
          <Text>+1</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('ClassLC', {name: 'Jane'});
        }}>
        <Text style={styles.btnText}>navigate to the Class LC Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Initial');
        }}>
        <Text style={styles.btnText}>
          navigate back to the function LC Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.goBack(); 
        }}>
        <Text style={styles.btnText}>navigation goback</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FUnLC;
