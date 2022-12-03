import React, { useState } from 'react';
import { View, Text, Button, TextInput, Switch, Image,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';





export default function Home() {
  const navigation = useNavigation();

  const [name, setName] = useState();
  const [idade, setIdade] = useState();
  const [data, setData] = useState();
  const [civil, setCivil] = useState();
  const [sexo, setSexo] = useState();
  const [escolaridade, setEscolaridade] = useState();
  const [limite, setLimite] = useState();
  const [nacionalidade, setNacionalidade] = useState();
  const [nacionalid, setNacionalid] = useState();
  

  function irSobre() {
    navigation.navigate('Dados informados da conta', {
      nome: name,
      idade: idade,
      data: data,
      estado: civil,
      sexos: sexo,
      escola: escolaridade,
      limite: limite,
      brasileiro: nacionalidade,
      estrangeiro: nacionalid,

    });
  }

  return (
    <View>
      <TextInput style={{color: 'black', fontSize: 15, borderWidth: 3, textAlign: 'left', marginTop: 25 }}
        placeholder="Nome completo..."
        onChangeText={(valor) => setName(valor)}
      />
      <br/>
      <TextInput style={{color: 'black', fontSize: 15, borderWidth: 3, textAlign: 'left', }}
        placeholder="Idade..."
        onChangeText={(valor) => setIdade(valor)}
      />
      <br/>
      <TextInput style={{color: 'black', fontSize: 13, borderWidth: 3, textAlign: 'left', }}
        placeholder="Data de nascimento (Dia/Mês/Ano)..."

        onChangeText={(valor) => setData(valor)}
      />
      <br/>

       <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , fontStyle: 'italic', }}>Estado Civil:</Text>

      <Picker style={{width: 130, marginBottom: 25}}
        selectedValue={civil}
        onValueChange={(itemValor, itemIndex) => setCivil(itemValor)}>
        <Picker.Item label="" valor="" />
        <Picker.Item label="Solteiro(a)" valor="Solteiro(a)" />
        <Picker.Item label="Casado(a)" valor="Casado(a)" />
        <Picker.Item label="Divorciado(a)" valor="Divorciado(a)" />
        <Picker.Item label="Separado(a)" valor="Separado(a)" />
        <Picker.Item label="Viúvo(a)" valor="Viúvo(a)" />
      </Picker> 


      <Text  style={{color: 'black', fontSize: 15, fontWeight: 'bold' , fontStyle: 'italic', }}>Sexo:</Text>

      <Picker style={{width: 130, marginBottom: 25}}
        selectedValue={sexo}
        onValueChange={(itemValor, itemIndex) => setSexo(itemValor)}>
        <Picker.Item label="" valor="" />
        <Picker.Item label="Masculino" valor="Masculino" />
        <Picker.Item label="Feminino" valor="Feminino" />
      </Picker>

      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , fontStyle: 'italic', }}>Escolaridade: </Text>

      <Picker style={{width: 250, marginBottom: 25}}
        selectedValue={escolaridade}
        onValueChange={(itemValor, itemIndex) => setEscolaridade(itemValor)}>
        <Picker.Item label="" value="" />
        <Picker.Item label="Ensino Fundamental Incompleto" value="Supeior Incompleto" />
        <Picker.Item label="Ensino Fundamental Completo" value="Superior Completo" />
        <Picker.Item label="Ensino Médio Incompleto" value="Supeior Incompleto" />
        <Picker.Item label="Ensino Médio Cursando" value="Superior Cursando" />
        <Picker.Item label="Ensino Médio Completo" value="Superior Completo" />
        <Picker.Item label="Ensino Superior Incompleto" value="Supeior Incompleto" />
        <Picker.Item label="Ensino Superior Cursando" value="Superior Cursando" />
        <Picker.Item label="Ensino Superior Completo" value="Superior Completo" />
      </Picker>

      <Text>
      <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Limite:</Text>

        <Slider
          
          onValueChange={(valor) => setLimite(valor)}
          size="5"
          style={{ width: 300, height: 40 }}
          minimumValue={500}
          maximumValue={10000}
          maximumTrackTintColor='gray' 
          minimumTrackTintColor='blue'
          step={100}
          thumbTintColor='blue'
        />{' '}
         <br/>
       <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>R${(limite)}</Text>
      </Text>


      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , fontStyle: 'italic', marginTop: 30}}>Brasileiro?</Text>

      <Switch 
        value={nacionalidade}
        onValueChange={(valor) => setNacionalidade(valor)}
      />

      <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold' , marginTop: 30}}>Estrangeiro?</Text>

      <Switch style={{marginBottom: 50}}
        value={nacionalid}
        onValueChange={(valor) => setNacionalid(valor)}
      />

         <Pressable style={{
            backgroundColor: 'green',
            alignSelf: 'center',
            textAlign: 'center',
            width: 200,
            height: 40,
            borderRadius: 20}} onPress={irSobre}>

              <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'white'}}>Confirmar</Text>
      </Pressable>
    </View>
  );
}
