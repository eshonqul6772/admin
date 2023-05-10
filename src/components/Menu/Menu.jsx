import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaUserAlt} from "react-icons/fa"
import { BsArrowRight } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import {AiFillHome} from "react-icons/ai"

import './Menu.scss';

function Menu({setIsAuth}) {
  return (
    <header className='menu'>
      <ul className='menu__list'>
        <li className='menu__list-item'>
          <NavLink className='menu__link' to='/'>
            <AiFillHome size='25' /> Home
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/users'
          >
            <FaUserAlt size='25' /> Users
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/receive'
          >
            <BsArrowRight size='25' /> Receive
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/welles'
          >
            <RiLogoutBoxRLine size='25' /> Wallets
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/settings'
          >
            <FiSettings size='25' /> Settings
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink onClick={() => setIsAuth(false)}
              className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
              to='/login'
          >
            <FiSettings size='25' /> Logo Out
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Menu;
