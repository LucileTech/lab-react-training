import React from 'react';
import VisaImage from '../assets/images/visa.png';

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
  if (type === 'Visa') {
    type = VisaImage;
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
        <picture className="logoCard">
          <img class="logo-image" src={type} alt="logoimage" />
        </picture>
        <h3> ●●●● ●●●● ●●●●{number.substr(12, 4)}</h3>
        <div className="cardInformation">
          <div className="carddetails">
            <h3>
              Expires {expirationMonth < 10 ? '0' : ''}
              {expirationMonth}/{expirationYear}
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
