import React from "react";
import Background from "@components/Background";
import Logo from "@components/Logo";
import Header from "@components/Header";
import Paragraph from "@components/Paragraph";
import Button from "@components/Button";
import { logout } from "@services/authentification";
import { theme } from "@constants/theme";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@constants/params";

export default function Home({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) {
  return (
    <Background>
      <Icon name={"home"} light size={80} color={theme.colors.primary} />
      <Header>Let's start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button onPress={() => navigation.navigate("CreateRessource", {})}>
        Create ressource
      </Button>
      <Button mode="outlined" onPress={() => logout()}>
        Logout
      </Button>
    </Background>
  );
}
