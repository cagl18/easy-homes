import React, {Component} from 'react';
import ListingCard from '../../components/listing/card/listingCardGridview';

class FavoriteListing extends Component {
    state = {data: []};
    componentDidMount() {
        //get data from API endPoint

    }
    render(){
        return <div>{this.state.data.map(el => <ListingCard data={el}/>)}</div>
    }
}



export FavoriteListing

