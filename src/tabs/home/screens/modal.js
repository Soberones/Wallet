import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

import {colors, textStyles} from '../../../assets/theme';
import {StyleText, Text} from '../../../components/core/text';

export default function Modal({route, navigation}) {
  const dispatch = useDispatch();
  const [text, onChangeText] = useState(null);
  const [comment, onCommentChange] = useState(null);

  const billId = route.params.billId;

  const onIncomePress = () => {
    dispatch.bills.addBalance({id: billId, value: +text});
    dispatch.transactions.increment({
      id: billId,
      value: +text,
      expense: false,
      date: new Date(),
      comment,
    });
    navigation.goBack();
  };

  const onExpensePress = () => {
    dispatch.bills.expireBalance({id: billId, value: +text});
    dispatch.transactions.increment({
      id: billId,
      value: +text,
      expense: true,
      comment,
    });
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flex}>
      <View style={styles.wrapper}>
        <View style={styles.modal}>
          <StyleText style={{color: colors.text}}>
            <Text style={textStyles.heading(2)}>Balance: 2100</Text>
          </StyleText>

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter amount"
            placeholderTextColor={colors.text}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            onChangeText={onCommentChange}
            value={comment}
            placeholder="Enter desciption"
            placeholderTextColor={colors.text}
          />

          <View style={styles.divider}></View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Pressable
              style={styles.modalButton}
              onPress={() => onIncomePress()}>
              <Text>Income</Text>
            </Pressable>
            <Pressable
              style={[
                styles.modalButton,
                {backgroundColor: colors.accentColorS5},
              ]}
              onPress={() => onExpensePress()}>
              <Text>Expense</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  modal: {
    height: '50%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',

    justifyContent: 'center',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 7,
    shadowOffset: {
      width: 20,
      height: 100,
    },
    shadowOpacity: 0.5,
    shadowRadius: 100,
  },
  input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    color: 'black',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  flex: {flex: 1},
  divider: {
    height: 1,
    backgroundColor: 'rgba(200, 200, 200, 1)',
  },
  modalButton: {
    height: 40,
    width: '48%',
    backgroundColor: colors.accentColorS4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
