import * as React from 'react';
import { View, Text, Button,Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
} from '@react-navigation/drawer';

let img = 'https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Macgyver.jpg/220px-Macgyver.jpg';



function Feed({ navigation }) {
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Button
        title="Abrir o Menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}

function Pessoal() {
  return (
    <View style={{ flex: 1,  alignItems: 'justify' }}>
      <Text style ={{ fontSize: 20, margin: 1}}>
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

function Formacao() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
     <Text style ={{ fontSize: 20, margin: 1, alignItems: 'justify'}}>
Western Tech, onde se formou com um diploma duplo em química e física.
      </Text>
    </View>
  );
}

function Experiencia() {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
        <Text style ={{ fontSize: 20, margin: 1}}></Text>
        Depois de se formar na faculdade, ele recusou uma oferta para trabalhar nas proximidades usina nuclear e mais tarde é revelado que ele serviu em breve período durante a Guerra do Vietnã.
<br/><br/>Cinco anos antes do início da série, MacGyver trabalhou como "Hell Fighter", combatendo incêndios em sumatra. Em algum momento durante esse período, a mãe de MacGyver morreu de derrame enquanto ele estava no Afeganistão em missão, embora nenhum detalhe seja dado além do que depois do Natal.<br/><br/> Eventualmente, ele se mudou para Los Angeles onde ele ocupou vários empregos até encontrar acidentalmente Peter Thornton, um agente no Departamento de Serviços Externos. Quando MacGyver salva a vida de Thornton usando um clipe de papel, uma chave e cadarços, MacGyver recebe um emprego como agente de campo no DXS.
    </View>

  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
     <Image
          source={{ uri: img }}
          style={{  width: 150, height: 150, borderRadius: 200 / 2}}
        />
        <view style={{fontSize: 25, margin: 10}}>Angus MacGyver</view>
      <DrawerItemList {...props} />      
     
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    

    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props}  />}
    >
      <Drawer.Screen name="Bem-Vindo" component={Feed} />
      <Drawer.Screen name="Informações Pessoais" component={Pessoal} />
      <Drawer.Screen name="Formação" component={Formacao} />
      <Drawer.Screen name="Experiência" component={Experiencia} />
    </Drawer.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
    
      <MyDrawer />
    </NavigationContainer>
  );
}