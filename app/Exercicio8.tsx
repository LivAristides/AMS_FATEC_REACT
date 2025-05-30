import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PerfilCompleto() {
  return (
    <View style={styles.container}>
      {/* Imagem de capa */}
      <Image
        source={require('../assets/images/spiderman.jpg')}
        style={styles.capa}
      />

      {/* Foto de perfil sobreposta no canto esquerdo */}
      <View style={styles.perfilContainer}>
        <Image
          source={require('../assets/images/spiderman.jpg')}
          style={styles.perfil}
        />
      </View>

      {/* Nome e bio */}
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>Homem-Aranha</Text>
        <Text style={styles.bio}>
          Super-Herói e o amigão da vizinhança!
        </Text>
      </View>

      {/* Seções */}
      <View style={styles.secoes}>
        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Meus Posts</Text>
          <Text style={styles.secaoDescricao}>5 Posts</Text>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Seguidores</Text>
          <Text style={styles.secaoDescricao}>230 Seguidores</Text>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Seguindo</Text>
          <Text style={styles.secaoDescricao}>180 Seguindo</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  capa: {
    width: '100%',
    height: 200,
  },
  perfilContainer: {
    position: 'absolute',
    top: 150,
    left: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  perfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    marginTop: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  secoes: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  secao: {
    marginBottom: 20,
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  secaoDescricao: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
