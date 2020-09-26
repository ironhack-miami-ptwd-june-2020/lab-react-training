import React from 'react';

export default function IdCard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {
  return (
    <div>
      firstName: {firstName}
      lastName: {lastName}
      gender: {gender}
      height: {height}
      birth: {birth.toDateString()}
      picture: <img src={picture} alt="profile-pic" />
    </div>
  );
}
