import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.replace("/(tabs)");
  };

  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText type="title">Login Screen</ThemedText>

      <ThemedButton title="Login" onPress={handleLogin} />
      <ThemedButton
        title="Forgot Password?"
        type="outline"
        onPress={() => router.push("/(auth)/forgot-password")}
      />
    </ThemedView>
  );
}
