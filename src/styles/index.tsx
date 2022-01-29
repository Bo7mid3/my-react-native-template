import { StyleSheet } from "react-native";
import { theme } from "@constants/theme";

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.text,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default styles;
