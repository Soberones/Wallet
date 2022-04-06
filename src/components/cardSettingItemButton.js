import React from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {colors, textStyles} from '../assets/theme';
import {Text} from './core/text';

export default function CardSettingItemButton({onPress}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={textStyles.heading(2)}>ADD NEW CARD</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 100,
    backgroundColor: colors.accentColorS3,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
