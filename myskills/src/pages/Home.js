import React, { Fragment } from "react";
import { View, Text } from 'react-native';

export function Home() {
  return (
    
    <Fragment>
      {/* //View seria uma equivalencia ao DIV */}
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
      }}>
        {/* text é um elemento para conseguir colocar texto em tela */}
        <Text> Oi </Text>

      </View>
      <Text style={{

        alignSelf: 'center',
        marginBottom: 20
      }}>
        opa
        </Text>
    </Fragment>
    
  )
}