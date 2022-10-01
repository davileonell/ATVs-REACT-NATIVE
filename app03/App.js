import React, { Component } from 'react';
import { View, Text, Pressable, TextInput} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: '__'
    };

    this.pegaNum1 = this.pegaNum1.bind(this);
    this.pegaNum2 = this.pegaNum2.bind(this);
 
    this.Multiplicar = this.Multiplicar.bind(this);
  }

  pegaNum1(numero){
  if (numero >= 0){
      this.setState({num1: numero});
    }
  }

  pegaNum2(numero){
    if (numero >= 0){
      this.setState({num2: numero});
    }
  }

  Multiplicar(){
   this.setState({result: this.state.num1 * this.state.num2})
  }

  render(){
    return(
      <View style={styles.container}>
      
      <Text style={styles.texto}>Multiplicador de Números</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro nº"
        onChangeText={this.pegaNum1}
        maxLength={10}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo nº"
        onChangeText={this.pegaNum2}
        maxLength={10}
      />

      <Pressable style={styles.botao} onPress={() => this.Multiplicar()}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      <Text style={styles.resultado}>Resultado: {this.state.result}</Text>

      </View>
    );
  }
}
export default App;