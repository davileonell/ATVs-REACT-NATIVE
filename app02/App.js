import React, { Component } from 'react';
import { View, Text, Pressable} from 'react-native';
import { styles } from './styles';
 
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      num: 0,
    };
  }

  somar(){
    this.setState({num: this.state.num + 1});
  }

  subtrair(){
    if (this.state.num == 0){
      alert('Não permitimos redução populacional!')
    }else{
      this.setState({num: this.state.num - 1});
    }
  }

   zerar(){
    if (this.state.num > 1){
      this.setState({num: 0});
    }
  }

  render(){
    return(
      <View style={styles.container}>
      
      <Text style={styles.texto}>Contador de Pessoas</Text>

      <Text style={styles.contador}>{this.state.num}</Text>

      <Pressable style={styles.botao} onPress={() => this.somar()}>
        <Text style={styles.textoBotao}>+</Text>
      </Pressable>

      <Pressable style={styles.botao2} onLongPress={() => this.zerar()} onPress={() => this.subtrair()}>
        <Text style={styles.textoBotao2}>-</Text>
      </Pressable>
 
      </View>
    );
  }
}
export default App;