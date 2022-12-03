import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Sobre( {route} ){
  const navigation = useNavigation();
   
  return(
    <View>
  


      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> NOME: {route.params?.nome}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> IDADE: {route.params?.idade}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> DATA DE NASCIMENTO: {route.params?.data}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> SEXO: {route.params?.sexos}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> ESCOLARIDADE: {route.params?.escola}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> LIMITE: R$ {route.params?.limite}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> ESTADO CIVIL:  {route.params?.estado}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> BRASILEIRO:  {route.params?.brasileiro ? 
      'Sim' : 'Não'}</Text>
      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , }}> ESTRANGEIRO:  {route.params?.estrangeiro ? 
      'Sim' : 'Não'}</Text>
     
      
    </View>
  )
}
