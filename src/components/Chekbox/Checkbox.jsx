import React from 'react';

import './Checkbox.scss';

const Checkbox = () => (
  <label className='toggler-wrapper style-1'>
    <input type='checkbox' />
    <div className='toggler-slider'>
      <div className='toggler-knob'></div>
    </div>
  </label>
);

export default Checkbox;
