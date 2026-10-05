import { Container } from '@shared/ui/container';

import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>Мой Сосновый Бор · Авторский городской гид</p>
      </Container>
    </footer>
  );
}
