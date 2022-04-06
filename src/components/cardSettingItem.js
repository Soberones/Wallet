import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {colors, textStyles} from '../assets/theme';
import {Text} from './core/text';

export default function CardSettingItem({name, balance, color, onPress}) {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={textStyles.heading(2)}>{name}</Text>
      <Text style={textStyles.heading(1.5)}>balance: {balance}</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={textStyles.heading(0.7)}>DEL</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 10,
  },
  button: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    flexDirection: 'row',
    backgroundColor: colors.accentColorS2,
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
