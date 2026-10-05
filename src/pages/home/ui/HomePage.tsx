import { Link } from 'react-router';

import { CityPhoto, cityPhotos, citySources, cityTimeline } from '@entities/city';

import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <>
      <section aria-labelledby="home-title" className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Ленинградская область · Финский залив</p>
          <h1 className={styles.title} id="home-title">
            Сосновый Бор.
            <br />
            Между соснами и заливом.
          </h1>
          <p className={styles.lead}>
            Город, где рядом с жилыми кварталами остаётся лес, за поворотом начинается сказка, а
            прогулка приводит к воде. Познакомимся с местом, которое я называю родным.
          </p>
          <div className={styles.actions}>
            <Link className={styles.button} to="/about">
              История города →
            </Link>
            <Link className={styles.secondary} to="/places">
              Выбрать прогулку
            </Link>
          </div>
        </div>
        <CityPhoto photo={cityPhotos.beach} priority />
      </section>

      <section aria-labelledby="first-look-title" className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Первое знакомство</p>
          <h2 id="first-look-title">Молодой город с длинной историей</h2>
          <p>
            Рабочий посёлок появился в 1958 году, а 19 апреля 1973 года стал городом. Но история
            местных поселений началась задолго до этого. В Сосновом Бору встречаются память старых
            деревень, история атомной энергетики и архитектура, созданная для повседневной жизни.
          </p>
          <a href={citySources.archive.url}>О датах — на официальном сайте города</a>
        </div>
        <dl className={styles.timeline}>
          {cityTimeline.map(({ year, title, description }) => (
            <div key={year}>
              <dt>
                <span>{year}</span>
                {title}
              </dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="places-title" className={styles.section}>
        <div className={styles['section-heading']}>
          <div>
            <p className={styles.eyebrow}>Детали, которые запоминаются</p>
            <h2 id="places-title">У каждого места свой характер</h2>
          </div>
          <Link to="/places">Места и прогулки →</Link>
        </div>
        <div className={styles.cards}>
          <article>
            <CityPhoto photo={cityPhotos.andersengrad} />
            <h3>Немного сказки</h3>
            <p>
              Башни, арки и красные крыши Андерсенграда. Место, где хочется замедлиться и
              рассмотреть каждую деталь.
            </p>
          </article>
          <article>
            <CityPhoto photo={cityPhotos.street} />
            <h3>Повседневный город</h3>
            <p>
              Дома, зелёные пространства и привычные улицы. Они рассказывают о городе не меньше, чем
              его известные символы.
            </p>
          </article>
          <article>
            <CityPhoto photo={cityPhotos.cathedral} />
            <h3>Другой силуэт</h3>
            <p>
              Округлый фасад и золотой купол «Неопалимой Купины». Ещё один повод посмотреть на
              знакомый город внимательнее.
            </p>
          </article>
        </div>
      </section>

      <aside className={styles.note}>
        <p className={styles.eyebrow}>О проекте</p>
        <h2>Мой Сосновый Бор</h2>
        <p>
          Этот городской гид — учебный проект о моём родном городе. Исторические сведения
          сопровождаются источниками, а у фотографий указаны авторы и лицензии. Работы по верстке
          собраны в отдельном разделе.
        </p>
        <Link to="/practice">Открыть практикум →</Link>
      </aside>
    </>
  );
}
