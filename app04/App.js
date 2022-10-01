import React, { Component } from 'react';
import { View, Text, Pressable, TextInput,Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      num1: 0, // Álcool
      num2: 0, // Gasolina
      aux: 0, //Auxiliar 
      result: 'Resultado',
      link: 'https://mega98fm.com.br/portal/wp-content/uploads/2018/05/combustiveis.jpg'
    };

    this.pegaNum1 = this.pegaNum1.bind(this);
    this.pegaNum2 = this.pegaNum2.bind(this);
 
    this.Divisao = this.Divisao.bind(this);
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

  Divisao(){
   this.setState({aux: this.state.num1 / this.state.num2})

   if (this.state.aux < 0.7){
      this.setState({result: 'O Álcool é melhor!'})
      this.setState({link: 'http://www.ceisebr.com/uploads/conteudo/conteudo/2018/12/OZEcO/mascote-etanolzinho-fZngjS_400x400.jpg'})
   }else{
     this.setState({result: 'A Gasolina é melhor!'})
     this.setState({link: 'https://img.myloview.com.br/adesivos/gasoline-can-running-with-trophy-a-vector-cartoon-illustration-of-a-fun-gasoline-can-mascot-running-with-a-trophy-400-155031511.jpg'})
   }
  }

  render(){
    return(
      <View style={styles.container}>
      
      <Text style={styles.texto}>Álcool ou Gasolina?</Text>

      <Image source={{ uri: this.state.link }}
          style={styles.img}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool..."
        onChangeText={this.pegaNum1}
        maxLength={10}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina..."
        onChangeText={this.pegaNum2}
        maxLength={10}
      />

      <Pressable style={styles.botao} onPress={() => this.Divisao()}>
        <Text style={styles.textoBotao}>Verificar</Text>
      </Pressable>

      <Text style={styles.resultado}>{this.state.result}</Text>

      </View>
    );
  }
}
export default App;