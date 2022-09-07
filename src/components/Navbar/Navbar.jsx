import React from 'react';
import Form from './Form';
import './Navbar.css';
import Cartwidget from '../Cart/Cartwidget';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Mi marca</a>
    <div className="collapse navbar-collapse" id="navbarColor02">
    
    <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <Cartwidget/>
        </ul>
      <Form contBuscar="Productos"/>
    </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;