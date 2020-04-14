import React from 'react';
import { Link } from 'react-router-dom';

const card = props => {
  const cardImageStyling = {
    backgroundImage: `url(${props.data.img})`
  };

  return (
    <Link className='card' to={`listing/${props.data.id}`}>
      <div key={props.data.id} className='card-body'>
        <div className='card-img' style={cardImageStyling} alt=''>
          <div className='container'>
            {props.data.comingsoon ? (
              <div className='banner banner-message'>
                {props.data.comingsoon}
              </div>
            ) : (
              ''
            )}
            {props.data.openhouse ? (
              <div className='banner open-house'>{props.data.openhouse}</div>
            ) : (
              ''
            )}

            <div className='card-caption'>
              <div className='flex-col'>
                <div className='flex '>
                  <div className='card-listing-left-wrapper'>
                    <div>{Number(props.data.price).toLocaleString()}</div>
                    <div className='listing-address'>{props.data.address}</div>
                    <div>{props.data.neighborhood}</div>
                  </div>
                  <div className='card-listing-right-wrapper'>
                    <div>
                      {props.data.beds} <div>Beds</div>
                    </div>
                    <div>
                      {props.data.baths} <div>Baths</div>
                    </div>
                    <div>
                      {Number(props.data.sqft) === 0
                        ? '-'
                        : Number(props.data.sqft).toLocaleString()}
                      <div>Sq. Ft.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default card;
