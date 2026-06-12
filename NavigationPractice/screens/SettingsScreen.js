import { View, Text, StyleSheet, Button } from "react-native";
import { router } from "expo-router";
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingsScreen</Text>
      <Button title = "Go Back"
      onPress={() => router.back("/index")}/>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});