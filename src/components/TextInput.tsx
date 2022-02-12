import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "@constants/theme";

export default function TextInput({
  errorText,
  description,
  ...props
}: {
  errorText?: string;
  description?: string;
  value: string;
  onChangeText: { (arg0: string): void };
  label: string;
  returnKeyType?: string;
  error?: string | boolean;
  autoCapitalize?: string;
  autoCompleteType?: string;
  textContentType?: string;
  keyboardType?: string;
  secureTextEntry?: boolean
}) {
  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        activeOutlineColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        outlineColor={"#111"}
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.text,
    height: 50,
  },
  description: {
    fontSize: 13,
    color: theme.colors.text,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});
