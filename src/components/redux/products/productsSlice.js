import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProductsThunk, fetchProductsByPaginationThunk } from "./productsOperations";

const slice = createSlice({
    name: "products",
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
        selectIsLoading: state=>state.isLoading,  
        selectPage: state=>state.page,  
        selectFilter: state=>state.filter,  
    },
    reducers: {
        changePage: (state, { payload }) => {
            state.page+=1
        },
        getFilteredData: (state, { payload }) => {
            state.filter = payload
            state.page = 1
            // state.allProducts=[]
            // state.partOfProducts=[]
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAllProductsThunk.fulfilled, (state, { payload }) => {
            state.allProducts = payload
            })
            .addCase(fetchProductsByPaginationThunk.fulfilled, (state, { payload }) => {
            state.page===1 ? state.partOfProducts = payload : state.partOfProducts.push(...payload)
        })
    }
})

export const productsReducer = slice.reducer
export const { selectAllProducts, selectPartOfProducts, selectPage, selectFilter } = slice.selectors
export const { changePage, getFilteredData } = slice.actions