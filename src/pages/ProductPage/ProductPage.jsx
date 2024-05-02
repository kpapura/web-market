import React from 'react'

import { Form } from '../../components/Form/Form'
import { ProductsList } from '../../components/ProductsList/ProductsList'

import { ProductSection } from './ProductPage.styled'

const ProductPage = () => {

  return (
      <ProductSection>
      <Form />
      <ProductsList/>
    </ProductSection>
  )
}

export default ProductPage