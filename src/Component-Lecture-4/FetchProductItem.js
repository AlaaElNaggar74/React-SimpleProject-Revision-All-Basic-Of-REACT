

import React from 'react';

const FetchProductItem = (props) => {
  return (
    <div className='FetchProductItem col-sm-6 col-md-4 col-lg-3 mb-4' >
       <div className="card" >
        <img src={props.product.image} className="card-img-top" alt="..." style={{height:"250px"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.product.title.slice(0,25)}</h5>
          <p className="card-text">{props.product.description.slice(0,140)}</p>
          <p className="card-text">Price: {props.product.price}</p>
          <a href="/#" className="btn btn-primary">ADD</a>
        </div>
      </div>
    </div>
  );
}

export default FetchProductItem;
