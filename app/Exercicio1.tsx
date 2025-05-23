import { Text, View, StyleSheet } from "react-native";

export default function Exercicio1() {
  return (
    //para estilizar, eu declaro uma "class" para o meu componente View e Text
    <View style = {styles.container}>
      <Text style= {styles.text}>Olá! Meu primeiro app Expo</Text>
      <Text>Lívia Aristides de Oliveira</Text>
    </View>
  );
}

//aqui eu estiliso todo o meu código, como se fosse o css
//lembrar de sempre fazer fora do return 
 const styles = StyleSheet.create({
        text: {
         fontSize: 22,
         fontWeight: "bold",
        },
        container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E0BBE4",
        }
      });

