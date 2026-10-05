import { Link } from 'react-router';

import { Container } from '@shared/ui/container';

import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>Мой Сосновый Бор · Авторский городской гид</p>
        <p className={styles.text}>
          Сосновый Бор, Ленинградская область · <Link to="/about">История и источники</Link>
          {' · '}
          <Link to="/practice">Учебные работы</Link>
        </p>
      </Container>
    </footer>
  );
}
