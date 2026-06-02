import {View, StyleSheet} from "react-native";
import Box from "../../components/Box";

export default function App() {
  return(
    <View style = {styles.container}>
      <Box style={{backgroundColor : "#8e9b00"}}>Box 1</Box>
      <Box style={{backgroundColor : "#f20000"}}>Box 1</Box>
      <Box style={{backgroundColor : "#00edfa"}}>Box 1</Box>
      <Box style={{backgroundColor : "#0077ff"}}>Box 1</Box>
      <Box style={{backgroundColor : "#fb00ff"}}>Box 1</Box>
      <Box style={{backgroundColor : "#777476"}}>Box 1</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    marginTop : 64,
    borderWidth :6,
    borderColor : "blue"
  },
});