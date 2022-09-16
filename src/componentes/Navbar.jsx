import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="container-text">
        <a className="text" href="#">
          Mi Negocio
        </a>
      </div>
      <div className="container-links">
        <a className="links" href="#">
          Inicio
        </a>
        <a className="links" href="#">
          Nosotros
        </a>
        <a className="links" href="#">
          Productos
        </a>
        <a className="links" href="#">
          Contacto
        </a>
        <button className="btn-cart">
          <span className="cart">
            <FaShoppingCart />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
