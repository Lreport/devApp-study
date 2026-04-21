import { FlashList } from '@shopify/flash-list';
import { StyleSheet, Text, View } from 'react-native';

import { CardCategoriaML } from '@/components/card-categoria-ml';

const categorias = [
  {
    id: '1',
    titulo: 'MASCULINO',
    imagem: require('@/assets/images/masculino.png'),
  },
  {
    id: '2',
    titulo: 'INFANTIL &\nBEBÊS',
    imagem: require('@/assets/images/infantil.png'),
  },
  {
    id: '3',
    titulo: 'ACESSÓRIOS',
    imagem: require('@/assets/images/acessorios.png'),
  },
  {
    id: '4',
    titulo: 'CALÇADOS',
    imagem: require('@/assets/images/calcados.png'),
  },
];

export function SecaoCategoriasML() {
  return (
    <View style={styles.container}>
      <Text style={styles.linkTermos}>Ver Termos e Condições</Text>

      <FlashList
        horizontal
        data={categorias}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <CardCategoriaML imagem={item.imagem} titulo={item.titulo} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingTop: 18,
    paddingBottom: 22,
  },
  linkTermos: {
    fontSize: 14,
    color: '#3483fa',
    textAlign: 'center',
    marginBottom: 22,
  },
  lista: {
    paddingHorizontal: 14,
    gap: 10,
  },
});
