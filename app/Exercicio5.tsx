import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";

export default function Exercicio2() {
  return (
    //para estilizar, eu declaro uma "class" para o meu componente View e Text
    <View style = {styles.container}>
        <Text style = {styles.login}>Login</Text>
        <TextInput placeholder="Email"  style={styles.input}  autoCapitalize="words"/>
        <TextInput placeholder="Senha"  style={styles.input}  autoCapitalize="words"/>
        <Pressable style = {styles.button}><Text style={styles.text}>Entrar</Text></Pressable>
        <Text style={styles.esquecisenha}>Esqueci Senha</Text>
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
        login: {
        fontSize: 22,
        fontWeight: "bold",
        color: "purple",
        marginBottom: 20
        },
        input: {
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        marginBottom: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderColor: "grey",
        borderWidth: 1,
        width: 300

        },

        button: {
        backgroundColor: 'purple',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        width: 300,
        
    },
        text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    esquecisenha: {
        fontSize: 13,
        fontWeight: "semibold",
        color: "purple",
        textAlign: 'left'
    }

      });

