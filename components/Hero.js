import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Build Modern Web Experiences</h1>
      <p>
        We help businesses grow with scalable, fast, and modern web solutions.
      </p>
      <button>Get Started</button>
    </section>
  );
}
