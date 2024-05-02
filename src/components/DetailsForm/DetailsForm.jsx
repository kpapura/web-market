import React from 'react';
import { StyledButton, StyledDesc, StyledImgBox, StyledInfoBox, StyledPrice, StyledTitle } from './DetailsForm.styled';

export const DetailsForm = ( {product} ) => {
const { id, name, price, image, desc } = product
  
    return (
        <StyledInfoBox key={id}>
          <StyledTitle>{name}</StyledTitle>
      <StyledImgBox>
        <img src={image} alt={image}/>
     </StyledImgBox>
            <StyledDesc>{desc}</StyledDesc>
            <StyledPrice>
            <p>{price} UAN</p>
            </StyledPrice>
          <StyledButton>Add to cart</StyledButton>
    </StyledInfoBox>
  );
};
