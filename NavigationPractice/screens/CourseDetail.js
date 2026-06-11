import { View, Text, StyleSheet, Button } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function CourseDetailsScreen() {
  const { title } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Course Details</Text>

      <Text>Course: {title}</Text>

      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

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