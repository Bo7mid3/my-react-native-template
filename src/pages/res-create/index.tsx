import React, { useState } from "react";
import Background from "@components/Background";
import Header from "@components/Header";
import TextInput from "@components/TextInput";
import Picker from "@components/Picker";
import BackButton from "@components/BackButton";

export default function CreateRessource({ navigation }) {
  const [pickerA, setPickerA] = useState({ value: null, error: "" });
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Create Ressource</Header>
      <Picker
        value={pickerA.value}
        onSelectItem={(item: any) =>
          setPickerA({ value: item.value, error: "" })
        }
        items={[
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
        ]}
        placeholder="Select an item"
      />
      <TextInput label="Field A" />
    </Background>
  );
}
