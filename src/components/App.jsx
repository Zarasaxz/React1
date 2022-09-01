import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer product="Cafetera" info="Expresso" description="Smartlife
Cafetera Expresso 2 en 1 Smartlife SL-EC8501"/>
        </>
    );
}

export default App;