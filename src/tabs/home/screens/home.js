import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';

import {CommonActions} from '@react-navigation/native';

import {colors, textStyles} from '../../../assets/theme';
import Card from '../../../components/card';
import CardPlusButton from '../../../components/cardPlusButton';
import {StyleText, Text} from '../../../components/core/text';
import Transactions from '../../../components/transactions';

class HomeScreen extends Component {
  state = {activeId: null};

  renderItem = ({item}) => {
    return (
      <Card
        balance={item.balance}
        countName={item.name}
        color={item.color}
        onPress={() =>
          this.props.navigation.navigate('Modal', {billId: item.id})
        }
      />
    );
  };

  onViewableItemsChanged = ({viewableItems}) => {
    this.setState({activeId: viewableItems[0]?.item?.id});
  };

  viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  transactionRenderItem = ({item}) => {
    return (
      <Transactions
        value={item.value}
        name={item.comment}
        expense={item.expense}
        date={item.date}
      />
    );
  };

  onPlusCardPress = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Settings',
      }),
    );
  };

  render() {
    const transactionData =
      this.props?.transactionsState[this.state.activeId]?.transactions;

    return (
      <SafeAreaView>
        <View>
          <FlatList
            data={this.props.billsState}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            showsHorizontalScrollIndicator={false}
            horizontal
            snapToAlignment="start"
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').width * 0.8}
            onViewableItemsChanged={this.onViewableItemsChanged}
            viewabilityConfig={this.viewabilityConfig}
            ListFooterComponent={() => (
              <CardPlusButton onPress={this.onPlusCardPress} />
            )}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={textStyles.heading(2)}>
                  HEELO, JUST CREATE A BILL
                </Text>
              </View>
            }
          />

          <FlatList
            data={transactionData}
            renderItem={this.transactionRenderItem}
            ListHeaderComponent={() => (
              <StyleText style={styles.headerTitle}>
                <Text style={textStyles.heading(1.5)}>Transactions</Text>
              </StyleText>
            )}
            ListEmptyComponent={
              <StyleText
                style={{color: colors.textLight, marginHorizontal: 10}}>
                <Text style={textStyles.heading(2)}>
                  Doesn't have any transactions yet
                </Text>
              </StyleText>
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    color: colors.dark,
    marginTop: 20,
    marginHorizontal: 10,
  },
  itemSeparator: {
    width: 10,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: colors.accentColorS,
    borderRadius: 20,
  },
});

const mapState = state => ({
  billsState: state.bills,
  transactionsState: state.transactions,
});

export default connect(mapState)(HomeScreen);
