import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2>Sammunat</h2>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
