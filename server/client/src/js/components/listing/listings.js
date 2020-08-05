import React, { Component } from 'react';
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
        <Listing />
      </ItemsGridList>
    </div>
  );
};

export default listings;
