import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const lazyImg = (props) => {
  return <LazyLoadImage {...props}></LazyLoadImage>;
};

export default lazyImg;
