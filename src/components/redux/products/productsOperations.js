import { createAsyncThunk } from '@reduxjs/toolkit';

import { productsApi } from 'axiosConfig/mockApi';

export const fetchAllProductsThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await productsApi.get('/products');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProductsByPaginationThunk = createAsyncThunk(
  'fetchByPagination',
  async (page, thunkApi) => {
    try {
      const { data } = await productsApi.get('products', { params: { page: page, limit: 10 } });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
