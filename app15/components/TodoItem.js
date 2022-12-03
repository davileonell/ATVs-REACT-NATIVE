import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

export default function TodoItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <View style={styles.item}>
        <MaterialIcons name="close" size={18} color="red" />
        <Text style={item.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: 'blue',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  itemText: {
    marginLeft: 10,
  },
});
