import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import {FiSearch} from "react-icons/fi"

import './ContentBar.scss';

function ContentBar() {
  return (
    <div>
      <div className='history'>
        <div className='history__top'>
         <input className='search__input' type='text' placeholder='users'/>
         <FiSearch color='black' size='20px' className='search__icon'/>
        </div>

        <div className='d-flex align-items-center gap-2'>
        
          <button className='btn btn-primary rounded-circle py-3'>
            <FaRegUser size='25px' />
          </button>

          <span className='fs-4'>John Done</span>
        </div>
      </div>
    </div>
  );
}

export default ContentBar;
