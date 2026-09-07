import heroImage from '../assets/images/hero.svg';
import { BOOKING_HREF } from '../data/company';
import { services } from '../data/services';
import { useReveal } from '../hooks/useReveal';
import { Button } from './Button';
import './Hero.css';

export function Hero() {
  const contentRef = useReveal<HTMLDivElement>();
  const mediaRef = useReveal<HTMLDivElement>();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__intro shell reveal" ref={contentRef}>
        <p className="eyebrow hero__eyebrow">
          <span className="eyebrow__index">01</span>
          <span>Детейлинг-студия</span>
        </p>

        <h1 className="hero__title" id="hero-title">
          Состояние автомобиля читается раньше, чем марка
        </h1>

        <div className="hero__row">
          <p className="lead hero__lead">
            Reality Detailing Studio — керамические покрытия, оклейка защитными плёнками и восстановление салона.
            Работаем с кузовом и интерьером как с единой поверхностью.
          </p>
          <div className="hero__actions">
            <Button href={BOOKING_HREF} size="lg">
              Записаться
            </Button>
            <Button href="#works" size="lg" variant="ghost">
              Смотреть работы
            </Button>
          </div>
        </div>
      </div>

      <div className="hero__media reveal" ref={mediaRef}>
        <img
          className="hero__image"
          src={heroImage}
          width={2400}
          height={1350}
          alt="Демонстрационное изображение: отражение студийного света на кузове автомобиля"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <ul className="hero__meta shell">
        {services.map((service) => (
          <li key={service.id}>{service.title}</li>
        ))}
      </ul>
    </section>
  );
}
