import { View, Text } from "react-native";

interface MerchantCardProps {
  name: string;
  category: string;
}

export function MerchantCard({ name, category }: MerchantCardProps) {
  return (
    <View className="bg-navy-800 rounded-xl p-4 flex-row items-center">
      <View className="w-12 h-12 rounded-full bg-flowpay-green/20 items-center justify-center mr-4">
        <Text className="text-flowpay-green text-xl">🏪</Text>
      </View>
      <View className="flex-1">
        <Text className="text-white font-semibold text-lg">{name}</Text>
        <Text className="text-navy-400 text-sm">{category}</Text>
      </View>
    </View>
  );
}
