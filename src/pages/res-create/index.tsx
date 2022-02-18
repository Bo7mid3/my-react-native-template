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
import { useForm, Controller } from "react-hook-form";

export default function CreateRessource({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "CreateRessource">) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fieldA: "",
      pickerA: null,
    },
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <Background>
      <Icon name={"plus-square"} solid size={80} color={theme.colors.primary} />
      <BackButton goBack={navigation.goBack} />
      <Header>Create Ressource</Header>
      <Controller
        control={control}
        name="pickerA"
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            value={value}
            onSelectItem={
              (item: { label: string; value: any }) => onChange(item.value)
            }
            items={[
              { label: "Apple", value: "apple" },
              { label: "Banana", value: "banana" },
            ]}
          />
        )}
      />
      <Controller
        /* @ts-ignore */
        control={control}
        rules={{
          required: true,
        }}
        name="fieldA"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            label="Field A"
          />
        )}
      />

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Submit
      </Button>
    </Background>
  );
}
