import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {colors} from '../../../assets/theme';
import CardSettingItem from '../../../components/cardSettingItem';
import CardSettingItemButton from '../../../components/cardSettingItemButton';

export default function SettingsHome({navigation}) {
  const dispatch = useDispatch();
  const billsState = useSelector(state => state?.bills);

  const onAddPress = () => {
    navigation.navigate('SettingsModal');
  };

  const onDeleteItem = id => {
    dispatch.bills.deleteBills({id});
    console.log('object');
  };

  const renderItem = ({item}) => (
    <CardSettingItem
      name={item.name}
      balance={item.balance}
      color={item.color}
      onPress={() => onDeleteItem(item.id)}
    />
  );

  const footerComponent = () => {
    return <CardSettingItemButton onPress={onAddPress} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={billsState}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        ListFooterComponent={footerComponent}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
