import { Link } from 'react-router';

import { PageIntro } from '@shared/ui/page-intro';

import frog from '../assets/frog.png';
import prince from '../assets/prince.png';
import princess from '../assets/princess.png';

import styles from './TaskThreePage.module.css';

export function TaskThreePage() {
  return (
    <>
      <PageIntro
        title="Задание 3. Flexbox"
        description="Вариант 1 — принц, лягушка и волшебное превращение. Изображения и слова меняются при наведении и нажатии."
      />
      <section aria-labelledby="fairytale-title" className={styles.result}>
        <h2 id="fairytale-title">Встреча с принцессой</h2>
        <p id="fairytale-help" className={styles.description}>
          Наведите указатель на сцену: лягушка появится и приблизится к принцу. Нажмите, чтобы
          превратить её в принцессу. На телефоне достаточно коснуться сцены; с клавиатуры — перейти
          к ней клавишей Tab и нажать пробел.
        </p>
        <form className={styles.demo}>
          <div className={styles.stage}>
            <input
              type="checkbox"
              id="fairytale-trigger"
              className={styles.trigger}
              aria-describedby="fairytale-help"
              aria-label="Превратить лягушку в принцессу"
            />
            <label className={styles.scene} htmlFor="fairytale-trigger">
              <span className={styles.prince} aria-hidden="true">
                <img src={prince} alt="" width="250" height="250" />
              </span>
              <span className={styles.partner} aria-hidden="true">
                <span className={styles.question}>Ты кто?</span>
                <span className={styles.answer}>Принцесса</span>
                <img className={styles.frog} src={frog} alt="" width="250" height="250" />
                <img className={styles.princess} src={princess} alt="" width="250" height="250" />
              </span>
            </label>
          </div>
          <div className={styles.controls}>
            <p className={`${styles.status} ${styles.hint}`}>
              Наведите указатель на сцену, затем нажмите на неё.
            </p>
            <p className={`${styles.status} ${styles.success}`}>
              Лягушка превратилась в принцессу!
            </p>
            <button type="reset" className={styles.reset}>
              Начать заново
            </button>
          </div>
        </form>
      </section>
      <p className={styles.back}>
        <Link to="/practice">← Все учебные работы</Link>
      </p>
    </>
  );
}
