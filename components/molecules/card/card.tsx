import styles from "./card.module.scss";

export default function Card() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>Hi</div>
      <div className={styles.cardBG} />
    </div>
  );
}
