import { Link } from 'react-router';

import { PageIntro } from '@shared/ui/page-intro';

import styles from './TaskOnePage.module.css';

export function TaskOnePage() {
  return (
    <>
      <PageIntro
        title="Задание 1. Верстка сайта"
        description="Авторский городской гид «Мой Сосновый Бор» — работа по адаптивной верстке."
      />
      <section aria-labelledby="result-title" className={styles.result}>
        <h2 id="result-title">Что посмотреть в работе</h2>
        <ul>
          <li>
            <Link to="/">Главная</Link> — знакомство с городом и подборка фотографий.
          </li>
          <li>
            <Link to="/about">О городе</Link> — связный рассказ объёмом более 300 слов с пятью
            изображениями.
          </li>
          <li>
            <Link to="/places">Места и прогулки</Link> — три идеи для знакомства с городом.
          </li>
        </ul>
        <p>
          На всех страницах есть шапка, меню, основной контент и подвал. Собственный логотип с
          силуэтом дерева нарисован средствами CSS и имеет размер 48 × 48 px. Текстовые блоки и
          фотографии размещены с помощью Grid и Flexbox; на узком экране колонки становятся одной
          колонкой.
        </p>
        <p>
          Исторические сведения сопровождаются ссылками на материалы администрации, а фотографии —
          подписями с источниками, авторами и лицензиями.
        </p>
        <a href="https://dl.spbstu.ru/mod/assign/view.php?id=172883">Открыть условие в ЭИОС ↗</a>
      </section>
    </>
  );
}
