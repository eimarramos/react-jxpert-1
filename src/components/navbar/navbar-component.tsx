import styles from './navbar-component.module.css'


export const NavbarComponent = () =>(
    <nav className={styles.nav}>
        <ul className={styles.links}>         
        <li><a href="">Inicio</a></li>
          <li><img src="/assets/images/logo.png" alt="img" /></li>
          <li></li>
        </ul>
    </nav>
)