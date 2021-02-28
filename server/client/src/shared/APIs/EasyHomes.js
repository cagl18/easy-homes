import axios from 'axios';
// const herokuCORS = 'https://cors-anywhere.herokuapp.com/';
// const baseURL = process.env.PUBLIC_URL || 'http://localhost:8000/';

// const token = localStorage.getItem('jwt') || null;
// const Authorization = token ? `Bearer ${token}` : null;
// console.log('axios jwt token', token);

// export default axios.create({
//   // baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3',
//   //   baseURL: `${herokuCORS}${baseURL}`,
//   // baseURL: `${baseURL}`,
//   headers: {
//     Authorization,
//   },
// });
export default axios;

// const apiUrl = 'http://localhost:3001';
axios.interceptors.request.use(
  (config) => {
    // const { origin } = new URL(config.url);
    // const allowedOrigins = [apiUrl];
    // const token = localStorage.getItem('token');
    // if (allowedOrigins.includes(origin)) {
    //   config.headers.authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    if (error.name === 'TokenExpiredError') {
      console.log(error.message);
    }
    return Promise.reject(error);
  }
);
