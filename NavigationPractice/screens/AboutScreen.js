import { View, Text, StyleSheet, Button } from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";

export default function AboutScreen() {
  const { name, course } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: name ? String(name) : "About",
        }}
      />

      <Text style={styles.text}>About Screen</Text>

      <Text>Name: {name}</Text>
      <Text>Course: {course}</Text>

      <Button
        title="Update the name"
        onPress={() =>
          router.setParams({
            name: "Codevolution",
          })
        }
      />

      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

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