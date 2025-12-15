import styles from "../styles/Features.module.css";

export default function Features() {
  return (
    <section className={styles.features}>
      <div>
        <h3>Fast</h3>
        <p>Optimized performance with Next.js</p>
      </div>
      <div>
        <h3>Secure</h3>
        <p>Built with best security practices</p>
      </div>
      <div>
        <h3>Scalable</h3>
        <p>Grows with your business</p>
      </div>
    </section>
  );
}
