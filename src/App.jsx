import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './pages/Login';
import Toifa from './pages/Toifa';
import Manzil from './pages/Manzil';
import Buyurtma from './pages/Buyurtma';
import Costumer from './pages/Costumer';
import Mahsulot from './pages/Mahsulot';
import Texnolologiya from './pages/Texnologiya';

import Menu from './components/Menu';
import Navbar from './components/Navbar';





function App() {
  const { isLoggedIn } = useSelector(state => state.auth);

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
            <Route path='/' element={<Buyurtma />} />
            <Route path='/costumer' element={<Costumer />} />
            <Route path='/toifa' element={<Toifa />} />
            <Route path='/mahsulot' element={<Mahsulot />} />
            <Route path='/texnolologiya' element={<Texnolologiya />} />
            <Route path='/manzil' element={<Manzil />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
