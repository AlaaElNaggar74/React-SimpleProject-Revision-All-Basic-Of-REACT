

import React from 'react';
import pic1 from "../Pic/Product-1.jpg"
import pic2 from "../Pic/Product-2.jpg"
import pic3 from "../Pic/Product-3.jpg"
import pic4 from "../Pic/Product-4.jpg"
import pic5 from "../Pic/Product-5.jpg"
import pic6 from "../Pic/Product-6.jpg"
import pic7 from "../Pic/Product-7.jpg"
import pic8 from "../Pic/Product-8.jpg"
import StatiProductItem from './StatiProductItem';
import "./ProductsAllPage.css"

const SticProductLi = () => {
  return (
    <div className='SticProductLi'>
      <h1 className='text-center my-5'>Static Product</h1>
      <div className="container">
        <div className="row">
          <StatiProductItem image={pic1} title="Toshiba" price="236.91"/>
          <StatiProductItem image={pic2} title="Toshiba" price="254.37"/>
          <StatiProductItem image={pic3} title="Toshiba" price="135.20"/>
          <StatiProductItem image={pic4} title="Toshiba" price="9852.71"/>
          <StatiProductItem image={pic5} title="Toshiba" price="423.78"/>
          <StatiProductItem image={pic6} title="Toshiba" price="612.12"/>
          <StatiProductItem image={pic7} title="Toshiba" price="531.2"/>
          <StatiProductItem image={pic8} title="Toshiba" price="297.55"/>
        </div>
      </div>
    </div>
  );
}

export default SticProductLi;
