import React from 'react';

const button = (
  { children, className, style, onClick, loading, disabled },
  ref
) => {
  const isLoading = loading ? (
    <i className="fas fa-circle-notch fa-spin"></i>
  ) : (
    ''
  );

  return (
    <button
      disabled={disabled}
      className={`btn ${className?.length > 0 ? className : 'default'}`}
      onClick={onClick}
      style={style}
      ref={ref}
    >
      <span className="btn__text">
        {children}
        {` `} {isLoading}
      </span>
    </button>
  );
};

export default React.forwardRef(button);
