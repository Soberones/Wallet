import moment from 'moment';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors, textStyles} from '../assets/theme';
import {StyleText, Text} from './core/text';

export default function Transactions({name, date, value, expense}) {
  const formatDate = moment(date).format('DD.MM.YYYY, HH:mm');
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View
          style={[
            styles.colorsSquare,
            expense && {backgroundColor: colors.accentColorS5},
          ]}
        />
        <View>
          {name ? (
            <StyleText style={{color: colors.dark}}>
              <Text style={textStyles.heading(1.5)}>{name}</Text>
            </StyleText>
          ) : (
            <StyleText style={{color: colors.textLight}}>
              <Text style={textStyles.heading(1.5)}>Without name</Text>
            </StyleText>
          )}
          <StyleText style={{color: colors.textLight}}>
            <Text style={textStyles.heading(1)}>{formatDate}</Text>
          </StyleText>
        </View>
      </View>
      <View>
        <StyleText style={styles.valueText}>
          <Text style={textStyles.heading(1.5)}>
            {expense ? `-${value}$` : `${value}$`}
          </Text>
        </StyleText>
        <StyleText style={styles.incomeText}>
          <Text style={textStyles.heading(1)}>
            {expense ? 'expense' : 'income'}
          </Text>
        </StyleText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorsSquare: {
    height: 50,
    width: 50,
    backgroundColor: colors.accentColorS3,
    marginRight: 10,
    borderRadius: 15,
  },
  incomeText: {
    color: colors.textLight,
    alignSelf: 'flex-end',
  },
  valueText: {
    color: colors.dark,
    alignSelf: 'flex-end',
  },
});
