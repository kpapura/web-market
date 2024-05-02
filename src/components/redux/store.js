import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products/productsSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const productsPersistConfig = {
  key: 'products',
  version: 1,
  storage,
  whitelist: [''],
};
export const store = configureStore({
  reducer: {
    products: persistReducer(productsPersistConfig, productsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
