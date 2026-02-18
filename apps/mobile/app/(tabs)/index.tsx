import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { SignalChecker } from "../../components/SignalChecker";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-navy-900 p-6">
      <SignalChecker />
      <View className="flex-1 justify-center items-center">
        <Text className="text-navy-200 mb-6">Your balance</Text>
        <Text className="text-4xl font-bold text-flowpay-green mb-8">
          ₹0.00
        </Text>
        <Pressable className="bg-flowpay-green px-10 py-4 rounded-xl">
          <Link href="/pay/scan" asChild>
            <Text className="text-navy-900 font-semibold text-lg">
              Pay / Scan
            </Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
}
