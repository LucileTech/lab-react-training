import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <h3>{lastName}</h3>
      <h3>{firstName}</h3>
      <h3>{gender}</h3>
      <h3>{height}</h3>
      <h3>{birth}</h3>
      <img src={picture} alt="Picture" />
    </div>
  );
};

export default IdCard;
