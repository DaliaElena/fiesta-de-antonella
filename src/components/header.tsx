import React, { useState } from "react";
import "./../Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para cerrar el menú
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">🎉 Fiesta!</div>

      {/* Botón Hamburguesa */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Menú */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#ubicacion" onClick={closeMenu}>Ubicación</a></li>
          <li><a href="#confirma" onClick={closeMenu}>Confirma</a></li>
          <li><a href="#mesa-de-regalos" onClick={closeMenu}>Mesa de Regalos</a></li>
          <li><a href="#reglas-del-parque" onClick={closeMenu}>Reglas del Parque</a></li>
          <li><a href="#estacionamientos" onClick={closeMenu}>Estacionamientos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
