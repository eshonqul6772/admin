import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import {FaRegUserCircle} from 'react-icons/fa'

import './ContentBar.scss';

function ContentBar() {

const navigate = useNavigate("")

  const hendelBtn = ()=>{
  
      localStorage.removeItem('token');
      navigate("/")
  }

  return (
    <div>
      <div className='history'>
        <div className='history__top'>
          <input className='search__input' type='text' placeholder='users' />
          <FiSearch color='black' size='20px' className='search__icon' />
        </div>

        <div className='d-flex align-items-center gap-2'>
          <button onClick={hendelBtn} className='btn__user'>
          <FaRegUserCircle/>  <span className='fs-4'>John Done</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentBar;
