import React from "react";
import Swal from "sweetalert2";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const Boleta = ({ totalPrice }) => {
  const { clear, cart } = useCartContext();
  const confirm = (id) => {
    clear();
    Swal.fire("Gracias por comprar", "ID de compra: " + id, "success");
  };

  const order = {
    buyer: {
      name: "Juan",
      email: "Prueba@hotmail.com",
      phone: 11111111111,
      address: "Argentina",
    },

    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => confirm(id));
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-8 d-flex align-items-center justify-content-center">
          <ul style={{ listStyle: "none" }}>
            <li>
              <input type="radio" value="Mercado Pago" id="Mercado Pago" />
              <label htmlFor="Mercado Pago">
                Mercadopago - Tarjetas Online - PayU - Criptomonedas
              </label>
            </li>
            <li>
              <input type="radio" value="Deposito" id="Deposito" />
              <label htmlFor="Deposito">
                Depósito o transferencia bancaria
              </label>
            </li>
          </ul>
        </div>
        <div className="col-2 d-flex align-items-center">
          <div className="card-body">
            <p className="fs-4">Total:</p>
            <p className="fs-3">${totalPrice()}</p>
            <button onClick={handleClick} className="btn btn-outline-primary">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};