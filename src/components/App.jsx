import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "../components/Cart/CartContext";
import { Cart } from "../components/Cart/Cart";


const App = () => {
    return (
<>
      <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
            <Route path="/componentes" element={<ItemListContainer />} />
            <Route
              path="/componentes/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;