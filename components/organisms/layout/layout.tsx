import Navbar from "../../molecules/navbar/navbar";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
        <footer className={styles.footer}></footer>
      </main>
    </>
  );
}
