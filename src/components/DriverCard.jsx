import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="DirverCard">
      <h3>{name}</h3>
      <h3>{rating}</h3>
      <img src={img} className="DirverCardImage" alt="Image" />
      <h3>{car}</h3>
    </div>
  );
};

export default DriverCard;
