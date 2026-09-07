import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';
import './SectionHeading.css';

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  /** Optional supporting line, kept short on purpose. */
  note?: ReactNode;
  aside?: ReactNode;
};

export function SectionHeading({ index, eyebrow, title, titleId, note, aside }: Props) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div className="section-heading reveal" ref={ref}>
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span>
        <span>{eyebrow}</span>
      </p>
      <div className="section-heading__main">
        <h2 className="section-heading__title" id={titleId}>
          {title}
        </h2>
        {aside ? <div className="section-heading__aside">{aside}</div> : null}
      </div>
      {note ? <p className="lead section-heading__note">{note}</p> : null}
    </div>
  );
}
