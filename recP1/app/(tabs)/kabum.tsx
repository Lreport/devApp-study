import { Ionicons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CabecalhoBusca } from '@/components/cabecalho-busca';
import { CardOferta } from '@/components/card-oferta';
import { RodapeMarketplace } from '@/components/rodape-marketplace';

const { width } = Dimensions.get('window');

const adsFlash = [
  { id: '1', image: require('@/assets/images/adsS-flashL1.png') },
  { id: '2', image: require('@/assets/images/adsS-flashL2.png') },
  { id: '3', image: require('@/assets/images/adsS-flashL3.png') },
];

const ofertas4DO4 = [
  {
    id: '1',
    imagem: require('@/assets/images/gpu 7600.png'),
    titulo: 'TITULO DO PRODUTO',
    precoAntigo: 'R$ 0,00',
    precoAtual: 'R$ 0,00',
    desconto: '-00%',
    parcelas: 'descricao das parcelas',
    tempoRestante: '00D 00:00:00',
  },
  {
    id: '2',
    imagem: require('@/assets/images/fonte.png'),
    titulo: 'TITULO DO PRODUTO',
    precoAntigo: 'R$ 0,00',
    precoAtual: 'R$ 0,00',
    desconto: '-00%',
    parcelas: 'descricao das parcelas',
    tempoRestante: '00D 00:00:00',
  },
  {
    id: '3',
    imagem: require('@/assets/images/gpu 7600.png'),
    titulo: 'TITULO DO PRODUTO',
    precoAntigo: 'R$ 0,00',
    precoAtual: 'R$ 0,00',
    desconto: '-00%',
    parcelas: 'descricao das parcelas',
    tempoRestante: '00D 00:00:00',
  },
];

export default function KabumScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1a linha: barraBusca / carrinho */}
      <CabecalhoBusca />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.conteudo}>
        {/* container de anuncios */}
        <View style={styles.adsSection}>
          {/* top anuncio statico */}
          <Image
            source={require('@/assets/images/adsS-top.png')}
            style={styles.adsSTop}
          />

          {/* FlashList de anuncios */}
          <FlashList
            style={styles.carouselList}
            data={adsFlash}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image source={item.image} style={styles.banner} contentFit="cover" />
              </View>
            )}
          />

          {/* segundo anuncio statico */}
          <Image source={require('@/assets/images/adsS-feet.png')} style={styles.adsFeet} />
        </View>

        {/* linha 4DO4(ESQUERDA) / temp promocao(DIREITA) */}
        <View style={styles.secao4DO4}>
          {/* cabecalho da secao */}
          <View style={styles.topoSecao}>
            <Text style={styles.tituloSecao}>4DO4</Text>

            <View style={styles.tempoSecao}>
              <Ionicons name="time-outline" size={18} color="#ff6500" />
              <Text style={styles.textoTempoSecao}>02D 14:22:24</Text>
            </View>
          </View>

          {/* flashlist com os cards de oferta */}
          <FlashList
            style={styles.listaOfertas}
            data={ofertas4DO4}
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardOferta
                imagem={item.imagem}
                titulo={item.titulo}
                precoAntigo={item.precoAntigo}
                precoAtual={item.precoAtual}
                desconto={item.desconto}
                parcelas={item.parcelas}
                tempoRestante={item.tempoRestante}
              />
            )}
          />

          {/* rodape da secao */}
          <View style={styles.rodapeSecao}>
            <Text style={styles.textoVerTodos}>VER TODOS</Text>
            <Ionicons name="chevron-forward" size={18} color="#ff6500" />
          </View>
        </View>

        {/* container anuncios 2 */}
        <View style={styles.adSection2}>
            {/* imgame topo*/}
            <Image source={require('@/assets/images/camera canon.png')} style={styles.adsTop2}></Image>

            {/*imagem feet*/}
            <Image source={require('@/assets/images/placas videos.png')} style={styles.adsFeet2}></Image>

        </View>


        {/* componentes temp promocao */}

        {/* container de anuncios estaticos */}
        {/* primeiro anuncio estatico */}
        {/* segundo anuncio estatico */}

        {/* container de mais procurados */}
        {/* top row */}
        {/* dot laranja + text: Mais procurados */}
        {/* text: VER TODOS (laranja) seta > */}
        {/* pills text */}

        {/* componentes de anuncios */}
        {/* componentes temp promocao */}

        {/* container destaque ninja */}
        {/* top row */}
        {/* dot laranja + text: DESTAQUE NINJA */}
        {/* text: VER TODOS (laranja) seta > */}
        {/* pills text */}

        {/* componentes de anuncios */}
        {/* componentes temp promocao */}

      </ScrollView>

      {/* barra fixa inferior */}
      {/* botao home */}
      {/* botao departamentos (barrinhas) */}
      {/* botao fav (coracao) */}
      {/* botao minha conta (user) */}
      <RodapeMarketplace />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  conteudo: {
    paddingBottom: 104,
  },

  //container de ADS
  adsSection: {
    alignItems: 'center',
    marginTop: 12,
  },
  carouselList: {
    width: '100%',
    height: 222,
  },
  adsSTop: {
    width: '95%',
    height: 50,
    borderRadius: 12,
  },
  itemContainer: {
    width,
    alignItems: 'center',
    marginTop: 12,
  },
  banner: {
    width: '95%',
    height: 210,
    borderRadius: 12,
  },

  adsFeet:{
    marginTop: 12,
    width: '95%',
    height: 65,
    borderRadius: 12,
  },

  //container promocao especial.
  secao4DO4: {
    marginTop: 18,
    paddingHorizontal: 12,
  },
  topoSecao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tituloSecao: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ff6500',
  },
  tempoSecao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  textoTempoSecao: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ff6500',
  },
  listaOfertas: {
    width: '100%',
    height: 360,
  },
  rodapeSecao: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoVerTodos: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ff6500',
  },

  //ads section2
  adSection2:{
    alignItems: 'center',
    marginTop: 12,
  },

  adsTop2:{
    marginTop: 12,
    width: '95%',
    height: 85,
    borderRadius: 12,
  },
  
    adsFeet2:{
    marginTop: 12,
    width: '95%',
    height: 85,
    borderRadius: 12,
  },
});
