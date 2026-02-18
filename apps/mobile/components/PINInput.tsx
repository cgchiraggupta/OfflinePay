import { View, Text } from "react-native";

interface PINInputProps {
  length: number;
  onComplete: (pin: string) => void;
}

export function PINInput({ length, onComplete }: PINInputProps) {
  return (
    <View className="flex-row justify-center gap-3">
      {Array.from({ length }).map((_, i) => (
        <View
          key={i}
          className="w-12 h-14 rounded-lg bg-navy-800 border-2 border-navy-600 items-center justify-center"
        >
          <Text className="text-white text-lg">•</Text>
        </View>
      ))}
    </View>
  );
}
