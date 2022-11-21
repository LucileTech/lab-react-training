import React from 'react';

const Rating = (children) => {
  if ((children >= 0) & (children < 1)) {
    return <div>☆☆☆☆☆</div>;
  } else if (children >= 1 && children < 2) {
    return <div>★☆☆☆☆</div>;
  } else if (children >= 2 && children < 3) {
    return <div>★★☆☆☆</div>;
  } else if (children >= 3 && children < 4) {
    return <div>★★★☆☆</div>;
  } else if (children >= 4 && children < 5) {
    return <div>★★★★☆</div>;
  } else if (children === 5) {
    return <div>★★★★★</div>;
  }
};

export default Rating;
