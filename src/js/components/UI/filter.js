import React, { Component } from 'react';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

import Button from './button';
import Sort from './sort';
import {
  updateURLParams,
  getAllUrlParams,
  getURLParams
} from '../../../shared/utility';

const defaultFields = {
  minprice: { value: 0, label: 'No Min Price' },
  maxprice: { value: 9999999999, label: 'No Max Price' },
  minbeds: { value: -1, label: 'No Min' },
  maxbeds: { value: 7, label: 'No Max' },
  minbaths: { value: 0, label: 'No Min' },
  minSqft: { value: 0, label: 'No Min' },
  maxSqft: { value: 8000, label: 'No Max' }
};

class Filter extends Component {
  state = {
    fields: { ...JSON.parse(JSON.stringify(defaultFields)) }, //Deep copying defaultFields Obj
    selectedFiltersCounter: 0,
    isAdvancedFiltersOpened: false
  };
  componentDidMount() {
    if (this.props.position === 'open') {
      this.toogleDrawer();
    }
    this.populateUIFilterFieldsFromURLParams();
  }
  populateUIFilterFieldsFromURLParams = () => {
    const updatedFields = JSON.parse(JSON.stringify(this.state.fields));
    const URLparams = getAllUrlParams();

    for (let key in URLparams) {
      if (updatedFields[key]) {
        updatedFields[key].value = key.includes('baths')
          ? parseFloat(URLparams[key])
          : parseInt(URLparams[key]);
        const fieldName = key.replace(/min|max/, '');
        if (
          (fieldName === 'baths' &&
            updatedFields[key].value >
              defaultFields[`min${fieldName}`].value) ||
          (updatedFields[key].value > defaultFields[`min${fieldName}`].value &&
            updatedFields[key].value < defaultFields[`max${fieldName}`].value)
        ) {
          if (key.includes('price')) {
            updatedFields[key].label = this.getLabelOfValue(
              updatedFields[key].value,
              this.getPriceOptions()
            );
          }
          if (
            key.includes('bed') &&
            updatedFields[key].value > defaultFields.minprice.value &&
            updatedFields[key].value < defaultFields.maxprice.value
          ) {
            updatedFields[key].label = this.getLabelOfValue(
              updatedFields[key].value,
              this.getBedsOptions()
            );
          }
          if (key.includes('bath')) {
            updatedFields[key].label = this.getLabelOfValue(
              updatedFields[key].value,
              this.getBathsOptions()
            );
          }
        }
      }
    }

    const selectedFiltersCounter = this.getSelectedFilters().length;

    this.setState(
      { selectedFiltersCounter, fields: updatedFields },
      this.filterDataFromURLParams
    );
    // populates selected filters from URL into the UI
  };
  filterDataFromURLParams = () => {
    const listing_type = getURLParams('type', this.props.location);
    if (listing_type.trim().length) {
      this.onChangeHandler('type', { value: listing_type });
    }
  };
  toogleDrawer = () => {
    this.setState({
      isAdvancedFiltersOpened: !this.state.isAdvancedFiltersOpened
    });
  };

  handleClickOutside = () => {
    //auto-closes menu when user click outside component
    if (this.state.isAdvancedFiltersOpened) {
      this.setState({ isAdvancedFiltersOpened: false });
    }
  };

  getLabelOfValue = (value, arr) => {
    if (!value || !arr.length) {
      return '';
    }
    for (let entry of arr) {
      if (entry.value === value) {
        return entry.label;
      }
    }

    return '';
  };

  getSelectedFilters = () => {
    const selectedFields = new Set();

    for (let key in this.state.fields) {
      if (
        key !== 'type' &&
        defaultFields[key].value !== this.state.fields[key].value
      ) {
        const newKey = key.replace(/min|max/, '');
        selectedFields.add(newKey);
      }
    }

    return [...selectedFields];
  };

  getPriceOptions = () => {
    const price_value_options = [];
    let price_label = '';
    for (let i = 100; i <= 25000; ) {
      if (i < 500) {
        price_label = `$${i}k`;
        price_value_options.push({ value: i * 1000, label: price_label });
        i += 25;
      }
      if (i < 1000) {
        price_label = `$${i}k`;
        price_value_options.push({ value: i * 1000, label: price_label });
        i += 50;
      } else if (i < 5000) {
        price_label = `$${i / 1000}M`;
        price_value_options.push({ value: i * 1000, label: price_label });
        i += 250;
      } else if (i < 10000) {
        price_label = `$${i / 1000}M`;
        price_value_options.push({ value: i * 1000, label: price_label });
        i += 1000;
      } else if (i <= 25000) {
        price_label = `$${i / 1000}M`;
        price_value_options.push({ value: i * 1000, label: price_label });
        i += 2500;
      }
    }
    return price_value_options;
  };

  getBedsOptions = () => {
    const bed_value_options = [];
    let bed_label = '';
    for (let i = 0; i <= 6; i++) {
      if (i === 0) {
        bed_label = 'Studio';
        bed_value_options.push({ value: i, label: bed_label });
      } else {
        bed_value_options.push({ value: i, label: i });
      }
    }
    return bed_value_options;
  };

  getBathsOptions = () => {
    const bath_value_options = [];
    let bath_label = '';
    for (let i = 0; i <= 6; i += 0.5) {
      bath_label = `${i}+`;
      bath_value_options.push({ value: i, label: bath_label });
    }
    return bath_value_options;
  };

  getSquareFootOptions = () => {
    const sq_value_options = [];
    let sq_label = '';
    for (let i = 500; i <= 8000; ) {
      sq_label = `${i.toLocaleString()}`;
      sq_value_options.push({ value: i, label: sq_label });
      if (i < 3000) {
        i += 250;
      } else if (i < 4000) {
        i += 500;
      } else {
        i += 1000;
      }
    }
    return sq_value_options;
  };

  onChangeHandler = async (name, event) => {
    // console.log('filter onChange method was called');
    const newState = { [name]: event };

    updateURLParams({ [name]: event.value }, this.props.history);
    this.props.onFiltersSelected({ [name]: event.value });

    await this.setState({
      fields: { ...this.state.fields, ...newState }
    });
    const selectedFiltersCounter = this.getSelectedFilters().length;
    this.setState({ selectedFiltersCounter });
  };

  render() {
    let is_active = {};
    is_active.className = this.state.isAdvancedFiltersOpened ? 'is-active' : '';
    is_active.onClick = this.state.isAdvancedFiltersOpened
      ? this.toogleDrawer
      : null;

    return (
      <div className={`filters ${is_active['className']}`}>
        <div className='filters__wrapper'>
          <h2 className='heading'>Filters</h2>
          <div className='basicFilters__section'>
            <div className='filters__item prices'>
              <div className='price_filter'>
                <Select
                  className='select'
                  name='min-price'
                  components={{ IndicatorSeparator: null }}
                  options={[
                    { value: 0, label: 'No Min Price' },
                    ...this.getPriceOptions()
                  ]}
                  // defaultValue={{ value: 0, label: 'No Min Price' }}
                  onChange={e => this.onChangeHandler('minprice', e)}
                  // getOptionLabel={this.state.minPrice}
                  value={this.state.fields.minprice}
                />

                <span style={{ padding: '0 8px' }}>-</span>
                <Select
                  className='select'
                  name='max-price'
                  components={{ IndicatorSeparator: null }}
                  options={[
                    { value: 9999999999, label: 'No Max Price' },
                    ...this.getPriceOptions()
                  ]}
                  // defaultValue={{ value: 0, label: 'No Max Price' }}
                  onChange={e => this.onChangeHandler('maxprice', e)}
                  value={this.state.fields.maxprice}
                />
              </div>
            </div>
            <div className='filters__item'>
              <Button onClick={this.toogleDrawer}>
                {`${
                  this.state.isAdvancedFiltersOpened ? 'Closed' : ''
                } Filters `}

                {this.state.selectedFiltersCounter > 0 ? (
                  <span className='activeFilters-count'>
                    {this.state.selectedFiltersCounter}
                  </span>
                ) : (
                  ''
                )}
              </Button>
            </div>
          </div>
          <div className='results'>
            <span className='results__found'>
              <b>{this.props.filteredData.length} </b>
              Homes
            </span>
            <Sort onChange={this.filterDataFromURLParams} />
          </div>
          <div className='advanceFilters'>
            <div className='advanceFilters__section'>
              <div className='advanceFilters__item beds'>
                <h4 className='heading'>Beds</h4>
                <div className='advanceFilters__item--field'>
                  <Select
                    className='select'
                    name='min-beds'
                    components={{ IndicatorSeparator: null }}
                    options={[
                      { value: -1, label: 'No Min' },
                      ...this.getBedsOptions()
                    ]}
                    defaultValue={this.state.fields.minbeds}
                    onChange={e => this.onChangeHandler('minbeds', e)}
                    value={this.state.fields.minbeds}
                  />
                  <span style={{ padding: '0 8px' }}>-</span>
                  <Select
                    className='select'
                    name='max-beds'
                    components={{ IndicatorSeparator: null }}
                    options={[
                      { value: 7, label: 'No Max' },
                      ...this.getBedsOptions()
                    ]}
                    defaultValue={this.state.fields.maxBeds}
                    onChange={e => this.onChangeHandler('maxbeds', e)}
                    value={this.state.fields.maxbeds}
                  />
                </div>
              </div>

              <div className='advanceFilters__item baths'>
                <h4 className='heading'>Baths</h4>
                <div className='advanceFilters__item--field'>
                  <Select
                    className='select select--single'
                    name='Baths'
                    components={{ IndicatorSeparator: null }}
                    options={[
                      { value: 0, label: 'No Min' },
                      ...this.getBathsOptions()
                    ]}
                    defaultValue={this.state.fields.minBaths}
                    onChange={e => this.onChangeHandler('minbaths', e)}
                    value={this.state.fields.minbaths}
                  />
                </div>
              </div>
            </div>
            <div className='advanceFilters__section'>
              <div>
                <h2 className='heading'>Property Facts</h2>
                <div className='advanceFilters__item'>
                  <h4 className='heading'>Square Feet</h4>
                  <div className='advanceFilters__item--field'>
                    <Select
                      className='select'
                      name='min-sqft'
                      components={{ IndicatorSeparator: null }}
                      options={[
                        { value: -1, label: 'No Min' },
                        ...this.getSquareFootOptions()
                      ]}
                      defaultValue={this.state.fields.minSqft}
                      onChange={e => this.onChangeHandler('minSqft', e)}
                      value={this.state.fields.minSqft}
                    />
                    <span style={{ padding: '0 8px' }}>-</span>
                    <Select
                      className='select'
                      name='max-sqft'
                      components={{ IndicatorSeparator: null }}
                      options={[
                        { value: 7, label: 'No Max' },
                        ...this.getSquareFootOptions()
                      ]}
                      defaultValue={this.state.fields.maxSqft}
                      onChange={e => this.onChangeHandler('maxSqft', e)}
                      value={this.state.fields.maxSqft}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(onClickOutside(Filter));

// setSelectedFiltersOnURL = () => {
//   // console.log('getSelectedFilters state', this.state);
//   const selectedFields = new Set();
//   for (let key in this.state.fields) {
//     if (defaultFields[key].value !== this.state.fields[key].value) {
//       const fieldName = key.replace(/min|max/, '');
//       this.state.fields.filter(f => f.includes(fieldName))
//       selectedFields.add(fieldName);
//     }
//   }
//   console.log('selectedFields', selectedFields);
//   return [...selectedFields];
// };
