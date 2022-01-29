import React from 'react'
import Background from '@components/Background'
import Logo from '@components/Logo'
import Header from '@components/Header'
import Paragraph from '@components/Paragraph'
import Button from '@components/Button'
import { logout } from '@services/authentification'

export default function Home({ navigation }: { navigation: any }) {
  return (
    <Background>
      <Logo />
      <Header>Let's start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => logout()}
      >
        Logout
      </Button>
    </Background>
  )
}
