import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.menu}>
      <a className={styles.logo} href="">
        <img src="/image/logo-home.png" alt="" />
      </a>
      <nav>
        <div className={styles.hamburger}>
          <div className={styles.line}></div>
          <div className={styles.line}></div >
          <div className={styles.line}></div >
        </div >
        <ul className={styles.navLinks} >
          <li><a href="#inicio">inicio</a></li>
          <li><a href="#servicos">serviços</a></li>
          <li><a href="#projetos">projetos</a></li>
          <li><a href="#sobre">sobre min</a></li>
          <li><a href="#contato">contato</a></li>
        </ul >
      </nav >
    </header >
  )
}