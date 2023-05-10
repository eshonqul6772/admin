import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { AiOutlineScan } from 'react-icons/ai';
import { BiCopyAlt } from 'react-icons/bi';

import './CardSend.scss';

function CardSend() {
  const div = (
    <>
      <div className='card'>
        <div className='card__item'>
          <span className='card__icon'>
            <FaBitcoin color='#FF7E25' size='24px' />
            Bitcoin
          </span>

          <div className='card__value'>
            <strong>9.125 mBTC </strong>
            <span>$125,650 USD</span>
          </div>
        </div>

        <h3 className='card__title'>Wallet adress</h3>

        <div className='card__token-box'>
          <p className='card__token'>bc1qc98e6g35jg9zvp33y7k08w9x</p>

          <div>
            <BiCopyAlt size='24px' />
            <AiOutlineScan size='24px' />
          </div>
        </div>
      </div>
    </>
  );
  return div;
}

export default CardSend;
