import type { CityPhoto as CityPhotoData } from '../model/photos';

import styles from './CityPhoto.module.css';

type CityPhotoProps = {
  photo: CityPhotoData;
  priority?: boolean;
};

export function CityPhoto({ photo, priority = false }: CityPhotoProps) {
  return (
    <figure className={styles.figure}>
      <img
        alt={photo.alt}
        className={styles.image}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        height={photo.height}
        loading={priority ? 'eager' : 'lazy'}
        src={photo.src}
        width={photo.width}
      />
      <figcaption className={styles.caption}>
        <span className={styles.title}>{photo.title}</span>
        <span>
          {photo.year} · {photo.author} · <a href={photo.licenseUrl}>{photo.license}</a>
          {' · '}
          <a href={photo.source}>Wikimedia Commons</a>
        </span>
      </figcaption>
    </figure>
  );
}
