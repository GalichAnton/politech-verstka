import { Link } from 'react-router';

import { PageIntro } from '@shared/ui/page-intro';

export function HomePage() {
  return (
    <>
      <PageIntro
        title="Мой Сосновый Бор"
        description="Родной город, любимые места и прогулки. Здесь собираются истории и фотографии Соснового Бора."
      />
      <p>
        <Link to="/about">Познакомиться с городом</Link>
      </p>
    </>
  );
}
