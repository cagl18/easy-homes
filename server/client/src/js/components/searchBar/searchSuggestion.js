import React from 'react';
import { Link } from 'react-router-dom';

const searchSuggestion = ({ data }) => {
  const collectionName = data.collection.toLowerCase();

  const link = data.slug
    ? `/${data.collection}/${data.slug}/${data._id}`
    : `/${data.collection}/${data._id}`;

  return (
    <li>
      <Link className="search_suggestions__link" to={link}>
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
