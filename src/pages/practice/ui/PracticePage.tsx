import { Link } from 'react-router';

import { PageIntro } from '@shared/ui/page-intro';

import styles from './PracticePage.module.css';

export function PracticePage() {
  return (
    <>
      <PageIntro
        title="Практикум"
        description="Здесь собраны учебные работы по курсу «Верстка и прототипирование сайтов». Они используют общий макет городского гида."
      />
      <p className={styles.description}>
        Первая работа — адаптивный сайт о Сосновом Боре. В его основе общий дизайн, собственный
        CSS-логотип, история города и фотографии. Для следующих заданий в этом разделе будут
        появляться отдельные страницы.
      </p>
      <ul>
        <li>
          <Link to="/practice/task-01">Задание 1. Верстка сайта</Link>
        </li>
      </ul>
      <p>
        <Link to="/">Вернуться к городскому гиду →</Link>
      </p>
    </>
  );
}
