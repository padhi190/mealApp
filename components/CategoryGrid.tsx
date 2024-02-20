import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Category } from '../screens/CategoriesScreen';

type CategoryProps = {
  item: Category;
  onPress: () => void;
};

function CategoryGrid({ item, onPress }: CategoryProps) {
  return (
    <View
      style={[styles.gridItem]}
    >
      <Pressable
        style={({ pressed }) => pressed ? [styles.button, styles.buttonPressed] : styles.button}
        android_ripple={{ color: '#ccc' }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: item.color}]}>
          <Text>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 8,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 8,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default CategoryGrid;
