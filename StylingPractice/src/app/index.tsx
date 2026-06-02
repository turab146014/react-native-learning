import {View, Text, StyleSheet } from "react-native";

export default function App() {
  return(
    <View style = {styles.container}>
    <View style = {styles.darkMode}>
      <Text style= {styles.textColor}> Font Color 
        <Text style = {styles.bold}> On Bold</Text> 
      </Text>
    </View>
    <View style = {[styles.lightbluebg, styles.box, styles.androidShadow]}>
      <Text> Abdullah </Text>
    </View>
    <View style = {[styles.box, styles.graybg, styles.androidShadow]}>
      <Text>Turab Shah</Text>
    </View>
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "white", 
      padding: 80
    },
    darkMode: {
      backgroundColor : "black", 
      height : 40,
      width: 150,
      color : "white"
    },
    textColor: {
      color : "white",
    },
    bold: {
      fontWeight : "bold"
    },
    box: {
      height : 50,
      width : 150,
      margin : 35,
      borderWidth : 2,
      borderColor : "black",
      borderStyle : "solid",
      borderRadius : 2,
      backgroundColor : "yellow"
    },
    lightbluebg: {
      backgroundColor : "lightblue"
    },
    graybg :{
      backgroundColor : "gray"
    },
    androidShadow: {
      elevation : 10,
      shadowColor : "#ff0000"
    }
  })