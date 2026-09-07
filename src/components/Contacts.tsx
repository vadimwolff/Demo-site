import { company, contactChannels, contactDetails } from '../data/company';
import { useReveal } from '../hooks/useReveal';
import { SectionHeading } from './SectionHeading';
import './Contacts.css';

export function Contacts() {
  const ref = useReveal<HTMLDivElement>();
  const year = new Date().getFullYear();

  return (
    <footer className="section contacts" id="contacts" aria-labelledby="contacts-title">
      <div className="shell">
        <SectionHeading
          index="07"
          eyebrow="Контакты"
          titleId="contacts-title"
          title="Записаться в студию"
          note="Контактные данные подставляются перед публикацией — ниже отмечены места, куда они встанут."
        />

        <div className="contacts__grid reveal" ref={ref}>
          <ul className="contacts__channels">
            {contactChannels.map((channel) => (
              <li className="channel" key={channel.id}>
                <p className="channel__label">{channel.label}</p>
                <p className="slot channel__value">{channel.value}</p>
                <p className="channel__note">{channel.note}</p>
              </li>
            ))}
          </ul>

          <dl className="contacts__details">
            {contactDetails.map((detail) => (
              <div className="detail" key={detail.id}>
                <dt className="detail__label">{detail.label}</dt>
                <dd className="slot detail__value">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="contacts__foot">
          <p className="contacts__brand">{company.name}</p>
          <p className="contacts__legal">
            © {year} · Демонстрационная версия сайта. Изображения — заглушки, контактные данные не заполнены.
          </p>
        </div>
      </div>
    </footer>
  );
}
