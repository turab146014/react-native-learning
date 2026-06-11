import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen name="about" options={{ title: "About" }} />

      <Stack.Screen
        name="course-details"
        options={{ title: "Course Details" }}
      />
    </Stack>
  );
}