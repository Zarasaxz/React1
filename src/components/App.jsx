import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";

const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer/>
        </>
    );
}

export default App;