// import React from "react";

// const FetcProductItem = (props) => {
//   return (
//     <div className="FetcProductItem col-sm-6 col-me-4 col-lg-3 mb-4">
//       <div className="card">
//         <img src={props.image} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{props.title}</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <h5 className="card-title">Price: {props.price}$</h5>

//           <a href="/#" className="btn btn-primary">
//             ADD
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FetcProductItem;


import React from "react";
import {Link} from "react-router-dom"
const FetcProductItem = (props) => {
  return (
    <div className="FetcProductItem  col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={props.product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.product.title.slice(0,25)}...</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h5 className="card-title">Price: {props.product.price}$</h5>

          <Link to={`/Productdetails/${props.product.id}`} className="btn btn-primary">
            Show
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FetcProductItem;
