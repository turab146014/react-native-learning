/*

import {StyleSheet, View, Text, useWindowDimensions} from "react-native";

export default function App() {
  const windowWidth = useWindowDimensions().width ;
  const windowHeight = useWindowDimensions().height ;
  return (

    <View style = {styles.container}>
      <View style = {[styles.box,
        { width : windowWidth > 500 ? "40%" : "70%",
        height : windowHeight > 600 ? "35%" : "90%"},
      ]}>
        <Text style = {{fontSize : windowWidth > 500 ? 50 : 20}}> Code With Turab </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container : {
    flex : 1,
    backgroundColor : "rgb(254, 226, 134)",
    alignItems : "center",
    justifyContent : "center"
  },

  box: {
    backgroundColor : "white",
    justifyContent  : "center",
    alignItems : "center",
    borderRadius : 20,
  },

});

*/



import {StyleSheet, View, Text, Platform} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Custombutton from "../../components/Custombutton/Custombutton";

export default function App() {

  return (
  <SafeAreaView style = {styles.safeAreaContainer}>
  <View style = {styles.container}>
      <View style = {styles.box}>
        <Text style = {styles.text}> Code With Turab </Text>
        <Custombutton title =  "Press Me" onPress = {() => alert("Pressed!")}/>
      </View>
    </View>
  </SafeAreaView>  
  );
}

const styles = StyleSheet.create({

  safeAreaContainer : {
    flex : 1,
    backgroundColor : "lightblue"
  },
  
  container : {
    flex : 1,
    backgroundColor : "lightblue",
    paddingTop : Platform.OS === "android" ? 25 : 0
  },

  box: {
    // height : 200,
    // width: 200,
    // backgroundColor : "black",
    // justifyContent  : "center",
    // alignItems : "center",
    // borderRadius : 20,
    padding : 5
  },

  text: {
    fontSize : 18,
    fontWeight : "bold",
    color : "black",
    textAlign : "center",
    paddingTop : Platform.OS === "android" ? 25 : 0,

    ...Platform.select({

      ios : {
        color : "orange",
        fontWeight : "bold",
        fontSize : 25
      },

      android : {
        color : "gray",
        fontWeight : "bold",
        fontSize : 25
      }

    })
  }

});