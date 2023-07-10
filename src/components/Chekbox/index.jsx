import React from 'react';

import "./style.scss"

export const index = () => {
  return (
    <>
      <label className='toggler-wrapper style-1'>
        <input type='checkbox' />
        <div className='toggler-slider'>
          <div className='toggler-knob'></div>
        </div>
      </label>
    </>
  );
  
};

export default index;
