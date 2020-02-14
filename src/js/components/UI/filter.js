import React, { Component } from 'react';
import Button from './button';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

const defaultFields = {
  minPrice: { value: 0, label: 'No Min Price' },
  maxPrice: { value: 9999999999, label: 'No Max Price' },
  minBeds: { value: -1, label: 'No Min' },
  maxBeds: { value: 7, label: 'No Max' },
  minBaths: { value: 0, label: 'No Min' }
};

class Filter extends Component {
  state = {
    fields: defaultFields,
    selectedFiltersCounter: 0,
    isAdvancedFiltersOpened: false
  };
  componentDidMount() {
    if (this.props.position === 'open') {
      this.toogleDrawer();
    }
    console.log('filter props', this.props);
  }
  componentDidUpdate() {
    console.log('Filter-componentDidUpdate');
  }
  toogleDrawer = () => {
    this.setState({
      isAdvancedFiltersOpened: !this.state.isAdvancedFiltersOpened
    });
  };

  getSelectedFilters = () => {
    // console.log('getSelectedFilters state', this.state);
    const selectedFields = new Set();
    for (let key in this.state.fields) {
      if (defaultFields[key].value !== this.state.fields[key].value) {
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

  onChangeHandler = async (name, event) => {
    const newState = { [name]: event };
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
    // console.log('minBaths, filter comp', this.state.fields.minBaths);
    // console.log('filter state', this.state.fields, this.state.fields.minBaths);
    // console.log('selected filters', this.getSelectedFilters().size);
    return (
      <div className={`filters ${is_active['className']}`}>
        <div className='filters__item prices'>
          <Select
            className='select'
            name='min-price'
            components={{ IndicatorSeparator: null }}
            options={[
              { value: 0, label: 'No Min Price' },
              ...this.getPriceOptions()
            ]}
            // defaultValue={{ value: 0, label: 'No Min Price' }}
            onChange={e => this.onChangeHandler('minPrice', e)}
            // getOptionLabel={this.state.minPrice}
            value={this.state.fields.minPrice}
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
            onChange={e => this.onChangeHandler('maxPrice', e)}
            value={this.state.fields.maxPrice}
          />
          <Button onClick={this.toogleDrawer}>
            {`${this.state.isAdvancedFiltersOpened ? 'Closed' : ''} Filters `}

            {this.state.selectedFiltersCounter > 0 ? (
              <span className='activeFilters-count'>
                {this.state.selectedFiltersCounter}
              </span>
            ) : (
              ''
            )}
          </Button>
        </div>
        <div className='results'>
          <span className='results__found'>
            <b>{this.props.filteredData.length} </b>
            Homes
          </span>
          <span className='results__sorted_by'>Sort By Recommended</span>
        </div>
        <div className='advanceFilters'>
          <div className='advanceFilters__section'>
            <div className='advanceFilters__item'>
              <h4 className='heading'>Beds</h4>
              <Select
                className='select'
                name='min-beds'
                components={{ IndicatorSeparator: null }}
                options={[
                  { value: -1, label: 'No Min' },
                  ...this.getBedsOptions()
                ]}
                defaultValue={this.state.fields.minBeds}
                onChange={e => this.onChangeHandler('minBeds', e)}
                value={this.state.fields.minBeds}
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
                onChange={e => this.onChangeHandler('maxBeds', e)}
                value={this.state.fields.maxBeds}
              />
            </div>
            <div className='advanceFilters__item'>
              <h4 className='heading'>Baths</h4>
              <Select
                className='select'
                name='Baths'
                components={{ IndicatorSeparator: null }}
                options={[
                  { value: 0, label: 'No Min' },
                  ...this.getBathsOptions()
                ]}
                defaultValue={this.state.fields.minBaths}
                onChange={e => this.onChangeHandler('minBaths', e)}
                value={this.state.fields.minBaths}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
