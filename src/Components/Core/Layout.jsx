import React from 'react';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default Layout;
