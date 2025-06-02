import React from 'react';

const TypeIcon = ({ type }) => {
  return (
    <img
      src={type.icon}
      alt={`${type.name} type`}
      title={type.name}
      style={{
        marginRight: '4px',
        verticalAlign: 'middle'
      }}
    />
  );
};

export default TypeIcon; 