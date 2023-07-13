import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              viewBox='0 0 20 20'
              fill='none'
            >
              <mask
                id='mask0_452_817'

                style={{maskType:"alpha", fontSize:"30px"}}
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='20'
                height='20'
              >
                <rect width='20' height='20' fill='#C4C4C4' />
              </mask>
              <g mask='url(#mask0_452_817)'>
                <path
                  d='M5.75 5.75C5.75 7.8175 7.4325 9.5 9.5 9.5C11.5675 9.5 13.25 7.8175 13.25 5.75C13.25 3.6825 11.5675 2 9.5 2C7.4325 2 5.75 3.6825 5.75 5.75ZM16.1667 17.8333H17V17C17 13.7842 14.3825 11.1667 11.1667 11.1667H7.83333C4.61667 11.1667 2 13.7842 2 17V17.8333H16.1667Z'
                  fill='white'
                />
              </g>
            </svg>

            <span className='fs-4'>John Done</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentBar;
