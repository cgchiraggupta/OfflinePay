import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function ResultScreen() {
  const success = true;

  return (
    <View className="flex-1 bg-navy-900 p-6 items-center justify-center">
      <View className="w-20 h-20 rounded-full bg-flowpay-green/20 items-center justify-center mb-6">
        <Text className="text-4xl">{success ? "✓" : "✗"}</Text>
      </View>
      <Text className="text-2xl font-bold text-white mb-2">
        {success ? "Payment Successful" : "Payment Failed"}
      </Text>
      <Text className="text-navy-200 mb-8">
        {success ? "₹100.00 sent to Demo Merchant" : "Please try again"}
      </Text>
      <Pressable className="bg-flowpay-green px-10 py-4 rounded-xl">
        <Link href="/(tabs)" asChild>
          <Text className="text-navy-900 font-semibold">Back to Home</Text>
        </Link>
      </Pressable>
    </View>
  );
}
