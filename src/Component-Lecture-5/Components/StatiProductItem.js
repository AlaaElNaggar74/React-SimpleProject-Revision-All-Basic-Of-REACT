import React from "react";

const StatiProductItem = (props) => {
  return (
    <div className="StatiProductItem col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h5 className="card-title">Price: {props.price}$</h5>

          <a  className="btn btn-primary">
            ADD
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatiProductItem;
