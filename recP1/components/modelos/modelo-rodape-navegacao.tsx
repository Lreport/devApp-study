import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const itensNavegacao = [
  { id: 'inicio', titulo: 'Inicio', icone: 'home' as const },
  { id: 'busca', titulo: 'Busca', icone: 'search' as const },
  { id: 'favoritos', titulo: 'Favoritos', icone: 'favorite-border' as const },
  { id: 'conta', titulo: 'Conta', icone: 'person-outline' as const },
];

export function ModeloRodapeNavegacao() {
  return (
    <View style={styles.container}>
      {itensNavegacao.map((item, index) => {
        const ativo = index === 0;

        return (
          <Pressable key={item.id} style={styles.botao}>
            <MaterialIcons
              name={item.icone}
              size={24}
              color={ativo ? '#1d6ff2' : '#7a7a7a'}
            />
            <Text style={[styles.texto, ativo ? styles.textoAtivo : styles.textoInativo]}>
              {item.titulo}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  botao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    marginTop: 4,
    fontSize: 11,
  },
  textoAtivo: {
    color: '#1d6ff2',
  },
  textoInativo: {
    color: '#7a7a7a',
  },
});
