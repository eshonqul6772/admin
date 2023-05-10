import React from 'react';


import Logo from "../../assets/svg/logoipsum-245.svg"
import './ContentBar.scss';

function ContentBar() {
  return (
    <div>
      <div className='history'>
        <div className='history__top'>
          <img src={Logo} alt=""/> <span>Send</span>
        </div>
        <button className='btn btn-primary rounded-circle py-3'>A</button>

      </div>
    </div>
  );
}

export default ContentBar;
