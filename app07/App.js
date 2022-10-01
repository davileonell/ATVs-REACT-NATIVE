import { Component } from 'react';
import { View, Text, TextInput, Picker, Switch, Pressable,ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      sexo: '',
      formacao: '',
      limite: 500,
      brasileiro: false,
      nome2: '',
      idade2: '',
      sexo2: '',
      formacao2: '',
      limite2: '',
      brasileiro2: false
    };   

    this.pegaNome = this.pegaNome.bind(this);
    this.pegaIdade = this.pegaIdade.bind(this);
    this.confirma = this.confirma.bind(this);
  }

   pegaNome(string){
      this.setState({nome: string});
  }

  pegaIdade(string){
      this.setState({idade: string});
  }

  confirma(){
    this.setState({nome2: this.state.nome})
    if(this.idade > 0){
    this.setState({idade2: this.state.idade})
    }else{
      this.setState({idade2: 'Não Informada'})
    }
    this.setState({sexo2: this.state.sexo})
    this.setState({formacao2: this.state.formacao})
    this.setState({limite2: this.state.limite})
      if (this.state.brasileiro == false){
        this.setState({brasileiro2: 'NÃO'})
     }else{
        this.setState({brasileiro2: 'SIM'})
     }
  }


  render(){
    return(
      <View style={styles.container}>

      <ScrollView>
        <Text style={styles.title}>ABERTURA DE CONTA</Text>

      <Text style={styles.campos}>Nome:
       <TextInput style={styles.inputNome} maxLength={30} onChangeText={this.pegaNome}/>
      </Text>

      <Text style={styles.campos}>Idade:
        <TextInput style={styles.inputIdade} maxLength={2} onChangeText={this.pegaIdade}/>
      </Text>

      <Text style={styles.campos}>Sexo:
        <Picker style={styles.sexo} onValueChange={(value) => {this.setState({sexo: value})}}>
          <Picker.Item label="" />
          <Picker.Item label="M" />
          <Picker.Item label="F" />
          <Picker.Item label="?" />
        </Picker>
      </Text>
      
      <Text style={styles.campos}>Escolaridade:
       <Picker style={styles.escolaridade} onValueChange={(value) => [this.setState({formacao: value})]}>
        <Picker.Item label=""  />
        <Picker.Item label="Fundamental"  />
        <Picker.Item label="Médio"  />
        <Picker.Item label="Graduação(Tecnologo)"  />
        <Picker.Item label="Pós-Graduação"  />
        <Picker.Item label="Mestrado"  />
        <Picker.Item label="Doutorado"  />
      </Picker>
      </Text>

  <Text style={styles.campos}>Limite:</Text>
  <Text style={styles.textoLimite}>R$ {this.state.limite}</Text>

  <Slider style={styles.slider}
      minimumValue={500}
      maximumValue={10000}
      onValueChange={(value) => {this.setState({limite: value})}}
      onSlidingComplete={() => console.log("Sliding complete")}
      onSlidingStart={() => console.log("Sliding start")}
      step={100}
      maximumTrackTintColor='gray' 
      minimumTrackTintColor='blue'
      thumbTintColor='blue'
  />

      <Text style={styles.campos}>Brasileiro?
      <Switch style={styles.switch}
      trackColor={{ false: "#FF0000", true: "#00FF00"}}
      thumbColor={this.state.brasileiro ? '#006400' : '#8B0000'}
      value={this.state.brasileiro}
      onValueChange={(value) => this.setState({brasileiro: value})}
        
      />
      {'\n'}{'\n'}
      </Text>

      <Pressable style={styles.botao} onPress={() => this.confirma()}>
        <Text style={styles.textoBotao}>Confirmar</Text>
      </Pressable>

      <Text style={styles.title}>Dados Informados:</Text>

      <Text style={styles.campos}>Nome: {this.state.nome2}</Text>

      <Text style={styles.campos}>Idade: {this.state.idade2}</Text>
      
      <Text style={styles.campos}>Sexo: {this.state.sexo2}</Text>

      <Text style={styles.campos}>Escolaridade: {this.state.formacao2}</Text>

      <Text style={styles.campos}>Limite: {this.state.limite2}</Text>

      <Text style={styles.campos}>Brasileiro: {this.state.brasileiro2}</Text>

      </ScrollView>
      </View>
    );
  }
}

export default App;