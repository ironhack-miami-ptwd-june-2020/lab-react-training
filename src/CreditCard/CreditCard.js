import React from 'react';

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div>
      <img
        src={type === 'visa' ? 'visa.png' : 'master-card.svg'}
        alt="card-type"
      />
      <div>{'*'.repeat(12) + number.substring(12)} </div>
      <div>
        <span>
          Expires{' '}
          {`${
            expirationMonth.toString().length === 2
              ? expirationMonth
              : `0${expirationMonth}`
          }/${expirationYear.toString().substring(2)}`}
        </span>
        <span>{bank}</span>
      </div>
      <div>{owner}</div>
    </div>
  );
}
