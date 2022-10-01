import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
 
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, titulo:'Programador Jr', salario: 'Sálario: R$2.200' ,anuncio: '- Inglês básico \n  - Um projeto em Java \n  Contato: abcd@etbilu.com'},
        {id: 2, titulo:'DBA', salario:'Sálario: R$4.600' ,anuncio: '- Conhecimento aprofundado em MySQL \n  - Administrar tabelas SQL \n  Contato: abcd@etbilu.com'},
        {id: 3, titulo:'Programador Mobile Jr', salario:'Sálario:R$1.800' ,anuncio: '- Conhecimento em CSS \n  - Um projeto em React Native \n  - Ter aprendido com Proº Joseffe \n  Contato: abcd@etbilu.com'},
        {id: 4, titulo:'Scrum Master', salario: 'Sálario: R$3.600' ,anuncio: '- Certificação Scrum Master \n  - Boa comunicação \n  Contato: abcd@etbilu.com' },
        {id: 5, titulo:'Monitor Suporte', salario:'Sálario: R$1.750' ,anuncio: '-Conhecimento em Sistemas Opercaionais \n  - Primordial Linux e Mac \n   Contato: abcd@etbilu.com'},
      ]
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={{color: '#FF0000', fontSize: 35, margin:20, fontWeight: 'bold'}}>
          VAGAS EM TI
        </Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Noticia data={item}/>}
        />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  areaPessoa:{
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textoPessoa:{
    color: '#FFF',
    fontSize: 20,
  },
 
})
 
export default App;
 
class Noticia extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>  {this.props.data.img} </Text>
        <Text style={styles.textoPessoa}>  {this.props.data.titulo} </Text>
        <Text style={styles.textoPessoa}>  {this.props.data.salario} </Text>
        <Text style={styles.textoPessoa}>  {this.props.data.anuncio} </Text>
        
      </View>
    );
  }
}