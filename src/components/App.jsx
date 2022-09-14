import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";


const App = () => {
    return (
<>
      <BrowserRouter>
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
            <Route path="/notebooks" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;