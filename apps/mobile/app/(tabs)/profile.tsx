import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-navy-900 p-6">
      <View className="items-center mb-8">
        <View className="w-20 h-20 rounded-full bg-navy-700 items-center justify-center mb-4">
          <Text className="text-3xl text-flowpay-green">👤</Text>
        </View>
        <Text className="text-xl font-semibold text-white">User Name</Text>
        <Text className="text-navy-400">+91 XXXXX XXXXX</Text>
      </View>
      <Pressable className="bg-navy-800 p-4 rounded-xl mb-4">
        <Text className="text-white">Account Settings</Text>
      </Pressable>
      <Pressable className="bg-navy-800 p-4 rounded-xl mb-4">
        <Link href="/(auth)/sign-in" asChild>
          <Text className="text-flowpay-green">Sign Out</Text>
        </Link>
      </Pressable>
    </View>
  );
}
