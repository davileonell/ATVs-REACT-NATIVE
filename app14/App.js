import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch} from 'react-native';
import {styles} from './styles';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      statusDia: false,
      statusPequeno: false
    };
  }
 
  render(){
    return(

      <View style={styles.container}>

        <View>
        <Text style={styles.tituloPrincipal}><b>Frases</b></Text>
        </View>

        <View>
        <Text><b>Claro</b></Text>
                    <Switch 
                    value={this.state.statusDia}
                    onValueChange={ (valorSwitch) => this.setState({statusDia: valorSwitch})}
                    />
        </View>

        <View>
        <Text><b>Texto Pequeno</b></Text>
                      <Switch 
                      value={this.state.statusPequeno}
                      onValueChange={ (valorSwitch) => this.setState({statusPequeno: valorSwitch})}
                      />
        </View>
        
          <Text style={this.state.statusDia ? styles.dia : styles.noite}>
                  <Text style={this.state.statusPequeno ? styles.pequeno : styles.grande}><b>{'\n'}"Qualquer verdade passa por três estágios: Primeiro, é ridicularizada. Segundo, é violentamente combatida. Terceiro, é aceita como óbvia e evidente." <br/><br/>(Schopenhauer)"</b></Text>
                  
          </Text>

      </View>
    )
  }
};
 
export default App;