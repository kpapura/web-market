import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { IoCloseSharp } from "react-icons/io5";
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled';

const modalRoot = document.querySelector('#modal');

const Modal = ({ closeModal, children }) => {

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <ModalWrapper onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={closeModal}>
        <IoCloseSharp width="16" height="16"/> 
        </CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>,
    modalRoot
  );
};

export default Modal;
