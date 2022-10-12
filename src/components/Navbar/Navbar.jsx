import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { CartWidget } from "./Cartwidget";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarColor02"
          >
            <ul className="navbar-nav w-100 justify-content-evenly">
            <CartWidget />
              <li className="nav-item">
                
                <NavLink className="nav-link" to="/componentes">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/componentes/placa"
                    >
                      Placas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/componentes/gabinete"
                    >
                      Gabinetes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/componentes/motherboard"
                    >
                      Motherboards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/componentes/procesador">
                      Procesadores
                    </NavLink>
                  </li>
                </ul>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;