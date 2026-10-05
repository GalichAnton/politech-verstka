import { Link, NavLink } from 'react-router';

import { Container } from '@shared/ui/container';
import { Logo } from '@shared/ui/logo';

import styles from './SiteHeader.module.css';

type SiteHeaderProps = {
  navigation: ReadonlyArray<{ label: string; to: string }>;
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link className={styles.brand} to="/">
            <Logo />
          </Link>
          <nav aria-label="Основная навигация">
            <ul className={styles.navigation}>
              {navigation.map(({ label, to }) => (
                <li key={to}>
                  <NavLink className={styles.link} end={to === '/'} to={to}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
