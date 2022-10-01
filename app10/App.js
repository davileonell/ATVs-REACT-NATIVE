import { Component } from 'react';
import { View, Text, Pressable, TextInput, Picker,Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      valor: 0, 
      aux: 0,
      result: 'Resultado',
      opt1: '',
      opt2: '',
      link: 'https://imgs.search.brave.com/TbtXGu9eGF8mqbpvock2n5meiJnjKJkj2--R-E6CNqE/rs:fit:500:333:1/g:ce/aHR0cHM6Ly9lY29u/b21pYS5jdWx0dXJh/bWl4LmNvbS9ibG9n/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA5L0MlQzMlQTJt/YmlvLUZpbmFuY2Vp/cm8tNTAweDMzMy5q/cGc'
    };

    this.pegaNum1 = this.pegaNum1.bind(this);
    this.pegaOpt1 = this.pegaOpt1.bind(this);
    this.pegaOpt2 = this.pegaOpt2.bind(this);
 
    this.Conversor = this.Conversor.bind(this);
  }

  pegaNum1(numero){
  if (numero >= 0){
      this.setState({valor: numero});
    }
  }

  pegaOpt1(string){
      this.setState({opt1: string});
  }

    pegaOpt2(string){
      this.setState({opt2: string});
  }

  Conversor(){
    
if (this.state.opt1=='Dólar' && this.state.opt2=='Real'){
  this.setState({aux: 5.41 * this.state.valor})

}else if(this.state.opt1=='Dólar' && this.state.opt2=='Euro'){
  this.setState({aux: 1.02 * this.state.valor})

}else if(this.state.opt1=='Real' && this.state.opt2=='Dólar'){
  this.setState({aux: 0.18 * this.state.valor})

}else if(this.state.opt1=='Real' && this.state.opt2=='Euro'){
  this.setState({aux: 0.19 * this.state.valor})

}else if(this.state.opt1=='Euro' && this.state.opt2=='Real'){
  this.setState({aux: 5.31 * this.state.valor})

}else if(this.state.opt1=='Euro' && this.state.opt2=='Dólar'){
  this.setState({aux: 0.98 * this.state.valor})
}
  }

  render(){
    return(

      <View style={styles.container}>
        <Text style={styles.texto}>Conversor de Moeda {'\n'} Dólar, Euro e Real</Text>

        <Image source={{ uri: this.state.link}}
          style={styles.img}
      />

        <Text style={{color: 'black' , fontSize: 20, margin: 0}}> Valor:
        <TextInput style={styles.input} onChangeText={this.pegaNum1} maxLength={10} />
        </Text>
        
        <Text style={{color: 'black' , fontSize: 20, margin: 0}}> De:</Text>

     <Picker style={styles.picker} onValueChange={(value) => {this.setState({opt1: value})}}>
        <Picker.Item label="" />
        <Picker.Item label="Dólar" />
        <Picker.Item label="Euro" />
        <Picker.Item label="Real" />
      </Picker>

        <Text style={{color: 'black' , fontSize: 20, margin: 0}}> Para:</Text>

      <Picker style={styles.picker} onValueChange={(value) => {this.setState({opt2: value})}}>
       <Picker.Item label="" />
       <Picker.Item label="Dólar" />
       <Picker.Item label="Euro" />
       <Picker.Item label="Real" />
      </Picker>

      <Pressable style={styles.botao} onPress={() => this.Conversor()}>
        <Text style={styles.textoBotao}>Verificar</Text>
      </Pressable>

        <Text style={styles.resultado}>{this.state.result} {this.state.aux}</Text>
      </View>
    );
  }
}
export default App;