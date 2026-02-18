import { View, Text } from "react-native";

interface TransactionItemProps {
  type: "sent" | "received";
  amount: number;
  merchant: string;
  date: string;
}

export function TransactionItem({
  type,
  amount,
  merchant,
  date,
}: TransactionItemProps) {
  const isSent = type === "sent";
  return (
    <View className="bg-navy-800 rounded-xl p-4 mb-3 flex-row items-center justify-between">
      <View className="flex-row items-center flex-1">
        <View className="w-10 h-10 rounded-full bg-navy-700 items-center justify-center mr-3">
          <Text className="text-lg">{isSent ? "↑" : "↓"}</Text>
        </View>
        <View>
          <Text className="text-white font-medium">{merchant}</Text>
          <Text className="text-navy-400 text-sm">{date}</Text>
        </View>
      </View>
      <Text
        className={`font-semibold ${
          isSent ? "text-red-400" : "text-flowpay-green"
        }`}
      >
        {isSent ? "-" : "+"}₹{amount}
      </Text>
    </View>
  );
}
