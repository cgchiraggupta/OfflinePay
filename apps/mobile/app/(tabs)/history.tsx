import { View, Text, ScrollView } from "react-native";
import { TransactionItem } from "../../components/TransactionItem";

export default function HistoryScreen() {
  return (
    <View className="flex-1 bg-navy-900">
      <ScrollView className="flex-1 p-6" contentContainerStyle={{ paddingBottom: 24 }}>
        <Text className="text-navy-200 mb-4">Recent transactions</Text>
        <TransactionItem
          type="sent"
          amount={150}
          merchant="Merchant Name"
          date="Today"
        />
        <TransactionItem
          type="received"
          amount={500}
          merchant="Friend Name"
          date="Yesterday"
        />
        <Text className="text-navy-500 text-center mt-8">No more transactions</Text>
      </ScrollView>
    </View>
  );
}
