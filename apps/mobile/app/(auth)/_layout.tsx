import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#0a1628" },
      }}
    >
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
