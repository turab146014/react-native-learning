import { View, Text, StyleSheet, Button } from "react-native";
import { router } from "expo-router";

const CourseListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CourseListScreen</Text>

      <Button
        title="Open React Native Course"
        onPress={() =>
          router.push({
            pathname: "/course-details",
            params: {
              title: "Turab is doing react native course",
            },
          })
        }
      />

      <Button
        title="Go to About"
        onPress={() =>
          router.push({
            pathname: "/about",
            params: {
              name: "Turab",
              course: "React Native",
            },
          })
        }
      />

    </View>
  );
};

export default CourseListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});