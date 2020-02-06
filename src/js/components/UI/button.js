import React from 'react';

const button = props => {
  return (
    <button
      className={`btn ${props.className ? props.className : 'default'}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default button;
