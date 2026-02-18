import { View, Text } from "react-native";
import { useSignal } from "../hooks/useSignal";

export function SignalChecker() {
  const { status, isWeak } = useSignal();

  return (
    <View
      className={`flex-row items-center px-3 py-2 rounded-lg mb-4 ${
        isWeak ? "bg-amber-900/50" : "bg-flowpay-green/20"
      }`}
    >
      <View
        className={`w-2 h-2 rounded-full mr-2 ${
          isWeak ? "bg-amber-500" : "bg-flowpay-green"
        }`}
      />
      <Text className="text-sm text-navy-200">
        Network: {status} {isWeak && "(USSD fallback ready)"}
      </Text>
    </View>
  );
}
