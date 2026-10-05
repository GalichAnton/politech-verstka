import styles from './Logo.module.css';

export function Logo() {
  return (
    <span className={styles.logo}>
      <span aria-hidden="true" className={styles.symbol} />
      <span>Мой Сосновый Бор</span>
    </span>
  );
}
