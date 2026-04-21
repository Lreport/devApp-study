import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

const imagensDesconto = [
  {
    id: '1',
    imagem: require('@/assets/images/desconto30.png'),
  },
  {
    id: '2',
    imagem: require('@/assets/images/desconto30.png'),
  },
  {
    id: '3',
    imagem: require('@/assets/images/desconto30.png'),
  },
  {
    id: '4',
    imagem: require('@/assets/images/desconto30.png'),
  },
];

export function SecaoDescontosML() {
  return (
    <View style={styles.container}>
      {/* titulo da secao */}
      <Text style={styles.titulo}>MELHORES DESCONTOS DE 4.4</Text>

      {/* grade com espacos para imagens */}
      <View style={styles.grade}>
        {imagensDesconto.map((imagem) => (
          <View key={imagem.id} style={styles.areaImagem}>
            <Image source={imagem.imagem} style={styles.imagemDesconto} contentFit="cover" />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 14,
    paddingTop: 18,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '800',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 18,
  },
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  areaImagem: {
    width: '48%',
    height: 106,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  imagemDesconto: {
    width: '100%',
    height: '80%',
  },
});
