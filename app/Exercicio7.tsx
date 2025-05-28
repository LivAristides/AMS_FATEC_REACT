import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";

const data = [
  { id: "1", name: "Homem-Aranha", icon: "bug" },
  { id: "2", name: "Homem de Ferro", icon: "hardware-chip" },
  { id: "3", name: "Thor", icon: "flash" },
  { id: "4", name: "Capitão América", icon: "shield" },
  { id: "5", name: "Viúva Negra", icon: "female" },
  { id: "6", name: "Gavião Arqueiro", icon: "locate" },
];

const ITEM_WIDTH = Dimensions.get("window").width / 3 - 20;

export default function Exercicio2() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={30} color="#fff" />
      </View>
      <Text style={styles.label}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Personagens da Marvel</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#f3f0f0",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#7b2cbf"
  },
  grid: {
    alignItems: "center",
  },
  item: {
    width: ITEM_WIDTH,
    margin: 10,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#7b2cbf", // roxo bonito
    padding: 16,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginTop: 8,
    fontSize: 15,
    textAlign: "center",
  },
});
