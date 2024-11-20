import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    text:{
        color:'black',
        fontSize:20
    },
    btnText:{
        color:'white'
    },
    backgroundStyle: {
      backgroundColor: Colors.darker,
      flex: 1,
      alignItems: 'flex-start',
    },
    btn: {
      backgroundColor: 'gray',
      margin: 10,
      paddingHorizontal: 20,
      paddingVertical:3,
      borderRadius: 5,
    },
    txt: {
      color: 'black',
    },
})