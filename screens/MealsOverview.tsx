import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  Text,
  View,
} from 'react-native';
import { RootStackParamList } from '../App';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;

function MealsOverview({ route, navigation }: Props) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const renderMealItem = (item: ListRenderItemInfo<Meal>) => {
    return (
      <Pressable onPress={() => navigation.navigate('MealDetail', {meal: item.item})}>
        <Text>{item.item.title}</Text>
      </Pressable>
    );
  };
  return (
    <View>
      <Text>Meals Overview - {categoryId}</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderMealItem(item)}
      />
      {/* <Text>{JSON.stringify(displayedMeals, null, 2)}</Text> */}
    </View>
  );
}

export default MealsOverview;
