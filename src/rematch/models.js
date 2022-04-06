export const bills = {
  state: [
    //TEMPLATE
    // {id: 1, name: 'Standard bill name', balance: 0, currency: 'usd.'},
    // {id: 2, name: 'Standard bill 2', balance: 0, currency: 'usd.'},
  ],

  reducers: {
    addBalance(state, payload) {
      const {id, value} = payload;
      return [
        ...state.map(account => {
          if (account.id === id) {
            return {...account, balance: account.balance + value};
          }
          return account;
        }),
      ];
    },
    expireBalance(state, payload) {
      const {id, value} = payload;

      return [
        ...state.map(account => {
          if (account.id === id) {
            return {...account, balance: account.balance - value};
          }
          return account;
        }),
      ];
    },
    deleteBills(state, payload) {
      const {id} = payload;
      return state.filter(account => account.id !== id);
    },
    addNewBills(state, payload) {
      const {name, id, color} = payload;

      return [
        ...state,
        {
          id,
          name,
          balance: 0,
          currency: 'usd.',
          color,
        },
      ];
    },
  },
};

export const transactions = {
  state: [
    //TEMPLATE
    // {
    //   billsId: 1,
    //   transactions: [
    //     {
    //       id: 'transaktionsId',
    //       expense: true,
    //       comment: 'comment',
    //       value: 100,
    //     },
    //   ],
    // },
  ],
  reducers: {
    increment(state, payload) {
      const {id, value, comment, expense, date} = payload;

      const transactions = {value, comment, expense, date};
      console.log('transactions', transactions);
      return {
        ...state,
        [id]: {
          ...state[id],
          transactions: [...state[id].transactions, transactions],
        },
      };
    },

    addNewBillsTransaction(state, payload) {
      const {id} = payload;

      return {
        ...state,
        [id]: {...state[id], transactions: []},
      };
    },
  },
};
