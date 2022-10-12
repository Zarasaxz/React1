import React from "react";
import Swal from "sweetalert2";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./Boleta.css"

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
      <div className="col-2 d-flex align-items-center justify-content-center pagos">
          <img
            src="../../assets/Pagos.png"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <form>
          <label for="Pagos">Formas de pago</label><br/>
            <select classname="form-select">
                <option>Mercado Pago</option>
                <option>Paypal</option>
                <option>Tarjeta de Credito</option>
                <option>Tarjeta de Debito</option>
                <option>PayU</option>
                <option>Criptomonedas</option>
            </select>
          </form>
        </div>
        <div className="col-4 d-flex align-items-center">
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