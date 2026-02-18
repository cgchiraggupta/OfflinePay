import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { MerchantCard } from "../../components/MerchantCard";
import { PINInput } from "../../components/PINInput";

export default function ConfirmScreen() {
  return (
    <View className="flex-1 bg-navy-900 p-6">
      <MerchantCard name="Demo Merchant" category="Food" />
      <View className="mt-8 mb-6">
        <Text className="text-navy-200 mb-2">Amount to pay</Text>
        <Text className="text-4xl font-bold text-flowpay-green">₹100.00</Text>
      </View>
      <Text className="text-navy-200 mb-4">Enter PIN to confirm</Text>
      <PINInput length={4} onComplete={() => {}} />
      <Pressable className="bg-flowpay-green mt-8 p-4 rounded-xl items-center">
        <Link href="/pay/result" asChild>
          <Text className="text-navy-900 font-semibold">Confirm Payment</Text>
        </Link>
      </Pressable>
    </View>
  );
}
