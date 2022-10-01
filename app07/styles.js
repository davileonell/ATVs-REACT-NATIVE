import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
  },
  
title:{
  color: '#0000FF',
  fontSize: 25,
  fontStyle: 'italic',
  fontWeight: 'bold',
  alignSelf: 'center',
  margin: 15
},

campos:{
color: 'black',
fontSize: 20,
fontWeight: 'bold',
paddingLeft: 15,
margin:10
},

inputNome:{
borderBottomWidth: 3,
width: 200,
marginLeft: 10
},

inputIdade:{
borderBottomWidth: 3,
width: 50,
marginLeft: 10,
textAlign: 'center'
},

sexo:{
fontSize: 18,
fontWeight: 'bold',
marginLeft: 18
},

escolaridade:{
fontSize: 18,
fontWeight: 'bold',
fontStyle: 'italic',
marginLeft: 18,
width: 230
},

switch:{
marginTop: 30,
marginLeft: 10
},


slider: {
  alignSelf: 'center',
  width: 300,
},

textoLimite:{
textAlign: 'center',
fontWeight: 'bold',
position: 'absolute',
marginTop: 300,
alignSelf: 'center'
},

botao:{
  backgroundColor: 'blue',
  alignSelf: 'center',
  textAlign: 'center',
  width: 200,
  height: 40,
  borderRadius: 20
},

textoBotao: {
  fontSize: 25,
  fontWeight: 'bold',
  color: 'white'
}




})
export {styles};