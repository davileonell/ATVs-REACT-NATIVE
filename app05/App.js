import React, { Component } from 'react';
import { View, Text, Pressable, TextInput,Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      num1: 0, //peso
      num2: 0, //altura
      aux: 0, //IMC
      result: 'Classificação',
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3uACZNVuXFKF391H_zML4R96AgR2WgRx-xmQA3kGMEM2rshcRDLe0vHhe1rnMuMQm2o&usqp=CAU'
    };

    this.pegaNum1 = this.pegaNum1.bind(this);
    this.pegaNum2 = this.pegaNum2.bind(this);
 
    this.IMC = this.IMC.bind(this);
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

  IMC(){
   this.setState({aux: this.state.num1 / (this.state.num2 * this.state.num2) })

  if(this.state.aux >= 40){
      this.setState({result: "Obesidade Mórbida!!!"})

    }else if(this.state.aux >= 35 && this.state.aux <= 39.9){
      this.setState({result: "Obesidade Grau II"})

    }else if(this.state.aux >= 30 && this.state.aux <= 34.9){
      this.setState({result: "Obesidade Grau I"})

    }else if(this.state.aux >= 25 && this.state.aux <= 29.9){
      this.setState({result: "Sobrepeso"})

    }else if(this.state.aux >= 18.5 && this.state.aux <= 24.9){
      this.setState({result: "Peso Normal!"})

    }else if(this.state.aux < 18.5 && this.state.aux > 0){
      this.setState({result: "Abaixo do Peso"})
    }  
  }

  render(){
    return(
      <View style={styles.container}>
      
      <Text style={styles.texto}>Cálculo do IMC</Text>

      <Image source={{ uri: this.state.link}}
          style={styles.img}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso...(coloque ponto)"
        onChangeText={this.pegaNum1}
        maxLength={10}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura...(coloque ponto)"
        onChangeText={this.pegaNum2}
        maxLength={10}
      />

      <Pressable style={styles.botao} onPress={() => this.IMC()}>
        <Text style={styles.textoBotao}>Verificar</Text>
      </Pressable>

      <Text style={styles.resultado}>{this.state.result}</Text>

      </View>
    );
  }
}
export default App;