import { Link } from 'react-router';

import { CityPhoto, cityPlaces } from '@entities/city';

import { PageIntro } from '@shared/ui/page-intro';

import styles from './PlacesPage.module.css';

export function PlacesPage() {
  return (
    <>
      <PageIntro
        title="Три повода выйти на прогулку"
        description="Сказочная архитектура, сосны у воды и неожиданные городские силуэты. Выберите настроение — и познакомьтесь с другой стороной Соснового Бора."
      />
      <div className={styles.places}>
        {cityPlaces.map(
          ({ id, category, title, location, photo, description, suggestion, source }, index) => (
            <article aria-labelledby={`${id}-title`} className={styles.place} key={id}>
              <CityPhoto photo={photo} priority={index === 0} />
              <div className={styles.text}>
                <p className={styles.category}>{category}</p>
                <h2 id={`${id}-title`}>{title}</h2>
                <p className={styles.location}>{location}</p>
                <p>{description}</p>
                <h3>Идея для прогулки</h3>
                <p>{suggestion}</p>
                <a className={styles.source} href={source.url}>
                  {source.title} ↗
                </a>
              </div>
            </article>
          ),
        )}
      </div>
      <aside className={styles.note}>
        <h2>Посмотреть город без спешки</h2>
        <p>
          Эти места можно посетить отдельно — подборка не задаёт обязательного маршрута. Для первой
          прогулки выберите одно, а потом дополните впечатления рассказом об истории города. Под
          фотографиями указаны годы съёмки: они помогают увидеть, как выглядели места в разное
          время.
        </p>
        <Link to="/about">Читать историю Соснового Бора →</Link>
      </aside>
    </>
  );
}
