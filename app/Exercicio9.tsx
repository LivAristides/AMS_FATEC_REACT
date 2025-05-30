import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const posts = [
  {
    id: '1',
    nome: 'Tony Stark',
    userFoto: require('../assets/images/ironman.jpg'),
    postImagem: require('../assets/images/ny.jpg'),
    descricao: 'Vista de Nova York sobrevoando',
  },
  {
    id: '2',
    nome: 'Steve Rogers',
    userFoto: require('../assets/images/capitao.jpg'),
    postImagem: require('../assets/images/bucky.webp'),
    descricao: '#tbt eu e ele',
  },
  {
    id: '3',
    nome: 'Thor',
    userFoto: require('../assets/images/thor.jpeg'),
    postImagem: require('../assets/images/asgard.webp'),
    descricao: 'Para sempre Asgard! <3',
  },
];

export default function Feed() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Foto e nome */}
      <View style={styles.header}>
        <Image source={item.userFoto} style={styles.userFoto} />
        <Text style={styles.userNome}>{item.nome}</Text>
      </View>

      {/* Imagem do post */}
      <Image source={item.postImagem} style={styles.postImagem} />

      {/* Descrição */}
      <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userFoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userNome: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postImagem: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 8,
  },
  descricao: {
    color: '#555',
  },
});
