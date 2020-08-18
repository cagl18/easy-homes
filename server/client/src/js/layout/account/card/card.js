import React from 'react';

const accountCard = ({ children, title }) => {
  return (
    <section className="account__card">
      <h4 className="heading-quaternary">
        {title}
        <div className="heading-divider"></div>
      </h4>
      <div className="account__card--body">{children}</div>
    </section>
  );
};

export default accountCard;
