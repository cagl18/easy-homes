import React from 'react';
import ItemsGridList from '../UI/ItemsGridList';
import Listing from './listing';

const listings = (props) => {
  return (
    <div className="container">
      <ItemsGridList
        data={props.data}
        itemsShownPerPage={props.itemsShownPerPage}
        listName="listings"
      >
        <Listing requestUserAuth={props.requestUserAuth} show_fav_btn />
      </ItemsGridList>
    </div>
  );
};

export default listings;
