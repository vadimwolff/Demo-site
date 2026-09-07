/**
 * Everything factual about the studio lives here.
 *
 * Only data confirmed by the company card is filled in. Anything unknown is a
 * PLACEHOLDER constant so it is obvious what has to be replaced before launch —
 * nothing on the site is invented.
 */

export const company = {
  name: 'Reality Detailing Studio',
  shortName: 'Reality',
  /** Confirmed: детейлинг, оклейка автомобилей, автоателье. */
  kind: 'Детейлинг · Оклейка автомобилей · Автоателье',
  rating: 4.6,
  ratingCount: 37,
} as const;

export type ContactChannel = {
  id: string;
  label: string;
  /** Literal placeholder token — replaced with the real value before launch. */
  value: string;
  note: string;
};

export const contactChannels: ContactChannel[] = [
  { id: 'phone', label: 'Телефон', value: 'PHONE_PLACEHOLDER', note: 'Звонок и запись' },
  { id: 'whatsapp', label: 'WhatsApp', value: 'WHATSAPP_PLACEHOLDER', note: 'Переписка и фото авто' },
  { id: 'vk', label: 'VK', value: 'VK_PLACEHOLDER', note: 'Работы и новости студии' },
];

/** Shown as empty slots: the values are not known, so nothing is displayed as fact. */
export const contactDetails = [
  { id: 'address', label: 'Адрес', value: 'ADDRESS_PLACEHOLDER' },
  { id: 'hours', label: 'Режим работы', value: 'HOURS_PLACEHOLDER' },
];

export const navLinks = [
  { href: '#works', label: 'Работы' },
  { href: '#services', label: 'Услуги' },
  { href: '#studio', label: 'О студии' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
] as const;

/** Single booking target, so every CTA on the page behaves identically. */
export const BOOKING_HREF = '#contacts';
