

import React from 'react';
import AsidePart from './AsidePart';
import LangingCrudPag from './LangingCrudPag';

import "./CrudsStyle.css"
const CrudHomePage = () => {
  return (
    <div className='CrudHomePage'>
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 rowasidestyle">
            <AsidePart />
          </div>
          <div className="col-10 ">
            <div className="box">
              <LangingCrudPag/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CrudHomePage;
