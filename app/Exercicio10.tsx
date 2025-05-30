import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const opcoes = [
  {
    id: '1',
    nome: 'Notificações',
    icone: 'notifications-outline',
  },
  {
    id: '2',
    nome: 'Privacidade',
    icone: 'lock-closed-outline',
  },
  {
    id: '3',
    nome: 'Segurança',
    icone: 'shield-checkmark-outline',
  },
  {
    id: '4',
    nome: 'Idioma',
    icone: 'language-outline',
  },
   {
    id: '5',
    nome: 'Tema',
    icone: 'sunny-outline',
  },
   {
    id: '6',
    nome: 'Conta',
    icone: 'person-outline',
  },
];

export default function Configuracoes() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Ionicons name={item.icone} size={24} color="#333" style={styles.icone} />
      <Text style={styles.nome}>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={opcoes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#F9F9F9',
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  icone: {
    marginRight: 15,
  },
  nome: {
    fontSize: 16,
    fontWeight: '500',
  },
});
