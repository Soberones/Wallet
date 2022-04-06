import AsyncStorage from '@react-native-async-storage/async-storage';
import {init} from '@rematch/core';
import persistPlugin from '@rematch/persist';

import * as models from './models';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const store = init({
  models,
  plugins: [persistPlugin(persistConfig)],
});
