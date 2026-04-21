import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type CardOfertaProps = {
  imagem: any;
  titulo: string;
  precoAntigo: string;
  precoAtual: string;
  desconto: string;
  parcelas: string;
  tempoRestante: string;
};

export function CardOferta({
  imagem,
  titulo,
  precoAntigo,
  precoAtual,
  desconto,
  parcelas,
  tempoRestante,
}: CardOfertaProps) {
  return (
    <View style={styles.cardOferta}>
      {/* topo do card */}
      <View style={styles.topoCardOferta}>
        {/* area da imagem do produto */}
        <View style={styles.areaImagemOferta}>
          <Image source={imagem} style={styles.imagemProduto} contentFit="contain" />
        </View>

        {/* icone de favorito */}
        <Ionicons name="heart-outline" size={22} color="#c4c4c4" />
      </View>

      {/* titulo do produto */}
      <Text numberOfLines={3} style={styles.tituloProduto}>
        {titulo}
      </Text>

      {/* preco antigo */}
      <Text style={styles.precoAntigo}>{precoAntigo}</Text>

      {/* linha do preco atual + desconto */}
      <View style={styles.linhaPreco}>
        <Text style={styles.precoAtual}>{precoAtual}</Text>

        <View style={styles.seloDesconto}>
          <Text style={styles.textoDesconto}>{desconto}</Text>
        </View>
      </View>

      {/* parcelas */}
      <Text style={styles.parcelas}>{parcelas}</Text>

      {/* faixa inferior com tempo */}
      <View style={styles.faixaTempo}>
        <View style={styles.blocoRaio}>
          <Ionicons name="flash" size={16} color="#ffffff" />
        </View>

        <View style={styles.blocoTempo}>
          <Text style={styles.legendaTempo}>TERMINA EM:</Text>
          <Text style={styles.valorTempo}>{tempoRestante}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardOferta: {
    width: 170,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    padding: 10,
    minHeight: 255,
    marginRight: 10,
  },
  topoCardOferta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  areaImagemOferta: {
    flex: 1,
    minHeight: 96,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: '#ffffff',
  },
  imagemProduto: {
    width: 92,
    height: 92,
  },
  tituloProduto: {
    fontSize: 14,
    color: '#404040',
    minHeight: 56,
    marginBottom: 6,
  },
  precoAntigo: {
    fontSize: 12,
    color: '#9a9a9a',
    textDecorationLine: 'line-through',
    marginBottom: 2,
  },
  linhaPreco: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  precoAtual: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ff6500',
  },
  seloDesconto: {
    backgroundColor: '#ff8b2b',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  textoDesconto: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  parcelas: {
    fontSize: 14,
    color: '#6b6b6b',
    marginBottom: 12,
  },
  faixaTempo: {
    marginTop: 'auto',
    borderWidth: 1,
    borderColor: '#ff8b2b',
    borderRadius: 6,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  blocoRaio: {
    width: 38,
    backgroundColor: '#ff6500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blocoTempo: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  legendaTempo: {
    fontSize: 10,
    color: '#ff6500',
  },
  valorTempo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ff6500',
  },
});
