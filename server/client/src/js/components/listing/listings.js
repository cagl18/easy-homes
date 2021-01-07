import React from 'react';
import ItemsGridList from '../UI/ItemsGridList';
import Listing from './listing';

const listings = (props) => {
  const onFavoriteHandler = () => {
    if (props?.onFavoriteHandler) {
      console.log('Listings- onSavedListing was called ');
      props.onFavoriteHandler();
    }
  };
  return (
    <div className="container">
      <ItemsGridList
        data={props.data}
        itemsShownPerPage={props.itemsShownPerPage}
        listName="listings"
        loading={props.loading}
      >
        {!props.data ? (
          'You dont have any listings saved as favorite.'
        ) : (
          <Listing
            requestUserAuth={props.requestUserAuth}
            show_fav_btn={props.show_fav_btn}
            onFavoriteHandler={onFavoriteHandler}
          />
        )}
      </ItemsGridList>
    </div>
  );
};

export default listings;
