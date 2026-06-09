import { View, Text , TextInput, Button, StyleSheet, Image, KeyboardAvoidingView, Platform} from "react-native";
import {useState} from "react"
import { Color } from "expo-router";


export default function App () {

const [username, setUsername] = useState ("");
const [password, setPassword] = useState ("");
const [errors, setErrors] = useState ({});

const validateError = () => {
  let errors = {};
  if (!username) errors.username = "Username is Required";
  if (!password) errors.password = "Password is Required";
  setErrors (errors);

  return Object.keys (errors ).length === 0;

}

const handleSubmit = () => {

  if (validateError()) {
    console.log ("Submitted", username, password);
    setUsername ("");
    setPassword ("");
    setErrors ({});
  }

}

  return (
    <KeyboardAvoidingView style = {styles.container} 
    behavior = "padding" 
    keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}>
      <View style = {styles.formCard}>
        <Image  source = {require("../../assets/images/icon.png")}
         style= {styles.image}
        />

        <Text style= {styles.inputText}> Username </Text>
          <TextInput style = {styles.input} placeholder= "Enter your username" value= {username}  onChangeText={setUsername}/>
        {
          errors.username ? (<Text style = {styles. errorText}>{errors.username}</Text> ): null
        }
          <Text style= {styles.inputText}> Password </Text>

          <TextInput style = {styles.input} placeholder= "Enter your password" secureTextEntry value= {password}  onChangeText={setPassword}/> 
         {
          errors.password ? (<Text style = {styles. errorText}>{errors.password}</Text>) : null
        }
        <Button title = "Login" onPress = {handleSubmit}/>

      </View>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create ({

  container : {

    flex : 1,
    backgroundColor : "#dedede",
    justifyContent : "center",
    alignItems: "center",
    paddingHorizontal : 20

  },

  formCard : {

    backgroundColor : "white",
    padding : 20,
    borderRadius : 20,
    elevation : 5,
    alignSelf : "stretch",
    gap : 8
  },


  inputText : {

    fontSize : 16,
    color : "gray",
    marginBottom : 5, 
    fontWeight : "bold",
   

  },


  input  : {

    height  : 40,
    borderColor : "#ddd",
    borderWidth : 1,
    marginBottom  : 15,
    padding  :10,
    borderRadius : 5,

  },

  image :{

    height : 150 , 
    width : 150,
    alignSelf : "center",
    marginBottom : 50,
    borderRadius : 20,
    marginTop : 12

  },


  errorText : {

    color : "red ",
    marginBottom : 10
  }


});