import React from 'react';

const Circle = ({ size }) => {
  return (
    <div className={`w-${size} h-${size} rounded-full bg-slate-600`}></div>
  );
};

export default Circle;
