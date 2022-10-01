import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,
  },
  
  texto:{
    textAlign: 'center',
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
  },
  
  botao:{
    backgroundColor: 'black',
    width: 250,
    alignSelf: 'center',
  },
  
  textoBotao:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: 7
  },

  resultado:{
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 40
  },

  frase: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  img:{
    width: 300,
    height: 300,
    alignSelf: 'center',
    resizeMode: 'stretch',
    margin: 20,
    borderWidth: 4,
    borderRadius: 10
  },

})
export {styles};