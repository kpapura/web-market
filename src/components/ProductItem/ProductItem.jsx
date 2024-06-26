import React, { useEffect, useState } from 'react';

import { useModal } from 'hooks/useModal';

import Modal from 'components/Modal/Modal';
import { DetailsForm } from 'components/DetailsForm/DetailsForm';

import { IoMdInformationCircleOutline } from 'react-icons/io';

import { StyledItem, StyledName, StyledPrice } from './ProductItem.styled';


export const ProductItem = ({ product }) => {
  const { name, price, image } = product;
  const { isOpen, toggle } = useModal();
  const [scrollPosition, setScrollPosition] = useState(null);

  const learnMore = () => {
    toggle();
  };

  useEffect(() => {
    if (isOpen && scrollPosition === null) {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
      document.body.classList.add('modal-open');
    } else if (!isOpen && scrollPosition !== null) {
      document.body.classList.remove('modal-open');
      window.scrollTo(0, scrollPosition);
      setScrollPosition(null);
    }
  }, [isOpen, scrollPosition, toggle]);

  return (
    <StyledItem>
      <button onClick={learnMore}>
        <IoMdInformationCircleOutline />
        <img src={image} alt={image} />
        <StyledName>{name}</StyledName>
        <StyledPrice>{price} UAN</StyledPrice>
      </button>
      {isOpen && (
        <Modal closeModal={toggle}>
          <DetailsForm toggle={toggle} product={product} />
        </Modal>
      )}
    </StyledItem>
  );
};
