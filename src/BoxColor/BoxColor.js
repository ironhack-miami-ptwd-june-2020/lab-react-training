import React from 'react';

export default function BoxColor({ r, g, b }) {
  //   const divStyle = ;
  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        height: '100px',
        width: '100px',
      }}
    >
      #{r.toString(16)}
      {g.toString(16)}
      {b.toString(16)}
    </div>
  );
}
