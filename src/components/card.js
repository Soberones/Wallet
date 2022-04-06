import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text as T,
  TouchableOpacity,
  View,
} from 'react-native';

import {colors, textStyles} from '../assets/theme';
import {Text} from './core/text';

export default function Card({balance, countName, color, onPress}) {
  return (
    <View style={[styles.wrapper, color && {backgroundColor: color}]}>
      <Text style={textStyles.heading(2)}>{countName}</Text>

      <View style={styles.balance}>
        <Text style={textStyles.heading(1)}>Balance</Text>
        <Text style={textStyles.heading(2)}>${balance}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={textStyles.heading(0.7)}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.accentColor,
    borderRadius: 20,
    padding: 20,
    width: Dimensions.get('window').width * 0.8,
  },
  balance: {
    marginTop: 10,
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    flexDirection: 'row',
    backgroundColor: colors.accentColorS2,
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
