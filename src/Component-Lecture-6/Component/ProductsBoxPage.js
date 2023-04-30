import React from "react";
import AsidePart from "./AsidePart";
import GallaryCotent from "./GallaryCotent";

const ProductsBoxPage = () => {
  return (
    <div className="ProductsBoxPage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 rowasidestyle">
            <AsidePart />
          </div>
          <div className="col-10 ">
            <GallaryCotent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsBoxPage;
