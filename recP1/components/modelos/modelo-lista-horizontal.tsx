import { FlashList } from '@shopify/flash-list';
import { StyleSheet, Text, View } from 'react-native';

const itensExemplo = [
  { id: '1', titulo: 'Item 1' },
  { id: '2', titulo: 'Item 2' },
  { id: '3', titulo: 'Item 3' },
  { id: '4', titulo: 'Item 4' },
];

export function ModeloListaHorizontal() {
  return (
    <FlashList
      horizontal
      data={itensExemplo}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.texto}>{item.titulo}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingHorizontal: 14,
  },
  item: {
    marginRight: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
  },
  texto: {
    fontSize: 14,
    color: '#333333',
  },
});
