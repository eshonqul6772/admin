import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './pages/Login';
import Categories from './pages/Categories';
import Location from './pages/Location';
import Order from './pages/Order';
import Costumer from './pages/Costumer';
import Product from './pages/Product';
import Technologies from './pages/Technologies';

import Menu from './components/Menu';
import Navbar from './components/Navbar';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route exact path='/' element={<Login />} />
      </Routes>
    );
  }

  return (
    <>
      <div className='context'>
        <Menu />

        <main>
          <Navbar />

          <Routes>
            <Route path='/' element={<Order />} />
            <Route path='/costumer' element={<Costumer />} />
            <Route path='/toifa' element={<Categories />} />
            <Route path='/mahsulot' element={<Product />} />
            <Route path='/texnolologiya' element={<Technologies />} />
            <Route path='/manzil' element={<Location />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
