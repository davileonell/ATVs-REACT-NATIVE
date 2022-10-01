import React, { Component } from 'react';
import {View, Text, Image, Linking,ScrollView} from 'react-native';
 
class App extends Component{
  render(){

    let img = 'https://avatars.githubusercontent.com/u/41969226?v=4';
 
    return(
      <View>
        <ScrollView>
        <Image
          source={{ uri: img }}
          style={{ width: 250 , height: 250, alignSelf: 'center'}}
        />

        <Text style={{fontSize: 25, margin: 15, fontWeight:'Bold'}}>
          Dados pessoais:
        </Text>

        <Text style={{fontSize: 20, margin: 15}}>
        Nome: Davi Leonel Guimarães{'\n'}
        Data de Nascimento: 18/09/2000{'\n'}
        Endereço: Praia Grande - SP{'\n'}
        Estado Civil: Solteiro
        </Text>



        <Text style={{fontSize: 25, margin: 15, fontWeight:'Bold'}}>
          Formação:
        </Text>

        <Text style={{fontSize: 20, margin: 15}}>
        Técnico em Informática para Internet - ETEC Extensão Balneário Maracanã (2016-2018);
        {'\n'} {'\n'}
        Tecnólogo em Análise e Desenvolvimento de sistemas - FATEC Praia Grande (2020-2023)
        </Text>

        <Text style={{fontSize: 25, margin: 15, fontWeight:'Bold'}}>
          Experiência:
        </Text>

        <Text style={{fontSize: 20, margin: 15}}>
       Técnico de Informática - Registro de Imóveis e Anexos de Praia Grande (2019-2022)
       {'\n'}{'\n'}
       ATIVIDADES: {'\n'}{'\n'}
       - Montagem, manutenção e configuração de máquinas e rede;{'\n'}
       - Manutenção de dados no SQL Server;{'\n'}
       - Suporte ao usuário na utilização e manutenção do sistema.
        </Text>


        <Text style={{fontSize: 25, margin: 15, fontWeight:'Bold'}}>
          Projetos:
        </Text>

        <Text style={{color: 'blue', fontSize: 25, margin: 15}}
          onPress={() => Linking.openURL('https://github.com/davileonell?tab=repositories')}>
          Repositório GitHub
        </Text>
        </ScrollView>
      </View>
    )
  }
}
 
export default App;
