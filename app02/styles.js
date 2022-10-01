import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
  },
  
  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: '#FF7700',
    fontStyle: 'italic',
    paddingBottom: 30
  },
  
  botao:{
    backgroundColor: '#90EE90',
    width: 200,
    height: 50,
    alignSelf: 'center',
    borderColor: '#005F00',
    borderWidth: 3,
    marginTop: 15
  },
  
  textoBotao:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#004F00'
  },

  contador:{
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    borderWidth: 3,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center',
  },

  botao2:{
    backgroundColor: '#FF6347',
    width: 200,
    height: 50,
    alignSelf: 'center',
    borderColor: '#800000',
    borderWidth: 3,
    marginTop: 15
  },
  
  textoBotao2:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#800000'
  }
   
})
export {styles};