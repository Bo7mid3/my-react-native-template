import { useState } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { theme } from "@constants/theme";

export default function Picker({
  errorText,
  description,
  placeholder,
  value,
  ...props
}: {
  errorText?: string;
  description?: string;
  value?: any;
  placeholder?: string;
  onSelectItem?: { (item: { label: string; value: any }): void };
  items: { label: string; value: any }[],
}) {
  const [open, setOpen] = useState(false);


  return (
    <View style={[styles.parentContainer]}>
      {(open || value) && (
        <Animated.Text style={[styles.header, open && { color: theme.colors.primary }]}>
          Item
        </Animated.Text>
      )}
      { /* @ts-ignore */}
      <DropDownPicker
        open={open}
        value={value}
        {...props}
        setOpen={setOpen}
        style={[styles.picker, open && styles.pickerOpened]}
        itemProps={{
          style: styles.item,
        }}
        placeholder={open ? "" : placeholder}
        textStyle={[styles.text]}
        props={{
          activeOpacity: 1,
        }}
        placeholderStyle={[styles.placeholder]}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    position: "relative",
    width: "100%",
    zIndex: 10000,
  },
  header: {
    color: "#111",
    backgroundColor: theme.colors.surface,
    position: "absolute",
    top: "2%",
    left: "3%",
    zIndex: 10000,
    paddingHorizontal: "1.5%",
    fontSize: 13,
  },
  picker: {
    height: 50,
    marginVertical: 12,
    backgroundColor: theme.colors.surface,
    borderColor: "#111",
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 14,
  },
  pickerOpened: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  text: {
    fontSize: 16,
  },
  item: {
    backgroundColor: theme.colors.surface,
    padding: 20,
    flexDirection: "row",
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
  placeholder: {
    color: "#111",
  },
  description: {},
});
