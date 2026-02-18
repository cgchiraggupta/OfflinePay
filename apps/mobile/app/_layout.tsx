import "../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0a1628" },
          headerTintColor: "#22c55e",
          headerTitleStyle: { fontWeight: "600" },
          contentStyle: { backgroundColor: "#0a1628" },
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="pay" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
