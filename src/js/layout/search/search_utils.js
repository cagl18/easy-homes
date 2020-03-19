import { redirectToURL, getURLParams } from '../../../shared/utility';

export const redirectToSearchPage = () => {
  const searchTerm = getURLParams('q');
  if (searchTerm.length) {
    redirectToURL('/search', this.props.history);
  }
};
