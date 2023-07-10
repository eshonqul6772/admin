import React from 'react';

import { Routes, Route } from 'react-router-dom';


import Menu from '../../components/Menu';
import Nav from '../../components//Navbar';
import Buyurtma from '../Buyurtma';
import Costumer from '../Costumer';
import Toifa from '../Toifa';
import Mahsulot from '../Mahsulot';
import Texnolologiya from '../Texnologiya';
import Manzil from '../Manzil';
import Private from '../../Private/Private';

export const Home = () => {
  return (
    <>
      <div className='context'>
        <Menu />
        <main>
          <Nav />
          <Routes>
            <Route path='/' element={<Private />}>
              <Route path='/' element={<Buyurtma />} />
              <Route path='/costumer' element={<Costumer />} />
              <Route path='/toifa' element={<Toifa />} />
              <Route path='/mahsulot' element={<Mahsulot />} />
              <Route path='/texnolologiya' element={<Texnolologiya />} />
              <Route path='/manzil' element={<Manzil />} />
            </Route>
          </Routes>
        </main>
      </div>
    </>
  );
};


export default Home;