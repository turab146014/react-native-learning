import {View, Text, StyleSheet} from "react-native"

export default function Box({children, style}) {
    return(
        <View style = {[styles.box, style]}>
            <Text style = {styles.text}> {children} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box : {
        backgroundColor : "#fff",
        padding : 10,
        // flexGrow : 1
        width : 100,
        height: 80
    },
    text : {
        fontSize : 24,
        fontWeight : "bold",
        textAlign : "center",
        color : "white"
    }
});