import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function SignInScreen() {
  return (
    <View className="flex-1 bg-navy-900 items-center justify-center p-6">
      <Text className="text-3xl font-bold text-flowpay-green mb-2">
        FlowPay
      </Text>
      <Text className="text-navy-200 text-center mb-8">
        Pay with confidence on weak networks
      </Text>
      <Pressable className="bg-flowpay-green px-8 py-3 rounded-xl">
        <Link href="/(auth)/onboarding" asChild>
          <Text className="text-navy-900 font-semibold">Sign In with Phone</Text>
        </Link>
      </Pressable>
    </View>
  );
}
