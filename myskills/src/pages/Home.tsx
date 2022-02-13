import React, { useState, useEffect } from "react";

// components React Native
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  // carrega todos os elementos de uma lista para a rolagem (Poucos itens = tudo bem usar scrollView)
  FlatList, // carrega apenas os elementos da lista que estão sendo visualizados no momento (muitos itens = ganho de performance)


} from 'react-native';


import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

// criando um tipo de dado
interface SkillData {
  id: string;
  name: string;
  date?: Date; // '?' atributo opcional
}




export function Home() {



  const [newSkill, setNewSkill] = useState(''); // useState é um Hook. Um hook cria componentes funcionais (baseados em funcoes)
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreeting] = useState('');



  // handle é usado quando uma funcao é disparada com alguma interação do usuario
  function handleAddNewSkill() {

    // objeto
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }




    // atualiza o estado
    setMySkills(oldState => [...oldState, data]); // ... é chamado de spread operator: pega tudo do vetor


  }

  // arrow function () => (), ou () => {}



  useEffect(() => {
    const currentHour = new Date().getHours();
    console.log(currentHour);

    if (currentHour < 12) {
      setGreeting('Bom dia');
    }

    else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde');
    } else {

      setGreeting('Boa noite');
    }
  }, [])



  return (


    /* //View seria uma equivalencia ao DIV */


    // atributo JSX 'style'
    <View style={styles.container}>


      {/* /** Text é um elemento para conseguir colocar texto em tela */}
      <Text style={styles.title}>Bem-vindo, Kleiton</Text>

      <Text style={styles.greetings}>
        {greetings}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Insira uma nova habilidade"
        placeholderTextColor="#999"
        onChangeText={setNewSkill}

      />


      <Button 
        onPress={handleAddNewSkill}
        title="Adicionar"
        activeOpacity={0.7}
      />




      {/* adicionando marginVertical ao title apenas para o 'Minhas habilidades' */}
      <Text style={[styles.title, { marginVertical: 50 }]}>

        {/* {newSkill} */}
        Minhas habilidades


      </Text>



      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item.name} />
        )}
      />


    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#121915',

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

    // se for IOS, o padding sera 15, caso contrario, sera 10
    padding: Platform.OS === 'ios' ? 15 : 10,

    marginTop: 30,
    marginBottom: 15,
    borderRadius: 7
  },

  greetings: {
    color: '#FFF'
  }

});

