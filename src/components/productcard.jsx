// write product card here
import React from 'react';
import Button from './button';

const Productcard = () => {
  // Static product details
  const productImage = 'https://i.pinimg.com/736x/f8/f3/45/f8f34528087d1706adc42c7b8445f085.jpg';
  const productName = 'Sample Product';
  const productPrice = '$99.99';

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', width: '300px', textAlign: 'center' }}>
      <img src={productImage} alt={productName} style={{ width: '100%', height: 'auto' }} />
      <h2>{productName}</h2>
      <p>{productPrice}</p>
      <Button />
    </div>
  );
};

export default Productcard;