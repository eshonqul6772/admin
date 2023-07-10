import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import {HiLocationMarker} from "react-icons/hi"

import './Menu.scss';
import Logo from '../../assets/svg/logo.svg';

function Menu() {
  return (
    <header className='menu'>
      <ul className='menu__list'>
        <li className='menu__list-item'>
          <Link className='menu__logo border-bottom border-dark' to='/'>
            <img src={Logo} alt={Logo} />
          </Link>
        </li>

        <li className='menu__list-item'>
          <NavLink className='menu__link' to='/'>
            <AiFillHome size='25' /> Buyurtma
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/costumer'
          >
            <FaUserAlt size='25' /> Mijoz
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/toifa'
          >
            <BiCategory size='25' /> Toifa
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/mahsulot'
          >
            <SlBasket size='25' /> Mahsulotlar
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/texnolologiya'
          >
            <FiSettings size='25' /> Texnologiyalar
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/manzil'
          >
            <HiLocationMarker size='25' /> Manzil
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Menu;
