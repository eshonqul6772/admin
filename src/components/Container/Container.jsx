import React from 'react';

import './Containers.scss';
function Container({ children }) {
  return <div className='container'>{children}</div>;
}

export default Container;
