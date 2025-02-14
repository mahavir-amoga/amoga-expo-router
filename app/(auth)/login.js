import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.replace("/(tabs)");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ThemedText type="title">Login Screen</ThemedText>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 20,
          gap: 16,
        }}
      >
        <ThemedButton title="Login" fullWidth={true} onPress={handleLogin} />
        <ThemedButton
          title="Forgot Password?"
          variant="outlined"
          fullWidth={true}
          onPress={() => router.push("/(auth)/forgot-password")}
        />
      </View>
    </View>
  );
}
