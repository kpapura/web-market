import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllProductsThunk, fetchProductsByPaginationThunk } from 'components/redux/products/productsOperations';
import { changePage, selectAllProducts, selectPage, selectPartOfProducts, selectFilter } from 'components/redux/products/productsSlice';
import { ProductItem } from 'components/ProductItem/ProductItem';

import { filteredProducts } from 'helpers/filteredProducts';

import { SearchButton, StyledList } from './ProductsList.styled';
import { ScrollToTopButton } from 'components/ScrollToTopButton/ScrollToTopButton';
import { LiaCartPlusSolid } from "react-icons/lia";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const products = useSelector(selectPartOfProducts);
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchProductsByPaginationThunk(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(fetchAllProductsThunk());
    }
  }, [allProducts.length, dispatch]);

  const filteredList = useMemo(() => {
    return filteredProducts(filter, products, allProducts);
  }, [filter, products, allProducts]);

  return (
    <div style={{width:"100%"}}>
      <StyledList>
        {!filteredList.length &&
          <>
          <h3>No available products</h3>
          <LiaCartPlusSolid style={{width:"50px", height:"50px"}} />
          </>
        }

        {filteredList?.map(item => {
          return <ProductItem key={item.id} product={item} />;
        })}

      </StyledList>
      {filteredList?.length !== 0 && allProducts.length !== filteredList.length && filteredList.length >= 10 && (
        <SearchButton onClick={() => dispatch(changePage())}>Load More</SearchButton>)}
      <ScrollToTopButton/>
    </div>
  );
};
