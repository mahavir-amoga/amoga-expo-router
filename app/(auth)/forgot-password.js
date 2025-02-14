import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ForgotPasswordScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText>Forgot Password Screen</ThemedText>
      <Button
        title="Back to Login"
        onPress={() => router.push("/(auth)/login")}
      />
    </View>
  );
}
