import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type ModeloCardProdutoProps = {
  imagem: any;
  titulo: string;
  precoAntigo?: string;
  precoAtual: string;
  selo?: string;
  descricaoExtra?: string;
};

export function ModeloCardProduto({
  imagem,
  titulo,
  precoAntigo,
  precoAtual,
  selo = '-10%',
  descricaoExtra = 'Descricao complementar do produto',
}: ModeloCardProdutoProps) {
  return (
    <View style={styles.card}>
      {/* imagem do produto */}
      <View style={styles.areaImagem}>
        <Image source={imagem} style={styles.imagem} contentFit="contain" />
      </View>

      {/* titulo */}
      <Text numberOfLines={3} style={styles.titulo}>
        {titulo}
      </Text>

      {/* preco antigo */}
      {precoAntigo ? <Text style={styles.precoAntigo}>{precoAntigo}</Text> : null}

      {/* preco atual e selo */}
      <View style={styles.linhaPreco}>
        <Text style={styles.precoAtual}>{precoAtual}</Text>
        <View style={styles.selo}>
          <Text style={styles.textoSelo}>{selo}</Text>
        </View>
      </View>

      {/* texto complementar */}
      <Text style={styles.textoExtra}>{descricaoExtra}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 170,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    padding: 10,
  },
  areaImagem: {
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  imagem: {
    width: 92,
    height: 92,
  },
  titulo: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 6,
  },
  precoAntigo: {
    fontSize: 12,
    color: '#989898',
    textDecorationLine: 'line-through',
  },
  linhaPreco: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  precoAtual: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ff6500',
  },
  selo: {
    marginLeft: 8,
    backgroundColor: '#ff8b2b',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  textoSelo: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
  },
  textoExtra: {
    fontSize: 13,
    color: '#666666',
  },
});
