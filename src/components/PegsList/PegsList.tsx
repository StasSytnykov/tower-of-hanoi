import styles from "./PegsList.module.css";

export const PegsList = () => (
  <ul className={styles.pegsList}>
    <li>
      <div className={styles.centerStick} />
      <div className={styles.bottomStick} />
    </li>
    <li>
      <div className={styles.centerStick} />
      <div className={styles.bottomStick} />
    </li>
    <li>
      <div className={styles.centerStick} />
      <div className={styles.bottomStick} />
    </li>
  </ul>
);
