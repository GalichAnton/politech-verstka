import { Link } from 'react-router';

import { PageIntro } from '@shared/ui/page-intro';

export function PracticePage() {
  return (
    <>
      <PageIntro
        title="Практикум"
        description="Работы по курсу «Верстка и прототипирование сайтов»."
      />
      <ul>
        <li>
          <Link to="/practice/task-01">Задание 1. Верстка сайта</Link>
        </li>
      </ul>
    </>
  );
}
