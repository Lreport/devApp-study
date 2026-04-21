import { FlashList } from '@shopify/flash-list';
import { StyleSheet, Text, View } from 'react-native';

const categorias = ['Celulares', 'Veículos', 'Lar', 'Computação', 'Televisores', 'Ver mais'];

export function BarraCategoriasML() {
  return (
    <FlashList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      data={categorias}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.textoCategoria}>{item}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingBottom: 12,
    backgroundColor: '#fff159',
  },
  itemContainer: {
    marginRight: 18,
  },
  textoCategoria: {
    fontSize: 14,
    color: '#333333',
  },
});
