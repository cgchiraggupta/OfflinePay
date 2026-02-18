import { Stack } from "expo-router";

export default function PayLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0a1628" },
        headerTintColor: "#22c55e",
        contentStyle: { backgroundColor: "#0a1628" },
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="scan" options={{ title: "Scan to Pay" }} />
      <Stack.Screen name="amount" options={{ title: "Enter Amount" }} />
      <Stack.Screen name="confirm" options={{ title: "Confirm Payment" }} />
      <Stack.Screen
        name="result"
        options={{ title: "Payment Result", headerBackVisible: false }}
      />
    </Stack>
  );
}
