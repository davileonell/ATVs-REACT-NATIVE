import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },

  image: {
    margin: 20,
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: 'deepskyblue',
    borderWidth: 5,
    backgroundColor: 'white'
  },

  input:{
    width: 250,
    height: 42,
    borderWidth: 1,
    borderColor: '#00416b',
    fontSize: 16,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },

  result:{
    fontSize: 18,
    fontWeight: '600',
    flexDirection: 'row',
    color: 'white',
    margin: 10,
  },

  title:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    color: 'deepskyblue',
  },

  user:{
    textAlign: 'center',
    fontSize: 18,
    color: '#bebebe',
    marginBottom: 10,
  },

  button: {
    width: 250,
    height: 36,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'coral',
    margin: 10,
  },

  textButton: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});

export {styles}
 