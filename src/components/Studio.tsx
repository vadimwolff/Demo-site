import { company } from '../data/company';
import { useReveal } from '../hooks/useReveal';
import { Rating } from './Rating';
import './Studio.css';

export function Studio() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="studio" aria-labelledby="studio-title">
      <div className="shell studio reveal" ref={ref}>
        <p className="eyebrow studio__eyebrow">
          <span className="eyebrow__index">02</span>
          <span>О студии</span>
        </p>

        <div className="studio__rating">
          <Rating size="lg" />
        </div>

        <div className="studio__text">
          <h2 className="studio__title" id="studio-title">
            {company.name} — детейлинг, оклейка автомобилей и автоателье
          </h2>
          <p className="lead">
            В работе три основных направления: керамическое покрытие кузова, оклейка бронеплёнкой и химчистка салона.
            Кузов и салон рассматриваем вместе — состояние автомобиля складывается из обоих.
          </p>
          <p className="studio__note">Источник оценки — карточка компании.</p>
        </div>
      </div>
    </section>
  );
}
