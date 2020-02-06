import React from 'react';
import { Link } from 'react-router-dom';

const logo = props => {
  return (
    <div className='logo'>
      {/* <a href='.' className='logo__link'> */}
      <Link className='logo__link' to='/'>
        <i className={props.iconClass}></i> Easy Homes
      </Link>
    </div>
  );
};

export default logo;
