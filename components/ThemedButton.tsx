import { useThemeColor } from "@/hooks/useThemeColor";
import {
  Pressable,
  StyleSheet,
  Text,
  type TextStyle,
  type ViewStyle,
} from "react-native";

export type ThemedButtonProps = {
  title: string;
  onPress: () => void;
  lightColor?: string;
  darkColor?: string;
  type?: "primary" | "secondary" | "outline";
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export function ThemedButton({
  title,
  onPress,
  lightColor,
  darkColor,
  type = "primary",
  style,
  textStyle,
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "buttonBackground"
  );

  const textColor =
    type === "outline" ? backgroundColor : useThemeColor({}, "buttonText");

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        type === "primary" ? styles.primary : undefined,
        type === "secondary" ? styles.secondary : undefined,
        type === "outline" ? styles.outline : undefined,
        {
          backgroundColor: type === "outline" ? "transparent" : backgroundColor,
        },
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
  primary: {
    backgroundColor: "#007AFF",
  },
  secondary: {
    backgroundColor: "#5856D6",
  },
  outline: {
    borderWidth: 2,
    borderColor: "#007AFF",
  },
});
