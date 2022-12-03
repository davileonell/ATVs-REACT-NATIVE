import React from 'react';
import { View, Text } from 'react-native';
 
export default function Home() {
 return (
   <View >
   <Text style={{alignItems: 'justify', marginBottom: 20, fontSize: 18}}>Angus "Mac" MacGyver é o personagem do título e o protagonista na série de TV MacGyver. Ele é jogado por Richard Dean Anderson no Série original de 1985. Lucas Till retrata uma versão mais jovem do MacGyver em a reinicialização de 2016.</Text>

    <Text style ={{ fontSize: 15, margin: 1}}>
        <Text style ={{fontWeight: 'bold'}}>Nome completo:</Text>  Angus MacGyver;
        <br/><br/>
        <Text style ={{fontWeight: 'bold'}}>Data de nascimento:</Text>  23/03/1952;
        <br/><br/>
        <Text style ={{fontWeight: 'bold'}}>Ocupação:</Text>	 Agente secreto;
        <br/><br/>
        <Text style ={{fontWeight: 'bold'}}>Família:</Text><br/>
        Ellen Jackson ( mãe );<br/>
        James MacGyver ( pai );<br/>
        Sean Angus "Sam" Mallory ( filho );<br/>
        Harry Jackson ( avô );<br/>
        Cecilia Jackson ( avó ).
        <br/><br/>
        <Text style ={{fontWeight: 'bold'}}>Nacionalidade:</Text>	Americano.
      </Text>
   </View>
  );
}
