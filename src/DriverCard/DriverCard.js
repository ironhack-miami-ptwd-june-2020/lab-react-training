import React from 'react';
import Rating from '../Rating/Rating';

export default function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <img src={img} alt="drivers img" style={{ height: '100px' }} />
      <h2>{name}</h2>
      <Rating>{rating}</Rating>
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
}
