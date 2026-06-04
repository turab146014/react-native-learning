import React from "react";
import {Pressable, Text} from "react-native";

const Custombutton = ({onPress, title}) => (
    <Pressable
        onPress = {onPress}
        style = {{
            justifyContent : "center",
            alignItems : "center",
            backgroundColor : "blue",
            borderRadius : 5,
            padding : 10,    
        }}>
            <Text style = {{color : "purple", fontSize : 18}}>{title}</Text>
    </Pressable>
);


export default Custombutton;