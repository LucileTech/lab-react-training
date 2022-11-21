import React from 'react';

const Random = ({ min, max }) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let finalNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return <h3>{finalNumber}</h3>;
};

export default Random;
