import React from 'react';

export default (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '40px',
        color: 'red',
        maxHeight: '300px',
        padding: '100px',
      }}
    >
      <i
        className="fas fa-fan fa-spin"
        style={{ animation: 'fa-spin 1s infinite linear' }}
      ></i>
    </div>
  );
};
