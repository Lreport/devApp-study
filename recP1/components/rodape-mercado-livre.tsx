import { MaterialIcons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const itensRodape = [
  { id: 'inicio', titulo: 'Início', icone: 'home', rota: '/mercado-livre' },
  { id: 'categorias', titulo: 'Categorias', icone: 'grid-view', rota: '/mercado-livre' },
  { id: 'carrinho', titulo: 'Carrinho', icone: 'shopping-cart', rota: '/mercado-livre' },
  { id: 'videos', titulo: 'Vídeos', icone: 'play-circle-outline', rota: '/mercado-livre' },
  { id: 'mais', titulo: 'Mais', icone: 'menu', rota: '/mercado-livre' },
] as const;

export function RodapeMercadoLivre() {
  const pathname = usePathname();

  return (
    <View style={styles.rodape}>
      {itensRodape.map((item) => {
        const ativo = item.id === 'inicio' ? pathname === '/mercado-livre' : false;
        const carrinho = item.id === 'carrinho';

        return (
          <Pressable
            key={item.id}
            style={styles.botaoRodape}
            onPress={() => router.push(item.rota)}>
            {carrinho ? (
              <View style={styles.areaCarrinho}>
                <View style={styles.circuloCarrinho}>
                  <MaterialIcons name="shopping-cart" size={28} color="#3483fa" />
                  <View style={styles.badge}>
                    <Text style={styles.badgeTexto}>19</Text>
                  </View>
                </View>
              </View>
            ) : (
              <MaterialIcons
                name={item.icone}
                size={26}
                color={ativo ? '#3483fa' : '#7b7b7b'}
              />
            )}

            <Text style={[styles.textoRodape, ativo ? styles.textoAtivo : styles.textoInativo]}>
              {item.titulo}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  rodape: {
    height: 84,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 6,
  },
  botaoRodape: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaCarrinho: {
    marginTop: -26,
    marginBottom: 2,
  },
  circuloCarrinho: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: 5,
    right: 9,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeTexto: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3483fa',
  },
  textoRodape: {
    fontSize: 11,
    marginTop: 4,
  },
  textoAtivo: {
    color: '#3483fa',
  },
  textoInativo: {
    color: '#7b7b7b',
  },
});
