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
        <img class="logo-image" src={type} alt="logo image" />
        <h3>{number}</h3>
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
