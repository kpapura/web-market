import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Layout.styled';
import { Header } from 'components/Header/Header';

const Layout = () => {
  return (
    <MainContainer>
      <Header/>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;
