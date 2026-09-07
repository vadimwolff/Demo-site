import { useState } from 'react';
import { BOOKING_HREF } from '../data/company';
import { formatPrice, services } from '../data/services';
import { useReveal } from '../hooks/useReveal';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';
import './Services.css';

export function Services() {
  const [activeId, setActiveId] = useState(services[0].id);
  const listRef = useReveal<HTMLUListElement>();

  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Услуги"
          titleId="services-title"
          title="Три направления работы"
          note="Стоимость трёх основных услуг — по данным карточки компании."
        />

        <div className="services">
          {/* Desktop preview: mirrors the hovered or focused row. */}
          <div className="services__media" aria-hidden="true">
            {services.map((service) => (
              <img
                key={service.id}
                className={`services__media-image${service.id === activeId ? ' is-active' : ''}`}
                src={service.image}
                width={1200}
                height={1500}
                alt=""
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>

          <ul className="services__list reveal" ref={listRef}>
            {services.map((service, index) => (
              <li
                key={service.id}
                className={`service${service.id === activeId ? ' is-active' : ''}`}
                onMouseEnter={() => setActiveId(service.id)}
                onFocus={() => setActiveId(service.id)}
              >
                <img
                  className="service__thumb"
                  src={service.image}
                  width={1200}
                  height={1500}
                  alt={service.imageAlt}
                  loading="lazy"
                  decoding="async"
                />

                <div className="service__body">
                  <p className="service__index">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="service__title">{service.title}</h3>
                  <p className="service__summary">{service.summary}</p>
                </div>

                <div className="service__aside">
                  <p className="service__price">{formatPrice(service.price)}</p>
                  <Button
                    href={BOOKING_HREF}
                    variant="ghost"
                    className="service__cta"
                    aria-label={`Записаться: ${service.title}`}
                  >
                    Записаться
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
