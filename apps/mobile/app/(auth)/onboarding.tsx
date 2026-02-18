import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function OnboardingScreen() {
  return (
    <View className="flex-1 bg-navy-900 items-center justify-center p-6">
      <Text className="text-2xl font-bold text-white mb-4">Welcome to FlowPay</Text>
      <Text className="text-navy-200 text-center mb-8">
        Complete setup to start making payments via USSD
      </Text>
      <Pressable className="bg-flowpay-green px-8 py-3 rounded-xl">
        <Link href="/(tabs)" asChild>
          <Text className="text-navy-900 font-semibold">Complete Setup</Text>
        </Link>
      </Pressable>
    </View>
  );
}
