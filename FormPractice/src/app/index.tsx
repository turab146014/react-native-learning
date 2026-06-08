
import { Platform, StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {

  const [name, setName] = useState ("");
  return (
    <SafeAreaView > 
      <TextInput style = {styles.input} 
      value={name}  onChangeText={setName} 
      placeholder = "Enter your Name"
      // secureTextEntry
      // keyboardType= "numeric"
      autoCorrect = {false}
      autoCapitalize= 'none'
      />

      <TextInput  style = {[styles.input, styles.multilinetext]} placeholder='Describe in your own words'/>
      <Text style = {styles.text}>My name is {name}</Text>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create ( {

  container : {
    flex : 1,
    backgroundColor :  " #fff", 
    paddingTop : StatusBar . currentHeight
  },


  input : {
    height : 40,
    margin : 12,
    padding : 10,
    borderWidth  : 2,
    alignItems  : "center"
  },

  text : {
    fontSize : 19,
    padding : 24
  },


  multilinetext :{
    minHeight : 100,
    textAlignVertical : "top"
  }

});