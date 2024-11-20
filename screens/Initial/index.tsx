import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { styles } from './styles';
interface HomeProps {
  navigation: any;
}
const Initial: React.FC<HomeProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('FUnLC', {name: 'Jane'});
        }}>
        <Text style={styles.btnText}>navigate to the Function LC Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('BottomScreen');
        }}>
        <Text style={styles.btnText}>move to bottom tab</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('DrawerScreen');
        }}>
        <Text style={styles.btnText}>move to Drawer Navigation</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
};

export default Initial;

