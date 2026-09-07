import { principles } from '../data/principles';
import { useReveal } from '../hooks/useReveal';
import { SectionHeading } from './SectionHeading';
import './Principles.css';

export function Principles() {
  const listRef = useReveal<HTMLOListElement>();

  return (
    <section className="section" id="approach" aria-labelledby="approach-title">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Почему Reality"
          titleId="approach-title"
          title="Что определяет результат"
        />

        <ol className="principles reveal" ref={listRef}>
          {principles.map((principle, index) => (
            <li className="principle" key={principle.id}>
              <p className="principle__index">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="principle__title">{principle.title}</h3>
              <p className="principle__body">{principle.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
