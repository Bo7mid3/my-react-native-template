import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import Background from "@components/Background";

export default function Splash() {
  return (
    <Background>
      {/* @ts-ignore */}
      <ActivityIndicator />
    </Background>
  );
}
