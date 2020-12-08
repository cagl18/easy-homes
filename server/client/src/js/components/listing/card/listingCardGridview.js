import React from 'react';
import Button from '../../UI/button';
import { Link } from 'react-router-dom';

const card = (props) => {
  const cardImageStyling = {
    backgroundImage: `url(${props.data.listing.img})`,
  };

  return (
    <Link
      className="card"
      to={`listings/${props.data.listing.slug}/${props.data.listing.id}`}
    >
      <div key={props.data.listing.id} className="card-body">
        <div className="card-img" style={cardImageStyling} alt="">
          <div className="container">
            {props.data.listing.comingsoon ? (
              <div className="banner banner-message">
                {props.data.listing.comingsoon}
              </div>
            ) : (
              ''
            )}
            {props.data.listing.openhouse ? (
              <div className="banner open-house">
                {props.data.listing.openhouse}
              </div>
            ) : (
              ''
            )}
            {props.show_fav_btn ? (
              <Button
                className={`btn ${
                  props.data.listing.favorite ? 'fav active' : 'fav'
                }`}
                onClick={props.onSavedListing}
              >
                <i className="fas fa-star"></i>
              </Button>
            ) : (
              ''
            )}

            <div className="card-caption">
              <div className="flex-col">
                <div className="flex ">
                  <div className="card-listing-left-wrapper">
                    <div>
                      {Number(props.data.listing.price).toLocaleString()}
                    </div>
                    <div className="listing-address">
                      {props.data.listing.address}
                    </div>
                    <div>{props.data.listing.neighborhood}</div>
                  </div>
                  <div className="card-listing-right-wrapper">
                    <div>
                      {props.data.listing.beds} <div>Beds</div>
                    </div>
                    <div>
                      {props.data.listing.baths} <div>Baths</div>
                    </div>
                    <div>
                      {Number(props.data.listing.sqft) === 0
                        ? '-'
                        : Number(props.data.listing.sqft).toLocaleString()}
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
