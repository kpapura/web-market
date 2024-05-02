import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

import { MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <MainContainer>
      <Header/>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;
