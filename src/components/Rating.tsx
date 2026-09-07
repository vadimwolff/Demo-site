import { company } from '../data/company';
import './Rating.css';

type Props = {
  size?: 'md' | 'lg';
};

/** Rating display used in both the studio block and the reviews block. */
export function Rating({ size = 'md' }: Props) {
  const value = company.rating;
  const max = 5;
  const formatted = value.toLocaleString('ru-RU');

  return (
    <div className={`rating rating--${size}`}>
      <p className="rating__value">
        <span className="rating__number">{formatted}</span>
        <span className="rating__max">/ {max}</span>
      </p>
      <div
        className="rating__meter"
        role="img"
        aria-label={`Рейтинг ${formatted} из ${max} по ${company.ratingCount} оценкам`}
      >
        <span className="rating__meter-fill" style={{ inlineSize: `${(value / max) * 100}%` }} />
      </div>
      <p className="rating__count">{company.ratingCount} оценок</p>
    </div>
  );
}
