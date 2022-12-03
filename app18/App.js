import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import {styles} from './styles';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      git: [],
      user: '',
      imagem: 'https://i.kym-cdn.com/entries/icons/original/000/018/034/Octocat.png',
      buscador: '',
    };
  }

  buscarPerfil = () => {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({git: data});
        this.setState({imagem: this.state.git.avatar_url})
        this.setState({buscador: 'Criado em: ' +this.state.git.created_at+ '\n' +
        'Repositórios: ' +this.state.git.public_repos+ '\n' +
        'Seguidores: ' +this.state.git.followers+ '\n' +
        'Seguindo: ' +this.state.git.following
        });
        
      })
      .catch((erro) => {
        alert('Usuário não existe. Por favor tente novamente');
      });
  };
      
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.title}>GitHub Profile Search</Text>

        <View>
        <Image style={styles.image}
            source={{uri: this.state.imagem}}
            />

        </View>

        <View>
          <TextInput style={styles.input}
            defaultValue={this.state.user} placeholder="Digite o login GitHub..." onChangeText={(user) => {this.setState({user});}}
          />
          </View>

        <View>
          <Pressable style={styles.button} onPress={() => this.buscarPerfil()}>
            <Text style={styles.textButton}> Localizar </Text>
          </Pressable>
        </View>

        <View>
            <Text style={styles.title}>{this.state.git.name} </Text>
            <Text style={styles.user}>{this.state.git.login}</Text>
        </View>

        <View>
          <Text style={styles.result}>{this.state.buscador} </Text>
        </View>
        
      </View>
    );
  }
}
export default App;
