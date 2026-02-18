import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { MerchantCard } from "../../components/MerchantCard";

export default function ScanScreen() {
  return (
    <View className="flex-1 bg-navy-900 p-6">
      <View className="border-2 border-dashed border-flowpay-green rounded-2xl h-64 items-center justify-center mb-8">
        <Text className="text-flowpay-green text-lg mb-2">QR Scanner</Text>
        <Text className="text-navy-400 text-center px-4">
          Point camera at merchant QR code
        </Text>
      </View>
      <MerchantCard name="Demo Merchant" category="Food" />
      <Pressable className="bg-flowpay-green mt-6 p-4 rounded-xl items-center">
        <Link href="/pay/amount" asChild>
          <Text className="text-navy-900 font-semibold">Continue</Text>
        </Link>
      </Pressable>
    </View>
  );
}
