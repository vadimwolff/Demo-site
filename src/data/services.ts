import ceramicImage from '../assets/images/service-ceramic.svg';
import interiorImage from '../assets/images/service-interior.svg';
import ppfImage from '../assets/images/service-ppf.svg';

export type Service = {
  id: string;
  title: string;
  price: number;
  /** Neutral description of what the work involves — no promises, no invented facts. */
  summary: string;
  image: string;
  imageAlt: string;
};

const priceFormatter = new Intl.NumberFormat('ru-RU');

export const formatPrice = (value: number) => `${priceFormatter.format(value)} ₽`;

/** Prices confirmed by the company card. Nothing else is added. */
export const services: Service[] = [
  {
    id: 'ceramic',
    title: 'Керамика автомобиля',
    price: 25000,
    summary:
      'Защитное керамическое покрытие кузова. Результат определяется подготовкой: мойкой, обезжириванием и состоянием лака перед нанесением.',
    image: ceramicImage,
    imageAlt: 'Демонстрационное изображение: блик студийного света на кузове после керамического покрытия',
  },
  {
    id: 'interior',
    title: 'Химчистка салона',
    price: 16000,
    summary:
      'Глубокая очистка салона. Составы и режим сушки подбираются под материалы: ткань, кожа, алькантара и пластик требуют разного обращения.',
    image: interiorImage,
    imageAlt: 'Демонстрационное изображение: приглушённый свет на поверхности салона автомобиля',
  },
  {
    id: 'ppf',
    title: 'Оклейка бронеплёнкой',
    price: 65000,
    summary:
      'Защита лакокрасочного покрытия полиуретановой плёнкой. Ключевое здесь — раскрой, подворот кромок и работа со сложной геометрией деталей.',
    image: ppfImage,
    imageAlt: 'Демонстрационное изображение: кромка кузовной детали под плёнкой в студийном свете',
  },
];
