import { useState, useRef, useEffect, useMemo } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { theme } from "@constants/theme";
import { useCallback } from "react";

export default function Picker({
  errorText,
  description,
  placeholder,
  label,
  value,
  ...props
}: {
  errorText?: string;
  description?: string;
  value?: any;
  label?: string;
  placeholder?: string;
  onSelectItem?: { (item: { label: string; value: any }): void };
  items: { label: string; value: any }[];
}) {
  const [open, setOpen] = useState(false);
  const floatLabelAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(floatLabelAnim, {
      toValue: open || value != null ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [open]);

  const labelStyle = {
    position: "absolute",
    top: floatLabelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["50%", "0%"],
    }),
    color: "#111",
    fontSize: floatLabelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 14],
    }),
    left: "3%",
    backgroundColor: theme.colors.surface,
    paddingHorizontal: "1.5%",
    transform: [{ translateY: open || value != null ? 0 : -12 }],
    zIndex: 10000,
  };

  const parentHeightOnOpen = useMemo(() => {
    const res = 50+60*props.items.length;
    if (res > 235)
      return 235;
    return res;
  }, [props.items]);

  return (
    <View style={[styles.parentContainer, open && { height: parentHeightOnOpen } ]}>
      <Animated.Text
        /* @ts-ignore */
        style={[labelStyle, open && { color: theme.colors.primary }]}
      >
        Item
      </Animated.Text>
      {/* @ts-ignore */}
      <DropDownPicker
        open={open}
        value={value}
        {...props}
        setOpen={setOpen}
        style={[styles.picker, open && styles.pickerOpened]}
        itemProps={{
          style: styles.item,
        }}
        textStyle={[styles.text]}
        props={{
          activeOpacity: 1,
        }}
        dropDownContainerStyle={{
          
        }}
        maxHeight={180}
        placeholder=""
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
    height: 60
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
