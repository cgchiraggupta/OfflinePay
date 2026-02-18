import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#0a1628" },
        headerTintColor: "#22c55e",
        tabBarStyle: { backgroundColor: "#0a1628", borderTopColor: "#00122a" },
        tabBarActiveTintColor: "#22c55e",
        tabBarInactiveTintColor: "#6681a5",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerTitle: "FlowPay" }}
      />
      <Tabs.Screen name="history" options={{ title: "History" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
