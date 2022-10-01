import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
  },
  
  texto:{
    textAlign: 'center',
    fontSize: 30,
    color: '#006400',
    fontWeight: 'bold',
  },
  
  botao:{
    backgroundColor: '#90EE90',
    width: 250,
    alignSelf: 'center',
    borderColor:'#004F00',
    borderWidth: 3,
    marginTop: 15
  },
  
  textoBotao:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#004F00',
    padding: 7
  },

  input:{
    borderWidth: 3,
    padding: 10,
    alignSelf: 'center',
    width: 250,
    margin: 10,
    fontStyle: 'italic'
  },

  resultado:{
    textAlign: 'center',
    fontSize: 25,
    color: '#FF0000',
    borderBottomColor: '#FF0000',
    borderBottomWidth: 2,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 30
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

  imgResult:{
    width: 300,
    height: 300,
    alignSelf: 'center',
    resizeMode: 'stretch',
    margin: 20,
    borderWidth: 4,
    borderRadius: 10,
    display: 'none'
  }

  
  
})
export {styles};