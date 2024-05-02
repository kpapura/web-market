import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

import { Image, LogoBox, StyledHeader } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <LogoBox>
        <Link to="/">
          <Image src={logo} alt="logo" />
        </Link>
      </LogoBox>
    </StyledHeader>
  );
};
