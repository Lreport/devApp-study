import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

const banners = [
  {
    id: '1',
    imagem: require('@/assets/images/neyma.png'),
  },
  {
    id: '2',
    imagem: require('@/assets/images/neyma.png'),
  },
  {
    id: '3',
    imagem: require('@/assets/images/neyma.png'),
  },
];

export function CarrosselBannerML() {
  return (
    <View style={styles.container}>
      <FlashList
        horizontal
        pagingEnabled
        data={banners}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {/* banner unico */}
            <View style={styles.banner}>
              {/* area da imagem */}
              <View style={styles.areaImagem}>
                <Image source={item.imagem} style={styles.imagemBanner} contentFit="cover" />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff159',
    paddingBottom: 16,
  },
  itemContainer: {
    width,
    alignItems: 'center',
  },
  banner: {
    width: '92%',
    height: 150,
    borderRadius: 10,
    backgroundColor: '#ffe600',
    overflow: 'hidden',
  },
  areaImagem: {
    flex: 1,
    overflow: 'hidden',
  },
  imagemBanner: {
    width: '100%',
    height: '90%',
  },
});
