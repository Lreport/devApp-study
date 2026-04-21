import { Entypo, Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

export function CabecalhoBusca() {
  return (
    <View style={styles.header}>
      {/* caixa de busca */}
      <View style={styles.caixaBusca}>
        <Ionicons name="search" size={24} color="#7f7f7f" />
        <TextInput
          style={styles.input}
          placeholder="Aperte o K e busque aqui"
          placeholderTextColor="#7f7f7f"
        />
      </View>

      {/* botao do carrinho */}
      <View style={styles.botaoCarrinho}>
        <Entypo name="shopping-cart" size={24} color="#0373d6" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#005aa9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  caixaBusca: {
    flex: 1,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#7f7f7f',
  },
  botaoCarrinho: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
