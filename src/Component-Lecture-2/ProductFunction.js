
import { useState } from "react";
import Button from "./Button";

const ProductFunction = (props) => {
let [name,setName]=useState("aaaaaaaa");
let [number,setnumber]=useState(0);

// let changename=()=>{
//   // setName("youussjs");
//   console.log("hellloooorrr");
// }
function changename(){
  setName("youussjs");
//  console.log("hellloooorrr");

}

let changenumber=()=>{
  setnumber(number+1);
}


  return (
    <div className='ProductFunction'>
      <h1>Product Name : {name}</h1>
      <h1>Product Number : {number}</h1>
      <h1>Product Description : {props.description}</h1>
      <Button name={props.name}/>
      <button onClick={changename}>clich</button>
      <button onClick={changenumber}>clich</button>
      {/* <button onClick={}>clich</button> */}
      {/* <button onClick={}>clich</button> */}
    </div>
  );
}

export default ProductFunction;
