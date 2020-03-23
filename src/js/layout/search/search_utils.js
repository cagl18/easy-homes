import { redirectToURL, getURLParams } from '../../../shared/utility';

export const redirectToSearchPage = () => {
  const searchTerm = getURLParams('q');
  if (searchTerm.length) {
    console.log('window', window.history);
    redirectToURL('/search', window.history);
  }
};
