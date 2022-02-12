import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity

} from 'react-native';

export function Home() {



  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  // handle é usado quando uma funcao é disparada com alguma interação do usuario
  function handleAddNewSkill() {
    // atualiza o estado
    setMySkills(oldState => [...oldState, newSkill]); // ... é chamado de spread operator: pega tudo do vetor


  }



  return (


    /* //View seria uma equivalencia ao DIV */


    // atributo JSX 'style'
    <View style={styles.container}>

      {/* /** Text é um elemento para conseguir colocar texto em tela */}
      <Text style={styles.title}>Bem-vindo, Kleiton</Text>


      <TextInput
        style={styles.input}
        placeholder="Insira uma nova habilidade"
        placeholderTextColor="#999"
        onChangeText={setNewSkill}
        




      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={.7}
        onPress={handleAddNewSkill}
      >

        <Text

          style={styles.buttonText}>
          Adicionar

        </Text>
      </TouchableOpacity>

      {/* adicionando marginVertical ao title apenas para o 'Minhas habilidades' */}
      <Text style={[styles.title, { marginVertical: 50 }]}>

        {/* {newSkill} */}
        Minhas habilidades


      </Text>

      {

        // map percorre cada elemento do myskills
        mySkills.map(skill => (


          <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>


              {skill}


            </Text>
          </TouchableOpacity>
        ))
      }

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    backgroundColor: '#121915',
    paddingHorizontal: 30
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'

  },

  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,

    // se for IOS, o padding sera 15, caso contrario, sera 10
    padding: Platform.OS === 'ios' ? 15 : 10,

    marginTop: 30,
    marginBottom: 15,
    borderRadius: 7
  },

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
  },

  textSkill: {
    color: '#fff',


    fontSize: 18,
    fontWeight: 'bold',

  },


  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10


  }
});

