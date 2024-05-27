import styles from "./navbar-component.module.css";
import logo from "../../assets/images/logo.png";

export const NavbarComponent = () => (
  <header>
    <nav className={styles.toolbar}>
      <ul>
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <img src={logo} alt="img" />
        </li>
        <li>
          <a href="./html2.html">Lista</a>
        </li>
      </ul>
    </nav>
  </header>
);
