import { MaterialIcons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const itensRodape = [
  {
    id: 'home',
    titulo: 'Home',
    icone: 'home',
    rota: '/kabum',
  },
  {
    id: 'departamentos',
    titulo: 'Departamentos',
    icone: 'view-list',
    rota: '/kabum',
  },
  {
    id: 'favoritos',
    titulo: 'Favoritos',
    icone: 'favorite',
    rota: '/kabum',
  },
  {
    id: 'minha-conta',
    titulo: 'Minha Conta',
    icone: 'person',
    rota: '/kabum',
  },
] as const;

export function RodapeMarketplace() {
  const pathname = usePathname();

  return (
    <View style={styles.rodape}>
      {itensRodape.map((item) => {
        const ativo = item.id === 'home' ? pathname === '/kabum' : false;

        return (
          <Pressable
            key={item.id}
            style={styles.botaoRodape}
            onPress={() => router.push(item.rota)}>
            <MaterialIcons
              name={item.icone}
              size={24}
              color={ativo ? '#ffffff' : '#8fb5d6'}
            />
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
    height: 72,
    backgroundColor: '#005aa9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#0a6fcb',
  },
  botaoRodape: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  textoRodape: {
    fontSize: 12,
    fontWeight: '500',
  },
  textoAtivo: {
    color: '#ffffff',
  },
  textoInativo: {
    color: '#8fb5d6',
  },
});
