
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Exercicio3() {

  return (
    //para estilizar, eu declaro uma "class" para o meu componente View e Text
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.button}>
        <Text style = {styles.textbutton}>Clique aqui!</Text>
      </TouchableOpacity>
    </View>
  );
}

//aqui eu estiliso todo o meu código, como se fosse o css
//lembrar de sempre fazer fora do return 
 const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E0BBE4",
        },
        button: {
            backgroundColor: "purple",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            marginTop: 20,

        },
        textbutton: {
            fontSize: 16,
            fontWeight: "semibold",
            color: "white"

        }
      });

