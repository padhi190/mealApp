import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'
import { RootStackParamList } from '../App'

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

function MealDetail({route}: Props) {
  const { meal } = route.params
  return (
      <Text>{JSON.stringify(meal, null, 2)}</Text>
  )
}

export default MealDetail