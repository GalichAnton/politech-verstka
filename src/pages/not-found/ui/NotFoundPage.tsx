import { Link } from 'react-router';

import { PageIntro } from '@shared/ui/page-intro';

export function NotFoundPage() {
  return (
    <>
      <PageIntro
        title="Страница не найдена"
        description="Проверьте адрес или вернитесь на главную."
      />
      <p>
        <Link to="/">На главную</Link>
      </p>
    </>
  );
}
