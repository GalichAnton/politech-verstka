import { Link } from 'react-router';

import { PageIntro } from '@shared/ui/page-intro';

import { CssGuitar } from './CssGuitar';

import styles from './TaskTwoPage.module.css';

export function TaskTwoPage() {
  return (
    <>
      <PageIntro
        title="Задание 2. Рисунок CSS"
        description="Вариант 5 — гитара с красным бантом. Рисунок создан средствами CSS в области 200 × 200 px."
      />
      <section aria-labelledby="drawing-title" className={styles.result}>
        <h2 id="drawing-title">Гитара</h2>
        <figure className={styles.figure}>
          <div className={styles.frame}>
            <CssGuitar />
          </div>
          <figcaption>Вариант 5 · 200 × 200 px</figcaption>
        </figure>
        <p className={styles.description}>
          Жёлтый корпус, коричневый гриф, струны и красный бант повторяют композицию образца. Форма
          и цвет каждой детали заданы в стилевой таблице pic.css.
        </p>
        <a href="https://dl.spbstu.ru/mod/assign/view.php?id=157030">Открыть условие в ЭИОС ↗</a>
      </section>
      <p className={styles.back}>
        <Link to="/practice">← Все учебные работы</Link>
      </p>
    </>
  );
}
