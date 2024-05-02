import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { fetchAllProductsThunk, fetchProductsByPaginationThunk } from './productsOperations';

const slice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    partOfProducts: [],
    filter: null,
    page: 1,
    isLoading: false,
    error: null,
  },
  selectors: {
    selectAllProducts: state => state.allProducts,
    selectPartOfProducts: state => state.partOfProducts,
    selectIsLoading: state => state.isLoading,
    selectPage: state => state.page,
    selectFilter: state => state.filter,
  },
  reducers: {
    changePage: (state, { payload }) => {
      state.page = state.page + 1;
    },
    getFilteredData: (state, { payload }) => {
      state.filter = payload;
      state.page = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllProductsThunk.fulfilled, (state, { payload }) => {
        state.allProducts = payload;
        state.error = null;
      })
      .addCase(fetchAllProductsThunk.rejected, (state, { payload }) => {
        toast.error(payload);
        state.error = payload;
      })
      .addCase(
        fetchProductsByPaginationThunk.fulfilled, (state, { payload }) => {
        state.partOfProducts = state.page === 1 ? payload : [...state.partOfProducts, ...payload];
        state.error = null;
        }
      )
      .addCase(fetchProductsByPaginationThunk.pending, (state, { payload }) => {
        state.error = null;
      })
      .addCase(
        fetchProductsByPaginationThunk.rejected, (state, { payload }) => {
          state.error = payload;
          toast.error(payload);
        }
      );
  },
});

export const productsReducer = slice.reducer;
export const { selectAllProducts, selectPartOfProducts, selectPage, selectFilter, selectIsLoading } = slice.selectors;
export const { changePage, getFilteredData } = slice.actions;
