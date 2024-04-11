import React from 'react';
import { outlet } from 'react-router-dom';
import Header from '../outlines/Header';
import Footer from '../outlines/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <outlet />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);
