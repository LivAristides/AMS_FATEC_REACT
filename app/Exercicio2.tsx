import { Text, View, StyleSheet, Image } from "react-native";

export default function Exercicio2() {
  return (
    //para estilizar, eu declaro uma "class" para o meu componente View e Text
    <View style = {styles.container}>

    <View style = {styles.card}>
      <Image 
      source={require('../assets/images/spiderman.jpg')}
      style={styles.image}>
      </Image>
      <Text style = {styles.text}>Homem-Aranha</Text>
      <Text style = {styles.subtext}>O amigão da vizinhança</Text>
      </View>

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
        backgroundColor: "#f3f0f0",
        
        },
        image: {
          width: 150,
          height: 150,
          borderRadius: 100, 
          resizeMode: "cover",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.25,
          shadowRadius: 6,
        },
        card: {
            backgroundColor: "white",
            padding: 20,
            borderRadius: 20,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.25,
            shadowRadius: 6,
            width: 350
            
        },
        text: {
            fontSize: 22,
            fontWeight: "bold",
        },
        subtext: {
          fontSize: 16,
          fontWeight: "semibold",
        }

      });

