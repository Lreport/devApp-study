import { Feather, Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

type ModeloCabecalhoBuscaProps = {
  placeholder?: string;
};

export function ModeloCabecalhoBusca({
  placeholder = 'Buscar...',
}: ModeloCabecalhoBuscaProps) {
  return (
    <View style={styles.container}>
      {/* area principal de busca */}
      <View style={styles.caixaBusca}>
        <Feather name="search" size={20} color="#8a8a8a" />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#8a8a8a"
        />
      </View>

      {/* acao secundaria do cabecalho */}
      <View style={styles.acaoSecundaria}>
        <Ionicons name="notifications-outline" size={22} color="#222222" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  caixaBusca: {
    flex: 1,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: '#222222',
  },
  acaoSecundaria: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
