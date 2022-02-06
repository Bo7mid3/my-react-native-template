import React, { useState } from "react";
import Background from "@components/Background";
import Header from "@components/Header";
import TextInput from "@components/TextInput";
import Picker from "@components/Picker";
import BackButton from "@components/BackButton";
import Button from "@components/Button";
import Icon from "react-native-vector-icons/FontAwesome5";
import { theme } from "@constants/theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@constants/params";

export default function CreateRessource({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "CreateRessource">) {
  const [pickerA, setPickerA] = useState({ value: null, error: "" });
  const [fieldA, setFieldA] = useState({ value: "", error: "" });
  return (
    <Background>
      <Icon name={"plus-square"} solid size={80} color={theme.colors.primary} />
      <BackButton goBack={navigation.goBack} />
      <Header>Create Ressource</Header>
      <Picker
        value={pickerA.value}
        onSelectItem={(item: { label: string; value: any }) =>
          setPickerA({ value: item.value, error: "" })
        }
        items={[
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
        ]}
        placeholder="Select an item"
      />
      <TextInput
        value={fieldA.value}
        onChangeText={(text: string) => {
          setFieldA({ value: text, error: "" });
        }}
        label="Field A"
      />
      <Button mode="contained">Submit</Button>
    </Background>
  );
}
