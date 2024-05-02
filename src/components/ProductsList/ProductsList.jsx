import {
  fetchAllProductsThunk,
  fetchProductsByPaginationThunk,
} from 'components/redux/products/productsOperations';
import {
  changePage,
  selectAllProducts,
  selectPage,
  selectPartOfProducts, selectFilter,
} from 'components/redux/products/productsSlice';
import { filteredProducts } from 'helpers/filteredProducts';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchButton, StyledList } from './ProductsList.styled';
import { ProductItem } from 'components/ProductItem/ProductItem';

export const ProductsList = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const products = useSelector(selectPartOfProducts);
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchProductsByPaginationThunk(page));

  }, [page, dispatch]);
  useEffect(() => {
    if (!allProducts.length) {
      dispatch(fetchAllProductsThunk());
    }
  }, [allProducts.length, dispatch]);

    const filteredList = useMemo(() => {
        return filteredProducts(filter, products, allProducts)
    }, [filter, products, allProducts])
  
    return (
    <div>
      <StyledList>
          {filteredList?.map(item => {
            return <ProductItem key={item.id} product={item}/>
          })}
      </StyledList>
      {filteredList?.length !== 0 && allProducts.length !== filteredList.length && filteredList.length >= 10 && (
        <SearchButton onClick={() => dispatch(changePage())}>Load More</SearchButton>
      )}
    </div>
  );
};
