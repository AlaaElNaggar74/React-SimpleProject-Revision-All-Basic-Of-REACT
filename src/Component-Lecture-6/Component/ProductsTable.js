import React from "react";
import AsidePart from "./AsidePart";

import TableContent from "./TableContent";

const ProductsTable = () => {
  return (
    <div className="ProductsTable">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 rowasidestyle">
            <AsidePart />
          </div>
          <div className="col-10 ProductsTablestyle">
            <TableContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
