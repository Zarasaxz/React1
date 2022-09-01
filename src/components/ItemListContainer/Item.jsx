import React from "react";
import { ItemCounts } from "./ItemCounts";
import "./cards.css";

export const Item = ({ productos }) => {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card w-100 card-border mb-5">
          <img src={productos.img} className="fluid card-img-top" alt={productos.title} />
          <div className="card-body bg-white">
            <p className="text-black text-center">{productos.title}</p>
            <p className="text-black text-center">${productos.price}</p>
            <ItemCounts stock={productos.stock} />
          </div>
        </div>
      </div>
    </>
  );
};