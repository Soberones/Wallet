import React, {useState} from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';

import {colors} from '../assets/theme';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    color: colors.accentColorS2,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    color: colors.accentColor,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    color: colors.accentColorS3,
  },
  {
    id: '58643450f-3da1-471f-b6-145571e29d72',
    color: colors.accentColorS5,
  },
];

export default function UseColorPicker({onPress}) {
  const [colors, setColors] = useState(DATA);

  const Item = ({color}) => (
    <View style={[styles.item, {backgroundColor: color}]} />
  );

  const renderItem = ({item}) => (
    <Pressable onPress={() => onPress(item.color)}>
      <Item color={item.color} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: colors.light,
  },
  container: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});
