import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { MerchantCard } from "../../components/MerchantCard";

export default function AmountScreen() {
  return (
    <View className="flex-1 bg-navy-900 p-6">
      <MerchantCard name="Demo Merchant" category="Food" />
      <View className="mt-8 mb-8">
        <Text className="text-navy-200 mb-2">Amount</Text>
        <View className="bg-navy-800 p-4 rounded-xl">
          <Text className="text-3xl font-bold text-white">₹100.00</Text>
        </View>
        <Text className="text-navy-500 text-sm mt-2">Enter amount placeholder</Text>
      </View>
      <Pressable className="bg-flowpay-green p-4 rounded-xl items-center">
        <Link href="/pay/confirm" asChild>
          <Text className="text-navy-900 font-semibold">Proceed to Confirm</Text>
        </Link>
      </Pressable>
    </View>
  );
}
