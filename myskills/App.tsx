import React from "react";

import { StatusBar } from "react-native";

import {  Home } from "./src/pages/Home";


//Chamando o arquivo home.js para manter controle dos arquivos criados por mim.

export default function App(){
 return (
 <>
 <StatusBar barStyle="light-content" />
 <Home  />
 
 </>

 )
}

