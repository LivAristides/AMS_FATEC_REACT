import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const dados = [
  {
    id: '1',
    titulo: 'Homem-Aranha',
    imagem: require('../assets/images/spiderman.jpg'), // você pode trocar por outra imagem local
  },
  {
    id: '2',
    titulo: 'Homem de Ferro',
    imagem: require('../assets/images/ironman.jpg'),
  },
  {
    id: '3',
    titulo: 'Capitão América',
    imagem: require('../assets/images/capitao.jpg'),
  },
  {
    id: '4',
    titulo: 'Gavião Arqueiro',
    imagem: require('../assets/images/gaviao.jpg'),
  },
   {
    id: '5',
    titulo: 'Thor',
    imagem: require('../assets/images/thor.jpeg'),
  },
];

export default function Exercicio4() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <Text style={styles.textoBase}>{item.titulo}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#64b4f4',
    borderRadius: 10,
    marginVertical: 10,
    padding: 0,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    height: 120,
    overflow: 'hidden',
  },
  cardImage: {
    width: 120,
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  textoBase: {
    fontSize: 14,
    color: '#FFFAFA',
    fontWeight: 'bold',
    alignItems: 'center'
  },
});
