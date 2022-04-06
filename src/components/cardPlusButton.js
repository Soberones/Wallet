import React from 'react';
import {Dimensions, Pressable, StyleSheet} from 'react-native';

import {colors} from '../assets/theme';
import {Text} from './core/text';

export default function CardPlusButton({onPress}) {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <Text>+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.accentColorS3,
    borderRadius: 20,
    padding: 20,
    width: Dimensions.get('window').width * 0.15,
    marginLeft: 10,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
