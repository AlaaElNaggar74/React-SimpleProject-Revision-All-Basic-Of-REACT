

import React from 'react';




const CardCo = (props) => {
  return (
    <div className='CardCo'>
      <h1>Card Cpmponent </h1>
      {props.children}
    </div>
  );
}
 CardCo.Title = () => {
  return (
    <div className='CardCo'>
      <h1>Card Title </h1>
    </div>
  );
}
 CardCo.Body = () => {
  return (
    <div className='CardCo'>
      <h1>Card Body </h1>
    </div>
  );
}
 CardCo.Footer = () => {
  return (
    <div className='CardCo'>
      <h1>Card Footer </h1>
    </div>
  );
}
 CardCo.Aside = () => {
  return (
    <div className='CardCo'>
      <h1>Card Aside </h1>
    </div>
  );
}

export default CardCo;
