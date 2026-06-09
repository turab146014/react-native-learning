
import { StyleSheet, Text,View, StatusBar, TextInput, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {

  const [name, setName] = useState (""); 

  const [isDarkMode, setIsDarkMode] = useState (false);

  return (
    <SafeAreaView style={styles.container}>

      <TextInput 
      style = {styles.input} 
      value={name}  
      onChangeText={setName}
      placeholder = "Enter your Name"
      // secureTextEntry
      // keyboardType= "numeric"
      autoCorrect = {false}
      autoCapitalize= 'none'
      />

      <TextInput  
      style = {[styles.input, styles.multilinetext]} 
      placeholder='Describe in your own words'/>
      <Text style = {styles.text}>My name is {name}</Text>

      <View style = {styles.switchContainer}>
        <Text style = {styles.switchText}>Dark Mode</Text>
        <Switch 
        value = {isDarkMode}
        onValueChange={() => setIsDarkMode((previousState) => !previousState) }
        trackColor={{false : "black", true : "red"}}
        thumbColor= "orange"
        />
      </View>
      
      
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
  },

  switchContainer : {

    flexDirection : "row",
    justifyContent : "space-between",
    paddingHorizontal : 18,
    alignItems : "center"

  },

  switchText : {
    
    fontSize : 20,
    color : "gray"

  }


});