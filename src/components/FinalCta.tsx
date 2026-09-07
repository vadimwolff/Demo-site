import { BOOKING_HREF } from '../data/company';
import { useReveal } from '../hooks/useReveal';
import { Button } from './Button';
import './FinalCta.css';

export function FinalCta() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section final-cta" aria-labelledby="final-cta-title">
      <div className="shell final-cta__inner reveal" ref={ref}>
        <h2 className="final-cta__title" id="final-cta-title">
          Готовы привести автомобиль в идеальное состояние?
        </h2>
        <Button href={BOOKING_HREF} size="lg" className="final-cta__button">
          Записаться
        </Button>
      </div>
    </section>
  );
}
