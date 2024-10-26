import React from 'react';
import Navegacion from '../components/Header/Navegacion.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Routers from '../Routers/Routers';

const Layout = () => {
  return (
    <>
      <Navegacion />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;