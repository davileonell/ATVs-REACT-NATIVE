import React, { Component } from 'react';
import { View, Text, Pressable,Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      result: '',
      link: 'https://pa1.narvii.com/6478/7525aef2deeeb3feb1d9c34ecb94f11b2985de9d_hq.gif'
    };
  }

  randomNum(){
   this.setState({result: Math.floor(Math.random() * 101)})
  }

  render(){
    return(
      <View style={styles.container}>
       
      <Text style={styles.texto}>Jogo do Nº Aleatório!</Text>

      <Image source={{ uri: this.state.link}}
          style={styles.img}
      />
      
     <Text style={styles.frase}>Pense em um nº de 0 a 100</Text>
     <Text style={styles.resultado}>{this.state.result}</Text>

      <Pressable style={styles.botao} onPress={() => this.randomNum()}>
        <Text style={styles.textoBotao}>Descobrir</Text>
      </Pressable>
      </View>
    );
  }
}
export default App;