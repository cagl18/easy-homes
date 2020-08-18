import React from 'react';

const input = ({
  className,
  type,
  name,
  placeholder,
  onChange,
  value,
  errorMessage,
}) => {
  return (
    <>
      <input
        className={errorMessage ? 'error' : className}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {errorMessage ? <small className="error">{errorMessage}</small> : ''}
    </>
  );
};

export default input;
