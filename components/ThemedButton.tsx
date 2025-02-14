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
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export function ThemedButton({
  title,
  onPress,
  lightColor,
  darkColor,
  variant = "contained",
  fullWidth = false,
  style,
  textStyle,
  ...props
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "buttonBackground"
  );

  const textColor =
    variant === "contained" ? useThemeColor({}, "buttonText") : backgroundColor;

  const borderColor = backgroundColor;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        variant === "contained" && { backgroundColor },
        variant === "outlined" && { borderColor, borderWidth: 2 },
        variant === "text" && { backgroundColor: "transparent" },
        fullWidth ? styles.fullWidth : {},
        pressed && styles.pressed,
        style,
      ]}
      {...props}
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
  fullWidth: {
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
});
