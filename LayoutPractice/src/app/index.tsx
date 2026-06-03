import {View, StyleSheet} from "react-native";
import Box from "../../components/Box";

export default function App() {
  return(
   // <View style = {{backgroundColor : "plum" , flex: 1}}></View>
    <View style = {styles.container}>
      <Box style={{backgroundColor : "#8e9b00"}}> Box 1 </Box>
      <Box style={{backgroundColor : "#f20", top : 100, left : 100}}> Box 2 </Box>
      <Box style={{backgroundColor : "#00edf0"}}> Box 3 </Box>
      <Box style={{backgroundColor : "#0077"}}> Box 4 </Box>
      <Box style={{backgroundColor : "#fb00f0", position : "abolute" , top : 100 , left : 100}}> Box 5 </Box>
      <Box style={{backgroundColor : "#777476"}}> Box 6 </Box>
      <Box style={{backgroundColor : "#ffe100"}}> Box 7 </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    // justifyContent : "center"
    // alignItems : "flex-start",
    // alignContent : "space-evenly",
    // flexDirection : "row",
    // rowGap : 20,
    // columnGap : 20,
    // gap : 20,
    // flexWrap : "wrap",
    // height : 300,
    // width : 300 ,
    marginTop : 64,
    borderWidth :6,
    borderColor : "blue",
  },
});