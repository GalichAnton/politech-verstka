import { Outlet } from 'react-router';

import { SiteFooter } from '@widgets/site-footer';
import { SiteHeader } from '@widgets/site-header';

import { Container } from '@shared/ui/container';

import styles from './AppLayout.module.css';

const navigation = [
  { label: 'Главная', to: '/' },
  { label: 'О городе', to: '/about' },
  { label: 'Места и прогулки', to: '/places' },
  { label: 'Практикум', to: '/practice' },
];

export function AppLayout() {
  return (
    <div className={styles.layout}>
      <SiteHeader navigation={navigation} />

      <main className={styles.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
