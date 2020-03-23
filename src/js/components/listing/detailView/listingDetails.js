import React, { Component } from 'react';
import listingData from '../../data/dummy_data';
import { Link } from 'react-router-dom';

import Map from '../../../components/map';
import SearchBar from '../../searchBar';
import Nav from '../../UI/navbar';
import Button from '../../UI/button';
import Footer from '../../footer';
import AgentCard from '../../agent/agentCard';
import AgentContact from '../../agent/agentContact';
import Agents from '../../agent/agents';
import { redirectToURL, getURLParams } from '../../../../shared/utility';

class listingDetail extends Component {
  state = { listing: '' };

  componentDidMount() {
    const listingID = this.props.match.params.id;
    const listing = this.getListingByID(listingID);

    this.setState({ listing });
  }

  getListingByID = id => {
    const listing = listingData.find(l => l.id.toString() === id);
    return listing;
  };

  redirectToSearchPage = () => {
    const searchTerm = getURLParams('q', this.props.location);
    if (searchTerm) {
      redirectToURL('/search', this.props.history);
    }
  };

  render() {
    let description = null;
    if (this.state.listing.description) {
      description = this.state.listing.description.map((el, index) => (
        <p key={index}>{el}</p>
      ));
    }
    let amenities = null;
    if (this.state.listing.description) {
      amenities = this.state.listing.amenities.map((el, index) => (
        <span key={index} className='cell_item'>
          {el}
        </span>
      ));
    }
    let agents = this.state.listing.agents || [];
    let keyDetails = this.state.listing.keyDetails || {};
    let listing = this.state.listing || {};

    return (
      <div ref={this.myRef}>
        <Nav className='sticky'>
          <SearchBar onSearch={() => this.redirectToSearchPage()} />
        </Nav>

        <main className='container listingDetails'>
          <div className='listingDetails__header'>
            <div className='header__ToLeftContent'>
              <h2>{this.state.listing.address}</h2>

              <div className='header__subTitle'>
                <p>{this.state.listing.neighborhood},</p>
                <p>{this.state.listing.city},</p>
                <p>{this.state.listing.state}</p>
                <p>{this.state.listing.zipcode}</p>
              </div>
            </div>
            <div className='header__ToRightContent'>
              <div className='header--price_space'>
                <div className='header__col'>
                  <p className='header__title'>
                    ${Number(this.state.listing.price).toLocaleString()}
                  </p>
                  <div className='header__subTitle'>
                    <p>Price</p>
                  </div>
                </div>
              </div>
              <div className='header--basic_summary_specs'>
                <div className='header__col'>
                  <p className='header__title'>{this.state.listing.beds}</p>
                  <div className='header__subTitle'>
                    <p>Beds</p>
                  </div>
                </div>
                <div className='header__col'>
                  <p className='header__title'>{this.state.listing.baths}</p>
                  <div className='header__subTitle'>Baths</div>
                </div>

                <div className='sq_summary'>
                  <div className='header__col'>
                    <div className='header__title'>
                      {Number(this.state.listing.sqft).toLocaleString()}{' '}
                      <div className='header__subTitle'>Sq. Ft.</div>
                    </div>

                    <div className='header__title'>
                      {`$${Math.round(
                        this.state.listing.price / this.state.listing.sqft
                      ).toLocaleString()}`}
                      <div className='header__subTitle'>{`/ Sq.Ft.`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='header__ToBottomContent'>
              <Button className='btn primary'>
                <i className='far fa-star'></i>
                <span className='btn__label'>{' Save'}</span>
              </Button>
              <Button>
                <i className='far fa-share-square'></i>
                <span className='btn__label'>{' Share'}</span>
              </Button>
            </div>
          </div>
          <div className='listingDetails__nav'>
            <a href='#location'>Location</a>
            <a href='#history'>Property History</a>
            <a href='#schools'>Schools</a>
            <a href='#neighborhood'>Neighborhood</a>
            <a href='#morehomes'>Similar Homes</a>
          </div>
          <div className='listingDetails__slider'>
            <div
              className='card-img slider__container'
              style={{
                backgroundImage: `url(${this.state.listing.img})`,
                height: '50rem'
              }}
            >
              <div className='container'>
                {this.state.listing.comingsoon ? (
                  <div className='banner banner-message'>
                    {this.state.listing.comingsoon}
                  </div>
                ) : (
                  ''
                )}
                {this.state.listing.openhouse ? (
                  <div className='banner open-house'>
                    {this.state.listing.openhouse}
                  </div>
                ) : (
                  ''
                )}
                {keyDetails.status !== 'Active' ? (
                  <div className='banner status'>{keyDetails.status}</div>
                ) : (
                  ''
                )}
              </div>

              {/* <img
                className='listingDetails__slider--wrapper'
                src={this.state.listing.img}
              ></img> */}
            </div>
          </div>

          <div className='listingDetails__sidebar'>
            <div className='keyDetails'>
              <h2 className='keyDetails__header'>
                Property Details for 1 West End Avenue, Unit 31C
              </h2>

              <table className='keyDetails__table'>
                <tbody>
                  <tr>
                    <td>Status</td>
                    <td className='value'>{keyDetails.status}</td>
                  </tr>
                  <tr>
                    <td>MLS ID</td>
                    <td className='value'>{this.state.listing.id}</td>
                  </tr>
                  <tr>
                    <td>Total Rooms</td>
                    <td className='value'>{keyDetails.rooms}</td>
                  </tr>
                  <tr>
                    <td>Year Built</td>
                    <td className='value'>{keyDetails.year_built}</td>
                  </tr>
                  <tr>
                    <td>DOM</td>
                    <td className='value'>{keyDetails.dom || '-'}</td>
                  </tr>
                  <tr>
                    <td>EasyHomes Type</td>
                    <td className='value'>
                      {keyDetails.property_type || '--'}
                    </td>
                  </tr>
                  <tr>
                    <td>MLS Type</td>
                    <td className='value'>{keyDetails.msl_type || '--'}</td>
                  </tr>

                  {keyDetails.status === 'for-sale' ? (
                    <tr>
                      <td>Common Charges</td>
                      <td className='value'>{keyDetails.common || '--'}</td>
                    </tr>
                  ) : (
                    <tr></tr>
                  )}

                  {keyDetails.status === 'for-sale' ? (
                    <tr>
                      <td>Minumun Down Payment</td>
                      <td className='value'>{keyDetails.min_down_p || '--'}</td>
                    </tr>
                  ) : (
                    <tr></tr>
                  )}
                  {keyDetails.status === 'for-sale' ? (
                    <tr>
                      <td>Taxes</td>
                      <td className='value'>{keyDetails.taxes || '--'}</td>
                    </tr>
                  ) : (
                    <tr>
                      <td>Available Date</td>
                      <td className='value'>{keyDetails.start_date || '--'}</td>
                    </tr>
                  )}
                  <tr>
                    <td>County</td>
                    <td className='value'>{keyDetails.county || '--'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='agent'>
              <AgentCard title='Listing Agent' agent={agents[0]} />
              <AgentContact addresss={keyDetails.address} />
            </div>
          </div>
          <div className='listingDetails__description'>
            <h2 className='description__header u-margin-top-small'>
              Description
            </h2>
            {description}
          </div>
          <div className='listingDetails__amenities u-margin-top-big'>
            <h2>Amenities</h2>
            <div className='listingDetails__amenities--container'>
              {amenities}
            </div>
          </div>
          <div
            id='location'
            className='listingDetails__location u-margin-top-big'
          >
            <h2>Location</h2>
            <ul className='location__list u-padding-bottom-small'>
              <li>
                <Link to={`/search?type=${listing.type}`}>New York City</Link>
              </li>
              <li>
                <Link to={`/search?q=${listing.city}`}>{listing.city}</Link>
              </li>
              <li>
                <Link to={`/search?q=${listing.zipcode}`}>
                  {listing.zipcode}
                </Link>
              </li>
              <li>
                <Link to={`/search?q=${listing.neighborhood}`}>
                  {listing.neighborhood}
                </Link>
              </li>
              <li>
                <p>{listing.address}</p>
              </li>
            </ul>

            <Map zoom={14} />
          </div>
          <div className='listingDetails__listing_agents u-margin-top-big'>
            <Agents agents={agents} />
          </div>
          <div className='listingDetails__disclaimer u-margin-top-medium'>
            <p>
              No guarantee, warranty or representation of any kind is made
              regarding the completeness or accuracy of descriptions or
              measurements (including square footage measurements and property
              condition), such should be independently verified, and Compass
              expressly disclaims any liability in connection therewith. No
              financial or legal advice provided. Equal Housing Opportunity.
            </p>
            <p>Listing Courtesy of Cantor-Pecorella</p>
            <p>
              All data is deemed reliable but is not guaranteed accurate by
              Compass. See Terms of Service for additional restrictions. Compass
              · Tel: 212-913-9058 · New York, NY
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default listingDetail;
