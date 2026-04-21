import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

const bannersExemplo = [
  { id: '1', imagem: require('@/assets/images/adsS-flashL1.png') },
  { id: '2', imagem: require('@/assets/images/adsS-flashL2.png') },
  { id: '3', imagem: require('@/assets/images/adsS-flashL3.png') },
];

export function ModeloCarrosselBanner() {
  return (
    <View style={styles.container}>
      <FlashList
        horizontal
        pagingEnabled
        data={bannersExemplo}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.banner}>
              <Image source={item.imagem} style={styles.imagem} contentFit="cover" />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
  },
  itemContainer: {
    width,
    alignItems: 'center',
  },
  banner: {
    width: '92%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
});
