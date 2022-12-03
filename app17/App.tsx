import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import {styles} from './styles';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      endereco: [],
      cep: '',
      buscador: '',
    };
  }

  buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({endereco: data});
        this.setState({buscador: 'CEP: ' + this.state.cep + '\n' + 
        'Endereço: ' +this.state.endereco.logradouro+ '\n' +
        'Bairro: ' +this.state.endereco.bairro+ '\n' +
        'Cidade: ' +this.state.endereco.localidade+ '\n' +
        'Estado: ' +this.state.endereco.uf
        });
        
      })
      .catch((erro) => {
        alert('CEP não encontrado. Por favor, digite um CEP válido');
      });
  };
      
  render() {
    return (

      <View style={styles.container}>
        <View>
        <Image style={[styles.image]}
        source={{uri:'https://store-images.s-microsoft.com/image/apps.6607.13510798887520085.3b5999bd-0689-4a5d-b1fa-378e87bb83a5.ee076621-7430-46f1-a4ac-a0c442d69e58?mode=scale&q=90&h=270&w=270&background=%230078D7'}}
        />
        </View>

        <View>
          <TextInput style={styles.input}
            defaultValue={this.state.cep} placeholder="Digite aqui o CEP desejado" keyboardType="numeric" onChangeText={(cep) => {this.setState({cep});}}
          />
          </View>

        <View>
          <Pressable style={styles.button} onPress={() => this.buscarCep()}>
            <Text style={styles.textButton}> Encontrar </Text>
          </Pressable>
        </View>

        <View style={styles.box}>
          <Text style={styles.result}>{this.state.buscador} </Text>
        </View>
        
      </View>
    );
  }
}
export default App;
