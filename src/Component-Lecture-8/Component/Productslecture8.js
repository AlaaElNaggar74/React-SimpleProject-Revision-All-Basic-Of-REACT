

import React from 'react';

import { useContext } from 'react';
// import { ProductContext } from './Lecture8';
// import ContextState from './CotextApi/ContextState';
import { productco } from './CotextApi/ContextState';


// import ProductAtoms from './RecoilComp/ProductAtom'
// import {useRecoilState} from "recoil"



const Productslecture8 = (props) => {
  // let ProductContex=useContext(ProductContext);
  let ContextStat=useContext(productco);


  // let [productRecoil,setproductRecoil]=useRecoilState(ProductAtoms);


  return (
    <div className='Productslecture8'>
      <h1 className='my-5'>
      the length of obj is: {ContextStat.length} 
      </h1>
    </div>
  );
}

export default Productslecture8;
