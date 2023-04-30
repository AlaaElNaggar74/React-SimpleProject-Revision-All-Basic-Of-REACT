


import React, { useState } from 'react';

const CounterFunction = () => {

  let [count,setCount]=useState(0);
  let [fname,setFname]=useState("")

let increament=()=>{
  setCount(count+1);
}
let decreament=()=>{
  setCount(count-1);
}
let changeName=()=>{
  setFname("Abdo-El-Naggar");

}
let mainName=()=>{
  setFname("Alaa");
}


  return (
    <div className='CounterFunction'>
      <div className="boo my-5 text-center">
        <h1>------------------------------------------------</h1>
        <h1>Counter Function</h1>
        <h1>------------------------------------------------</h1>
        <h1>Counter: {count}</h1>
        <button className='btn btn-danger fw-bold me-2' onClick={increament}>+</button>
        <button className='btn btn-warning fw-bold' onClick={decreament}>-</button>
        <h1>The Name: {fname}</h1>
        <button className='btn btn-danger fw-bold me-2' onClick={changeName}>ChangeName</button>
        <button className='btn btn-warning fw-bold' onClick={mainName}>MainName</button>

      </div>
      
    </div>
  );
}

export default CounterFunction;
