import axios from 'axios';
// const YELP_API_KEY =
//   '1ctYGFOR3TGuExIpue42e7LmLwTiPeBrqSQ-_Z8MsGJSLatK5UVagvWqTgu-fVe1vdh7jPVzfgB1hYgITCpqgnzSLGI51AvdC07wLW0w16jLR1gn-1OSLwntPtHWXXYx';
// const herokuCORS = 'https://cors-anywhere.herokuapp.com/';
const baseURL = 'https://api.yelp.com/v3';

const token = localStorage.getItem('jwt') || null;
// console.log('axios jwt token', token);

export default axios.create({
  // baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3',
  //   baseURL: `${herokuCORS}${baseURL}`,
  //   baseURL: `${herokuCORS}${baseURL}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
