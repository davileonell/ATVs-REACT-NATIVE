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
    backgroundColor: '#0000FF',
    width: 200,
    height: 50,
    alignSelf: 'center',
    borderColor: '#000080',
    borderWidth: 3,
    marginTop: 15
  },
  
  textoBotao:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  input:{
    borderWidth: 3,
    padding: 10,
    alignSelf: 'center',
    width: 250,
    margin: 10,
  },

  resultado:{
    textAlign: 'center',
    fontSize: 25,
    color: '#004F00',
    fontStyle: 'italic',
    margin: 30
  }

  
  
})
export {styles};