import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

export default function Exercicio2() {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Personagens da Marvel</Text>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.text}>Homem-Aranha</Text>
          <Text style={styles.subtext}>Um adolescente que ganha poderes de aranha após ser picado por uma aranha radioativa.
             Luta contra o crime enquanto equilibra a vida escolar, pessoal e heróica.
              É conhecido como “o amigão da vizinhança”.
              </Text>
          <Image 
            source={require('../assets/images/spiderman.jpg')}
            style={styles.image}
          />
        </View>

         <View style={styles.card}>
          <Text style={styles.text}>Homem de Ferro</Text>
          <Text style={styles.subtext}>Gênio, bilionário, playboy e filantropo. 
            Cria uma armadura de alta tecnologia para salvar sua vida e decide usá-la para combater ameaças globais.
              </Text>
          <Image 
            source={require('../assets/images/ironman.jpg')}
            style={styles.image}
          />
        </View>

         <View style={styles.card}>
          <Text style={styles.text}>Capitão América</Text>
          <Text style={styles.subtext}>Um supersoldado da Segunda Guerra Mundial, símbolo de coragem, justiça e liderança. 
            Carrega um escudo indestrutível e lidera os Vingadores.
              </Text>
          <Image 
            source={require('../assets/images/capitao.jpg')}
            style={styles.image}
          />
        </View>

         <View style={styles.card}>
          <Text style={styles.text}>Viúva Negra</Text>
          <Text style={styles.subtext}>Espiã altamente treinada com habilidades em combate, infiltração e inteligência. 
            Tem um passado sombrio, mas luta para fazer o bem.
              </Text>
          <Image 
            source={require('../assets/images/viuva.jpg')}
            style={styles.image}
          />
        </View>

         <View style={styles.card}>
          <Text style={styles.text}>Thor</Text>
          <Text style={styles.subtext}>Deus do Trovão e príncipe de Asgard. Usa o martelo Mjölnir, 
            que só pode ser empunhado por quem for digno. É poderoso, nobre e às vezes um pouco teimoso.
              </Text>
          <Image 
            source={require('../assets/images/thor.jpeg')}
            style={styles.image}
          />
        </View>

         <View style={styles.card}>
          <Text style={styles.text}>Gavião Arqueiro</Text>
          <Text style={styles.subtext}>Um dos membros mais habilidosos dos Vingadores, mesmo sem superpoderes.
             É um mestre arqueiro e especialista em combate corpo a corpo. 
            Conhecido por sua mira perfeita e flechas com múltiplas funções (explosivas, elétricas, de corda, etc).
              </Text>
          <Image 
            source={require('../assets/images/gaviao.jpg')}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f0f0",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  image: {
    width: 300,
    height: 150,
    borderRadius: 10, 
    resizeMode: "cover",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    marginBottom: 10,
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
    width: 350,
    marginBottom: 15,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtext: {
    fontSize: 12,
    fontWeight: "600", 
    marginBottom: 10,
    textAlign: "center"
  }
});
