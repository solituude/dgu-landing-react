import {Reveal} from "../../components/Reveal/Reveal";
import s from './GallerySection.module.scss';

import img1 from '../../lib/render/image_2025-09-04_21-29-40.png';
import img2 from '../../lib/render/image_2025-09-04_21-30-04.png';
import img3 from '../../lib/render/image_2025-09-04_21-30-43.png';
import img4 from '../../lib/render/image_2025-09-04_21-31-12.png';
import img5 from '../../lib/render/image_2025-09-04_21-37-49.png';

const IMAGES: string[] = [img1, img2, img3, img4, img5];

export const GallerySection = () => {
  return (
    <section id="gallery" className={s.GallerySection}>
      <Reveal>
        <h2 className={s.GallerySection__H2}>Фотогалерея</h2>
      </Reveal>

      <div className={s.GallerySection__Scroller} role="region" aria-label="Горизонтальная галерея" tabIndex={0}>
        {IMAGES.map((src, idx) => (
          <img
            key={src}
            className={s.GallerySection__Image}
            src={src}
            alt={`Рендер контроллера ${idx + 1}`}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}


