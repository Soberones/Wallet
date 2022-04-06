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
import {v4 as uuidv4} from 'uuid';

import {colors, textStyles} from '../../../assets/theme';
import ColorPicker from '../../../components/colorPicker';
import {StyleText, Text} from '../../../components/core/text';

export default function SettingsModal({navigation}) {
  const id = uuidv4();
  const dispatch = useDispatch();

  const [cardName, setCardName] = useState('');
  const [colorData, setColorData] = useState('#fff');

  const onAddPress = () => {
    dispatch.bills.addNewBills({
      name: cardName || 'new one',
      id,
      color: colorData,
    });
    dispatch.transactions.addNewBillsTransaction({id: id});
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flex}>
      <View style={styles.wrapper}>
        <View style={[styles.modal, {backgroundColor: colorData}]}>
          <StyleText style={{color: colors.text}}>
            <Text style={textStyles.heading(2)}>Create new card</Text>
          </StyleText>

          <TextInput
            style={styles.input}
            onChangeText={setCardName}
            value={cardName}
            placeholder="Enter card name"
            placeholderTextColor={colors.text}
          />
          <ColorPicker onPress={e => setColorData(e)} />
          <View>
            <Pressable style={styles.modalButton} onPress={() => onAddPress()}>
              <Text>Create</Text>
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

  modalButton: {
    height: 40,
    width: '100%',
    backgroundColor: colors.accentColorS4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
