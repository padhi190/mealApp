import { FlatList, StyleSheet, Text } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

export type Category = typeof CATEGORIES[0];

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>

function CategoriesScreen({navigation}: Props) {
  const handlePress = (id: string) => {
    navigation.navigate('MealsOverview', { categoryId: id })
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <CategoryGrid item={item.item} onPress={() => handlePress(item.item.id)}/>}
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
