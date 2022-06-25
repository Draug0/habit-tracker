import styles from "./card.module.scss";

export default function Card({ cardInfo }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h1>
            {cardInfo.title}
          </h1>
        </div>
      </div>
      <div className={styles.cardBG} />
    </div>
  );
}
