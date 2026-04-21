import { Feather, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export function CabecalhoMercadoLivre() {
  return (
    <View style={styles.container}>
      {/* linha principal do topo */}
      <View style={styles.linhaBusca}>
        {/* campo de busca */}
        <View style={styles.caixaBusca}>
          <Feather name="search" size={20} color="#a0a0a0" />
          <TextInput
            style={styles.input}
            placeholder="Buscar no Mercado Livre"
            placeholderTextColor="#a0a0a0"
          />
        </View>

        {/* icone de notificacao */}
        <View style={styles.areaNotificacao}>
          <Ionicons name="notifications-outline" size={24} color="#333333" />
          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>1</Text>
          </View>
        </View>
      </View>

      {/* linha do endereco */}
      <View style={styles.linhaEndereco}>
        <Ionicons name="location-outline" size={18} color="#333333" />
        <Text style={styles.textoEndereco}>Rua Coronel João Gonçalves de Oliveira 2075</Text>
        <Ionicons name="chevron-forward" size={16} color="#333333" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff159',
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 12,
  },
  linhaBusca: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caixaBusca: {
    flex: 1,
    height: 42,
    backgroundColor: '#ffffff',
    borderRadius: 21,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: '#333333',
  },
  areaNotificacao: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -6,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#ff3366',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeTexto: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ffffff',
  },
  linhaEndereco: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoEndereco: {
    flex: 1,
    marginLeft: 6,
    fontSize: 14,
    color: '#333333',
  },
});
