import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BarraCategoriasML } from '@/components/barra-categorias-ml';
import { CabecalhoMercadoLivre } from '@/components/cabecalho-mercado-livre';
import { CarrosselBannerML } from '@/components/carrossel-banner-ml';
import { RodapeMercadoLivre } from '@/components/rodape-mercado-livre';
import { SecaoCategoriasML } from '@/components/secao-categorias-ml';
import { SecaoDescontosML } from '@/components/secao-descontos-ml';

export default function MercadoLivreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* cabecalho com busca e endereco */}
      <CabecalhoMercadoLivre />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.conteudo}>
        {/* barra horizontal de categorias */}
        <BarraCategoriasML />

        {/* carrossel principal */}
        <CarrosselBannerML />

        {/* secao de categorias com cards */}
        <SecaoCategoriasML />

        {/* secao de melhores descontos */}
        <SecaoDescontosML />
      </ScrollView>

      {/* rodape fixo */}
      <RodapeMercadoLivre />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffffff1',
  },
  conteudo: {
    paddingBottom: 104,
  },
});
