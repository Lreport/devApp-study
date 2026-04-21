import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type CardCategoriaMLProps = {
  imagem: any;
  titulo: string;
};

export function CardCategoriaML({ imagem, titulo }: CardCategoriaMLProps) {
  return (
    <View style={styles.card}>
      {/* area da imagem da categoria */}
      <View style={styles.areaImagem}>
        <Image source={imagem} style={styles.imagemCategoria} contentFit="cover" />
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
    marginRight: 15,
  },
  areaImagem: {
    width: 88,
    height: 88,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
  },
  imagemCategoria: {
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
