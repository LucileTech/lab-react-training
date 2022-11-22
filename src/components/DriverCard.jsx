import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  console.log(car);
  return (
    <div className="DirverCard">
      <h3>{name}</h3>
      <Rating>{rating}</Rating>
      <img src={img} className="DirverCardImage" alt="ImageDriver" />
      <h3>{car.model}</h3>
      <h3>{car.licensePlate}</h3>
    </div>
  );
};

export default DriverCard;
