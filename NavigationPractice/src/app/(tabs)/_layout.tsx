import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "purple",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Course List",
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarBadge: 3,
        }}
      />
    </Tabs>
  );
}