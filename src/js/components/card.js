import React from 'react';

const card = props => {
  const cardImageStyling = {
    backgroundImage: `url(${props.data.img})`
  };

  return (
    <a href='/1' className='card'>
      <div key={props.data.id} className='card-body'>
        <div className='card-img' style={cardImageStyling} alt=''>
          <div className='container'>
            {props.data.openhouse ? (
              <div className='banner open-house'>{props.data.openhouse}</div>
            ) : (
              ''
            )}
            {props.data.comingsoon ? (
              <div className='banner banner-message'>
                {props.data.comingsoon}
              </div>
            ) : (
              ''
            )}

            <div className='card-caption'>
              <div className='flex-col'>
                <div className='flex '>
                  <div className='card-listing-left-wrapper'>
                    <div>{Number(props.data.price).toLocaleString()}</div>
                    <div>{props.data.address}</div>
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
                      {Number(props.data.sq).toLocaleString()}{' '}
                      <div>Sq. Ft.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default card;
