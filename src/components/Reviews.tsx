import { company } from '../data/company';
import { useReveal } from '../hooks/useReveal';
import { Rating } from './Rating';
import { SectionHeading } from './SectionHeading';
import './Reviews.css';

export function Reviews() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="reviews" aria-labelledby="reviews-title">
      <div className="shell">
        <SectionHeading index="06" eyebrow="Отзывы" titleId="reviews-title" title="Оценка студии" />

        <div className="reviews reveal" ref={ref}>
          <Rating />

          <div className="reviews__text">
            <p className="lead">
              {company.rating.toLocaleString('ru-RU')} из 5 по {company.ratingCount} оценкам в карточке компании.
              Отзывы клиентов мы не дублируем на сайте — их можно прочитать в первоисточнике.
            </p>
            <p className="reviews__slot">
              <span className="reviews__slot-label">Ссылка на карточку компании</span>
              <span className="slot">REVIEWS_LINK_PLACEHOLDER</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
