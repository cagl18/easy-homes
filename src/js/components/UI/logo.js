import React from 'react';
import { Link } from 'react-router-dom';

const logo = props => {
  return (
    <div className='logo'>
      <Link className='logo__link' to='/'>
        <i className={props.iconClass}></i> {props.brand}
      </Link>
    </div>
  );
};

export default logo;
