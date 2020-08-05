import React from 'react';
import { Link } from 'react-router-dom';

const searchSuggestion = ({ data }) => {
  return (
    <li>
      <Link
        className="search_suggestions__link"
        to={`/${data.collection}/${data._id}`}
      >
        <div
          className="avatar--image"
          style={{ background: `url(${data.photo})` }}
        ></div>
        <div className="infoContainer">
          <p>{data.name || data.address}</p>
          {data.collection.toLowerCase() === 'agents' ? <p>NYC</p> : ''}
        </div>
      </Link>
    </li>
  );
};

export default searchSuggestion;
