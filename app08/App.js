import { Component } from 'react';
import { View, StyleSheet, ScrollView, Text,Image} from 'react-native';
 
class App extends Component{
  render(){
    return(

    <View style={styles.container}>
      <Text style={styles.anuncio}>Anúncios</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
      <View style={styles.box1}>
        <View style={styles.imagem}>
        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/738875942458662912/rK9NKWrE_400x400.jpg'}} style={{ width: 150, height: 150,borderWidth: 1,}}/>
        <Text style={styles.titulo}> FATEC PG</Text>

        <Text style={styles.texto}> 
       Nesta semana, próximo as instalações da Fatec PG houveram oito assaltos, gerando preocupação entre os alunos. Um dos alunos da Fatec foi agredido ao regir por estar com equipamentos eletrônicos em sua mochila. Com o alto indíce de assaltos questionamos as autoridades:{'\n'}{'\n'}Onde está a segurança pública que Mourão tanto se orgulha?
        </Text>
        </View>
      </View>

      <View style={styles.box2}>
        <View style={styles.imagem}>
          <Image source={{ uri: 'https://i.imgur.com/ql7zYxd.jpeg'}} style={{ width: 150, height: 150,borderWidth: 1}}/>
          <Text style={styles.titulo}> Profº Joseffe</Text>
          <Text style={styles.texto}> Para alegria dos alunos do curso de Análise e Desenvolvimento de Sistemas, o professor Joseffe, da matéria de Programação para Dispositivos Móveis, prometeu pagar um salgado na Malu para cada um que cumprir e fazer todos os TPs. Aos alunos que tirarem nota 10 inclusive, ele disse que poderá pegar uma coca em lata também. {'\n'}{'\n'}Será ele o professor mais querido dentre os alunos de Análise e Desenvolvimento de Sistemas? Quem poderá superá-lo após essa notícia?</Text>
        </View>
      </View>

      <View style={styles.box3}>
        <View style={styles.imagem}>
          <Image source={{ uri: 'https://pbs.twimg.com/media/EM_O46GXsAEGEG2.png'}} style={{ width: 150, height: 150,borderWidth: 1}}/>
          <Text style={styles.titulo}> Grande Homem</Text>
          <Text style={styles.texto}> Allan César, estudante de Análise e Desenvolvimento de Sistemas do período noturno, tem sofrido na matéria de Estrutura de Dados com a Professora Fernanda, todavia essa não é a única sofrência de sua vida. Allan nos relatou: "Sou um homem de grandes princípios e padrões elevados, mas não tenho tido oportunidade de namorar. Estou me desenvolvendo em Banco de Dados e assim aprendendo Join, porém não encontro um atributo em outra tabela para fazer Join, dificíl".{'\n'}{'\n'}Você que é mulher e está solteira, vai mesmo deixar esse grande homem solto? O que você está esperando pra fazer Join com ele?</Text>
          </View>
      </View>

      <View style={styles.box4}>
        <View style={styles.imagem}>
          <Image source={{ uri: 'https://portalcorreio.com.br/portalcorreio/wp-content/uploads/2022/06/2895e0e941bf020c3e749aecc1448674.jpg'}} style={{ width: 150, height: 150,borderWidth: 1}}/>
          <Text style={styles.titulo}> Bailão Fatecano</Text>
          <Text style={styles.texto}> Alunos de Análise e Desenvolvimento de Sistemas estão organizando uma mega festa para chegados do clube da TI, em uma casa com piscina e espaço amplo, haverá jogatinas e muito divertimento, dentro dos limites que o alcóol permitir. Esse clube é o mais unido e daora da Fatec Praia Grande, onde quando um tira nota 6, todos comemoram como um 10. Só alegria.{'\n'}{'\n'}O que você está esperando pra se tornar um chegado desse clube e participar desse Bailão Fatecano?</Text>
        </View>
      </View>
      </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    textAlign: 'center',
    margin: 20,
    backgroundColor: '#8FBC8F'
  },
  anuncio:{
      fontSize: 35,
      color: `#b22222`,
      fontWeight: 'bold',
      margin: 10,
      
  },
  titulo: {
      fontWeight: 'bold',
    
  },

  imagem:{
    flex: 1,
    alignItems: 'center',
    margin: 10,
    
  },
  box1:{
    backgroundColor: 'white',
    width: 300,
    height: 520,
    margin: 5,
    borderWidth: 1,
  },
  box2:{
    backgroundColor: 'white',
    width: 300,
    height: 520,
    margin: 5,
    borderWidth: 1,
  },
  box3:{
    backgroundColor: 'white',
    width: 300,
    height: 520,
    margin: 5,
    borderWidth: 1,
  },
  box4:{
    backgroundColor: 'white',
    width: 300,
    height: 520,
    margin: 5,
    borderWidth: 1,
  },

  texto:{
    textAlign: 'justify'
  },
})

export default App;