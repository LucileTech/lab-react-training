import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let srcCard;
  if (type === 'Master Card') {
    srcCard = '../assets/images/master-card.svg';
  } else if (type === 'Visa') {
    srcCard = '../assets/images/visa.png';
  }

  return (
    <div
      className="CreditCard"
      style={{
        color: `${color}`,
        backgroundColor: `${bgColor}`,
        height: 300,
        width: 600,
      }}
    >
      <div className="threepartsofcard">
        <img src={srcCard} alt="CardPicture" />
        <h3>{type}</h3>
        <h3>{number}</h3>
        <div className="cardInformation">
          <div className="carddetails">
            <h3>
              Expires {expirationMonth}/{expirationYear}
            </h3>
            <h3>{bank}</h3>
          </div>
          <div className="nameofowner">
            <h3>{owner}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
