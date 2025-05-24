import React, { useState } from 'react';
import {View,Text,FlatList,TouchableOpacity,StyleSheet,Image,} from 'react-native';

const produtos = [
  {
    id: '1',
    nome: 'Notebook Dell XPS 13',
    preco: 'R$ 7.999,00',
    imagem: require('../assets/images/notebook.avif'),
  },
  {
    id: '2',
    nome: 'Smartphone Samsung Galaxy S23',
    preco: 'R$ 4.999,00',
    imagem: require('../assets/images/cel.jpg'),
  },
  {
    id: '3',
    nome: 'Fones de Ouvido Bluetooth Sony',
    preco: 'R$ 799,00',
    imagem: require('../assets/images/fone.webp'),
  },
  {
    id: '4',
    nome: 'Monitor LG UltraWide 29"',
    preco: 'R$ 1.299,00',
    imagem: require('../assets/images/monitor.avif'),
  },
];

export default function Exercicio4_2() {
  const [produtoExpandido, setProdutoExpandido] = useState<string | null>(null);

  const handlePress = (id: string) => {
    setProdutoExpandido(prev => (prev === id ? null : id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => handlePress(item.id)}
        style={styles.botao}
      >
        <Text style={styles.textoBotao}>{item.nome}</Text>
      </TouchableOpacity>

      {produtoExpandido === item.id && (
        <View style={styles.infoExtra}>
          <Image source={{ uri: item.imagem }} style={styles.imagem} />
          <Text style={styles.preco}>{item.preco}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos</Text>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  card: {
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoExtra: {
    marginTop: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  preco: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});
