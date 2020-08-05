import React from 'react';

const button = (props) => {
  const loading = props.loading ? 'Loading' : '';
  return (
    <button
      className={`btn ${props.className ? props.className : 'default'}`}
      onClick={props.onClick}
    >
      {`${props.children} ${loading}`}
    </button>
  );
};

export default button;
