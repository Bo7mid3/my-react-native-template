import React from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '@constants/theme'

export default function Button({ mode, style, ...props }: { mode?: "text" | "outlined" | "contained", style?: StyleProp<ViewStyle>, children: string, onPress?: () => void }) {
  return (
    /* @ts-ignore */
    < PaperButton
      style={
        [
          style,
          styles.button,
          mode === 'outlined' && {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.text,
          },
        ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
