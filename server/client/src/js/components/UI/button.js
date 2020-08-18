import React from 'react';

const button = ({ children, className, style, onClick, loading }) => {
  const isLoading = loading ? (
    <i className="fas fa-circle-notch fa-spin"></i>
  ) : (
    ''
  );

  return (
    <button
      className={`btn ${className?.length > 0 ? className : 'default'}`}
      onClick={onClick}
      style={style}
    >
      <span className="btn__text">
        {children}
        {` `} {isLoading}
      </span>
    </button>
  );
};

export default button;