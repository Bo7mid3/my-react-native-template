import { View, Text } from "react-native";
import React from "react";
import Background from "@components/Background";
import { ActivityIndicator } from "react-native-paper";

export default function index() {
  return (
    <Background>
      <ActivityIndicator />
    </Background>
  );
}
