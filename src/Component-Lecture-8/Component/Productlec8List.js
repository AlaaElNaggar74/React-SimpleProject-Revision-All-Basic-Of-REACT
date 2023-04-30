import React from "react";
import { useContext } from "react";
// import { ProductContext } from "./Lecture8";

// import ContextState from "./CotextApi/ContextState";
import { productco } from './CotextApi/ContextState';


// import ProductAtoms from './RecoilComp/ProductAtom'
// import {useRecoilState} from "recoil"

const Productlec8List = ({ product }) => {

  // let productcontex=useContext(ProductContext);
  let ContextStat=useContext(productco);

  // let [productRecoil,setproductRecoil]=useRecoilState(ProductAtoms);
  return (
    <div className="Productlec8List">
      <h1 className="text-center">The Product List : </h1>
      <div className="text-center my-5" >
        {ContextStat.map((pro) => (
          <h1 key={pro.id}> {pro.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default Productlec8List;
