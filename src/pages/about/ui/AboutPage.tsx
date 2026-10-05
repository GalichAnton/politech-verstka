import { Link } from 'react-router';

import { cityHistory, CityPhoto, citySources } from '@entities/city';

import { PageIntro } from '@shared/ui/page-intro';

import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <>
      <PageIntro
        title="Город с атомной историей и лесным характером"
        description="От старых деревень на Коваши до молодого города у Финского залива. Пять небольших глав о Сосновом Боре в Ленинградской области."
      />
      <nav aria-label="Главы истории" className={styles.contents}>
        <span>В этом рассказе</span>
        {cityHistory.map(({ id, title }) => (
          <Link key={id} to={`/about?chapter=${id}`}>
            {title}
          </Link>
        ))}
      </nav>
      <article aria-label="История Соснового Бора" className={styles.story}>
        {cityHistory.map(({ id, label, title, photo, paragraphs, source }, index) => (
          <section aria-labelledby={`${id}-title`} className={styles.chapter} id={id} key={id}>
            <div className={styles.text}>
              <p className={styles.label}>{label}</p>
              <h2 id={`${id}-title`}>{title}</h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <a className={styles.source} href={source.url}>
                Источник: {source.title} ↗
              </a>
            </div>
            <CityPhoto photo={photo} priority={index === 0} />
          </section>
        ))}
      </article>
      <section aria-labelledby="sources-title" className={styles.sources}>
        <h2 id="sources-title">Источники и фотографии</h2>
        <p>
          Историческая справка составлена по материалам официального сайта Соснового Бора. Снимки
          показывают город в разные годы; дата и автор указаны под каждым изображением. Для сайта
          фотографии уменьшены и преобразованы в WebP, без ретуши.
        </p>
        <ul>
          {Object.values(citySources).map(({ title, url, description }) => (
            <li key={url}>
              <a href={url}>{title}</a> — {description}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
