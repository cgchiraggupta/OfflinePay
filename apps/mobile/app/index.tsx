import { Redirect } from "expo-router";

export default function Index() {
  // TODO: Replace with actual auth check (Clerk)
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }
  return <Redirect href="/(auth)/sign-in" />;
}
