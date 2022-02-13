import React from "react";

import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet

} from 'react-native';


interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title,...rest }: ButtonProps) { // buscou a funcao onPress do Home.js
  return (
    <TouchableOpacity
      style={styles.button}

      {...rest}
    >

      <Text

        style={styles.buttonText}>
        {title}

      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  }
})