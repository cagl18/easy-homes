import { redirectToURL, getURLParams } from '../../../shared/utility';

export const redirectToSearchPage = () => {
  const searchTerm = getURLParams('q');
  if (searchTerm.length) {
    // console.log('window', window.history);
    redirectToURL('/search', window.history);
  }
};

export const getPriceLabel = (price) => {
  let price_label = '';
  if (price < 1000) {
    price_label = `${price}`;
  } else if (price < 1000000) {
    price_label = `${(price / 1000).toFixed(2)}K`;
  } else {
    price_label = `${(price / 1000000).toFixed(2)}M`;
  }

  return price_label;
};
