

import React, { useEffect, useState } from 'react';

import FetchProductItem from './FetchProductItem';
const FetchProductList = () => {

let [outData,setOutdata]=useState([]);

let realData=outData.map((product)=> <FetchProductItem key={product.id} product={product}/>);

let fetchProductFunction=()=>{
  fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setOutdata(json))
}
  useEffect(()=>{
  
    fetchProductFunction();
  },[])
  return (
    <div className='FetchProductList my-5'>
      <h1 className='text-center'>--------------------------------------------------------------</h1>
      <h1 className='text-center mb-5'>Fetch Product List</h1>
      <div className="container">
        <div className="row">
          {realData}
        </div>
      </div>
    </div>
  );
}

export default FetchProductList;
