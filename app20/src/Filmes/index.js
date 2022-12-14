import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Modal} from 'react-native';

import Detalhes from '../Detalhes';

export default function Filmes({data}) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>
        <Image
          style={styles.capa}
          source={{uri: data.foto}}
        />

        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.touchableOpacity} onPress={() => setVisibleModal(true)}>
            <Text style={styles.textButton}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#000',
    margin: 15,
    elevation: 2,
    marginBottom: 30,
    
  },
  capa:{
    height: 250,
    zIndex: 2,
  },
  title:{
    color: 'white',
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'red',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  viewButton:{
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9,
  },
  touchableOpacity:{
    width: 100,
    backgroundColor: 'gold',
    opacity: 1,
    padding: 8,
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  textButton:{
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
