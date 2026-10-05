import andersengrad from '../assets/andersengrad.webp';
import cathedral from '../assets/cathedral.webp';
import cityHall from '../assets/city-hall.webp';
import leningradskaya from '../assets/leningradskaya.webp';
import lipovoBeach from '../assets/lipovo-beach.webp';

export type CityPhoto = {
  src: string;
  title: string;
  alt: string;
  author: string;
  year: string;
  source: string;
  license: string;
  licenseUrl: string;
  width: number;
  height: number;
};

const cc0 = {
  license: 'CC0',
  licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
};

export const cityPhotos = {
  beach: {
    src: lipovoBeach,
    title: 'Побережье в Липово',
    alt: 'Площадка с качелями, сосны и песчаный берег Финского залива в Липово',
    author: 'AlexChp',
    year: '2023',
    source: 'https://commons.wikimedia.org/wiki/File:LipovoBeach_SosnovyBor.jpg',
    width: 1600,
    height: 757,
    ...cc0,
  },
  andersengrad: {
    src: andersengrad,
    title: 'Андерсенград',
    alt: 'Кирпичные башни и арки сказочного городка Андерсенград среди деревьев',
    author: 'Людмила Цупко',
    year: '2022',
    source: 'https://commons.wikimedia.org/wiki/File:Andersengrad_view.jpg',
    width: 900,
    height: 544,
    ...cc0,
  },
  cathedral: {
    src: cathedral,
    title: 'Собор «Неопалимая Купина»',
    alt: 'Собор иконы Божией Матери «Неопалимая Купина» с золотым куполом зимой',
    author: 'Автор не указан',
    year: '2020',
    source: 'https://commons.wikimedia.org/wiki/File:Hram_neopalimaya_kupina_sbor.jpg',
    width: 804,
    height: 604,
    ...cc0,
  },
  cityHall: {
    src: cityHall,
    title: 'Здание городской администрации',
    alt: 'Краснокирпичное здание администрации Соснового Бора со стеклянными башнями',
    author: 'demonzak',
    year: '2011',
    source: 'https://commons.wikimedia.org/wiki/File:Sosnovy_Bor,_mayor_office.jpg',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    width: 1600,
    height: 1064,
  },
  street: {
    src: leningradskaya,
    title: 'Ленинградская улица',
    alt: 'Жилые дома на Ленинградской улице, газон с валунами и здание администрации вдали',
    author: 'Автор не указан',
    year: '2017',
    source: 'https://commons.wikimedia.org/wiki/File:SosnovyBor_LeningradskayaStreetView.jpg',
    width: 800,
    height: 530,
    ...cc0,
  },
} satisfies Record<string, CityPhoto>;
