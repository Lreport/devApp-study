import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type ModeloCardCategoriaProps = {
  imagem: any;
  titulo: string;
};

export function ModeloCardCategoria({ imagem, titulo }: ModeloCardCategoriaProps) {
  return (
    <View style={styles.card}>
      {/* imagem da categoria */}
      <View style={styles.areaImagem}>
        <Image source={imagem} style={styles.imagem} contentFit="cover" />
      </View>

      {/* titulo da categoria */}
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 88,
    alignItems: 'center',
  },
  areaImagem: {
    width: 88,
    height: 88,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
  titulo: {
    fontSize: 12,
    fontWeight: '700',
    color: '#333333',
    textAlign: 'center',
  },
});
