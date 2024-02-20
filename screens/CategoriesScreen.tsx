import { FlatList, StyleSheet, Text } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';

export type Category = typeof CATEGORIES[0];

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <CategoryGrid item={item.item} />}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    grid: {
        flex: 1,
    }
})
