import { useMemo, useState, type CSSProperties } from 'react';
import { workCategories, works, type WorkCategoryId } from '../data/works';
import { useReveal } from '../hooks/useReveal';
import { Lightbox } from './Lightbox';
import { SectionHeading } from './SectionHeading';
import './Works.css';

export function Works() {
  const [category, setCategory] = useState<WorkCategoryId>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const gridRef = useReveal<HTMLUListElement>();

  const visible = useMemo(
    () => (category === 'all' ? works : works.filter((work) => work.category === category)),
    [category],
  );

  const changeCategory = (next: WorkCategoryId) => {
    setCategory(next);
    setOpenIndex(null);
  };

  return (
    <section className="section" id="works" aria-labelledby="works-title">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Работы"
          titleId="works-title"
          title="Галерея"
          note="Изображения ниже — демонстрационные заглушки для показа макета, а не реальные работы студии. Они заменяются фотографиями студии перед публикацией."
          aside={
            <div className="works__filters" role="group" aria-label="Фильтр работ по направлению">
              {workCategories.map((item) => (
                <button
                  key={item.id}
                  className={`works__filter${item.id === category ? ' is-active' : ''}`}
                  aria-pressed={item.id === category}
                  onClick={() => changeCategory(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          }
        />

        <ul className={`works__grid${category === 'all' ? '' : ' works__grid--uniform'} reveal`} ref={gridRef}>
          {visible.map((work, index) => (
            <li
              key={work.id}
              className="work"
              style={{ '--cols': work.cols, '--ratio': work.ratio } as CSSProperties}
            >
              <button
                className="work__button"
                aria-label={`Открыть изображение: ${work.title}`}
                onClick={() => setOpenIndex(index)}
              >
                <span className="work__frame">
                  <img
                    className="work__image"
                    src={work.src}
                    width={work.width}
                    height={work.height}
                    alt={work.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="work__caption">
                  <span className="work__title">{work.title}</span>
                  <span className="work__open" aria-hidden="true">
                    Открыть
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox items={visible} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
    </section>
  );
}
