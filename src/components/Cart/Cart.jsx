import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { Boleta } from "./Boleta";
import { ItemCart } from "./Cartvista";

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div class="container text-center">
          <div class="row">
            <div class="col p-5 m-5">
              <h2>No hay productos seleccionados</h2>
              <Link to="/"><h3>Buscar</h3></Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}

      <Boleta totalPrice={totalPrice} />
    </>
  );
};