// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import Logo from "../img/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <Link to="/">
            <img src={Logo} alt="logo" className={styles.logo} />
        </Link>

      {/* Botão do menu mobile */}
      <div
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Início</Link>
        </li>
        <li>
          <Link to="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link>
        </li>
        <li>
          <Link to="/projetos" onClick={() => setIsOpen(false)}>Projetos</Link>
        </li>
        <li>
          <Link to="/contato" onClick={() => setIsOpen(false)}>Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
