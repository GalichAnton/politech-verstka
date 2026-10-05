import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

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

const pageTitles: Record<string, string> = {
  '/': 'Мой Сосновый Бор — город между соснами и заливом',
  '/about': 'История города — Мой Сосновый Бор',
  '/places': 'Места и прогулки — Мой Сосновый Бор',
  '/practice': 'Практикум — Мой Сосновый Бор',
  '/practice/task-01': 'Задание 1 — Мой Сосновый Бор',
};

export function AppLayout() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'Страница не найдена — Мой Сосновый Бор';
    const chapter = pathname === '/about' ? new URLSearchParams(search).get('chapter') : null;
    const section = chapter ? document.getElementById(chapter) : null;

    if (section) {
      section.scrollIntoView({ block: 'start' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return (
    <div className={styles.layout}>
      <a
        className={styles['skip-link']}
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('main-content')?.focus();
        }}
      >
        К содержимому
      </a>
      <SiteHeader navigation={navigation} />

      <main className={styles.main} id="main-content" tabIndex={-1}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
