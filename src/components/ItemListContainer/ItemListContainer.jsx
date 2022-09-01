import React from 'react';
import { ItemCounts } from "./ItemCounts";
import Monitor from "../../img/Cafetera.webp";

const ItemListContainer = ({ product, info, description }) => {
    return (
        <div className="container w-25">
        <div className="card-group">
          <div className="card m-2">
            <img
              src={Monitor}
              className="card-img-top"
              alt="monitor"
            />
            <div className="card-body">
            <h4 className="card-title">{product}</h4>
              <h5 className="card-title">{info}</h5>
              <p className="card-text">{description}</p>
             <ItemCounts/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ItemListContainer;
