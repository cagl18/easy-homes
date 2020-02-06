import React, { Component } from 'react';
import Button from './button';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

class Filter extends Component {
  state = {
    minPrice: { value: 0, label: 'No Min Price' },
    maxPrice: { value: 9999999999, label: 'No Max Price' }
  };

  getOptions = () => {
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

  onChangeHandler = (name, event) => {
    console.log(name, event);
    const newState = { [name]: event.value };
    this.props.onFiltersSelected(newState);
    this.setState({ [name]: event });

    console.log('filter state', this.state);
  };

  render() {
    console.log('maxPrice', this.state.maxPrice);
    console.log('minPrice', this.state.minPrice);
    return (
      <div className='filters'>
        <div className='priceFilters'>
          <Select
            className='select'
            name='min-price'
            id='min-price'
            components={{ IndicatorSeparator: null }}
            options={[
              { value: 0, label: 'No Min Price' },
              ...this.getOptions()
            ]}
            // defaultValue={{ value: 0, label: 'No Min Price' }}
            onChange={e => this.onChangeHandler('minPrice', e)}
            // getOptionLabel={this.state.minPrice}
            value={this.state.minPrice}
          />

          <span style={{ padding: '0 8px' }}>-</span>
          <Select
            className='select'
            name='max-price'
            id='max-price'
            components={{ IndicatorSeparator: null }}
            options={[
              { value: 9999999999, label: 'No Max Price' },
              ...this.getOptions()
            ]}
            // defaultValue={{ value: 0, label: 'No Max Price' }}
            onChange={e => this.onChangeHandler('maxPrice', e)}
            value={this.state.maxPrice}
          />
        </div>
        <Button>
          <b>Filters</b>
        </Button>
      </div>
    );
  }
}

export default Filter;
