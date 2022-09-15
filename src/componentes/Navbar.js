import React from "react";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="text">
        <h2>E-commerce</h2>
      </div>
      <div className="links">
        <a href="#">Inicio</a>
        <a href="#">Nosotros</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
        <a href="#">#</a>
      </div>
    </nav>
  );
};

export default Navbar;
