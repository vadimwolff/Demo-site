import work01 from '../assets/images/work-01.svg';
import work02 from '../assets/images/work-02.svg';
import work03 from '../assets/images/work-03.svg';
import work04 from '../assets/images/work-04.svg';
import work05 from '../assets/images/work-05.svg';
import work06 from '../assets/images/work-06.svg';
import work07 from '../assets/images/work-07.svg';
import work08 from '../assets/images/work-08.svg';
import work09 from '../assets/images/work-09.svg';

/** Categories mirror the three confirmed services — no extra services are implied. */
export const workCategories = [
  { id: 'all', label: 'Все' },
  { id: 'ceramic', label: 'Керамика' },
  { id: 'ppf', label: 'Оклейка' },
  { id: 'interior', label: 'Салон' },
] as const;

export type WorkCategoryId = (typeof workCategories)[number]['id'];

export type Work = {
  id: string;
  title: string;
  category: Exclude<WorkCategoryId, 'all'>;
  src: string;
  width: number;
  height: number;
  /** Footprint in the 6-column desktop grid. */
  cols: 2 | 3 | 4 | 6;
  /** Tile aspect ratio; chosen so each grid row closes flush. */
  ratio: string;
  alt: string;
};

/**
 * Placeholder gallery. Every image is an abstract studio composition marked
 * "DEMO" — replace the files in src/assets/images with real photographs and
 * update width/height to the real pixel dimensions.
 */
export const works: Work[] = [
  {
    id: 'w1',
    title: 'Керамическое покрытие',
    category: 'ceramic',
    src: work01,
    width: 1200,
    height: 1500,
    cols: 2,
    ratio: '4 / 5',
    alt: 'Демонстрационное изображение: отражение студийного света на кузове',
  },
  {
    id: 'w2',
    title: 'Оклейка бронеплёнкой',
    category: 'ppf',
    src: work02,
    width: 1600,
    height: 1067,
    cols: 4,
    ratio: '8 / 5',
    alt: 'Демонстрационное изображение: кромка кузовной детали под защитной плёнкой',
  },
  {
    id: 'w3',
    title: 'Химчистка салона',
    category: 'interior',
    src: work03,
    width: 1200,
    height: 1200,
    cols: 2,
    ratio: '1 / 1',
    alt: 'Демонстрационное изображение: мягкий свет на поверхности салона',
  },
  {
    id: 'w4',
    title: 'Керамическое покрытие',
    category: 'ceramic',
    src: work04,
    width: 1200,
    height: 1600,
    cols: 4,
    ratio: '2 / 1',
    alt: 'Демонстрационное изображение: вертикальный блик на защитном покрытии кузова',
  },
  {
    id: 'w5',
    title: 'Оклейка бронеплёнкой',
    category: 'ppf',
    src: work05,
    width: 1600,
    height: 1067,
    cols: 4,
    ratio: '4 / 3',
    alt: 'Демонстрационное изображение: линия кузова после оклейки плёнкой',
  },
  {
    id: 'w6',
    title: 'Химчистка салона',
    category: 'interior',
    src: work06,
    width: 1200,
    height: 1500,
    cols: 2,
    ratio: '2 / 3',
    alt: 'Демонстрационное изображение: приглушённый свет на материалах салона',
  },
  {
    id: 'w7',
    title: 'Керамическое покрытие',
    category: 'ceramic',
    src: work07,
    width: 1200,
    height: 1200,
    cols: 3,
    ratio: '3 / 2',
    alt: 'Демонстрационное изображение: глубина отражения на покрытом кузове',
  },
  {
    id: 'w8',
    title: 'Химчистка салона',
    category: 'interior',
    src: work08,
    width: 1200,
    height: 1600,
    cols: 3,
    ratio: '3 / 2',
    alt: 'Демонстрационное изображение: контраст света и тени в салоне автомобиля',
  },
  {
    id: 'w9',
    title: 'Оклейка бронеплёнкой',
    category: 'ppf',
    src: work09,
    width: 1800,
    height: 1013,
    cols: 6,
    ratio: '3 / 1',
    alt: 'Демонстрационное изображение: протяжённый световой блик на плёнке',
  },
];
