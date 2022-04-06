import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {colors, textStyles, theme} from '../../assets/theme';
import {Text} from './text';

export default function Button({onPress, title, children, heading, style}) {
  return (
    <Pressable onPress={onPress} style={[styles.wrapper, {...style}]}>
      <Text style={textStyles.heading(heading ?? 1)}>{title}</Text>
      <View>{children}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
    // width: '100%',
    padding: 20,
    borderRadius: theme.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
