import { configureStore, createSlice } from '@reduxjs/toolkit';

interface IState {
  [title: string]: Array<{
    title: string;
    category: string;
    price: number;
    complete: boolean;
  }>;
}

const initialState: IState = {
  'Звук, который отдам родителям': [
    {
      title: 'NAD T758 V3i',
      category: 'AV-ресивер',
      price: 139900,
      complete: true,
    },
    {
      title: 'NAD C245BEE',
      category: 'Усилитель мощности (4 канала)',
      price: 50000,
      complete: false,
    },
    {
      title: 'Heco Aurora 1000 Ivory White',
      category: 'Напольная акустика (Фронтальные)',
      price: 94325,
      complete: true,
    },
    {
      title: 'Heco Aurora Center 30 Ivory White',
      category: 'Акустика центрального канала',
      price: 19325,
      complete: true,
    },
    {
      title: 'Heco Aurora 300 Ivory White',
      category: 'Полочная акустика (Боковые)',
      price: 39325,
      complete: true,
    },
    {
      title: 'Heco Aurora 200 Ivory White',
      category: 'Полочная акустика (Тыловые)',
      price: 33990,
      complete: false,
    },
    {
      title: 'Heco AM 200 Dolby Atmos piano white',
      category: 'Dolby Atmos акустика (Верхние фронтальные)',
      price: 39990,
      complete: false,
    },
    {
      title: 'Heco AM 200 Dolby Atmos piano white',
      category: 'Dolby Atmos акустика (Верхние тыловые)',
      price: 39990,
      complete: false,
    },
    {
      title: 'PowerGrip YG-2 black',
      category: 'Сетевой фильтр',
      price: 73900,
      complete: false,
    },
    {
      title: 'DAXX S30-я Ultra-Flex PVC',
      category: 'Акустический кабель в нарезку (на перемычки)',
      price: 672,
      complete: false,
    },
    {
      title: 'DAXX S700 12AWG-3.3 мм2',
      category: 'Акустический кабель в нарезку (2 x 2.5 метров, на фронтальные)',
      price: 2 * 748 * 2.5,
      complete: false,
    },
    {
      title: 'DAXX S700 12AWG-3.3 мм2',
      category: 'Акустический кабель в нарезку (1 метр, на центральный)',
      price: 748,
      complete: false,
    },
    {
      title: 'DAXX S700 12AWG-3.3 мм2',
      category: 'Акустический кабель в нарезку (2 x 7.5 метров, на боковые)',
      price: 2 * 748 * 7.5,
      complete: false,
    },
    {
      title: 'DAXX S700 12AWG-3.3 мм2',
      category: 'Акустический кабель в нарезку (2 x 15 метров, на тыловые)',
      price: 2 * 748 * 15,
      complete: false,
    },
    {
      title: 'DAXX S700 12AWG-3.3 мм2',
      category: 'Акустический кабель в нарезку (2 x 2.5 метров, на DA фронт)',
      price: 2 * 748 * 2.5,
      complete: false,
    },
    {
      title: 'DAXX S700 12AWG-3.3 мм2',
      category: 'Акустический кабель в нарезку (2 x 15 метров, на DA тыл)',
      price: 2 * 748 * 15,
      complete: false,
    },
    {
      title: 'Tchernov Cable Spade Lug Original G',
      category: 'Разъемы типа лопатка (8 шт на перемычки)',
      price: 8 * 460,
      complete: false,
    },
    {
      title: 'Tchernov Cable Banana Plug Original',
      category: 'Разъемы типа банан (8 шт на перемычки)',
      price: 8 * 208,
      complete: false,
    },
    {
      title: 'Tchernov Cable Spade Lug Original G',
      category: 'Разъемы типа лопатка (22 шт на кабели)',
      price: 22 * 460,
      complete: false,
    },
    {
      title: 'Tchernov Cable Banana Plug Original',
      category: 'Разъемы типа банан (22 шт на кабели)',
      price: 22 * 208,
      complete: false,
    },
    {
      title: 'DAXX Z184 9mm на два по 3mm',
      category: 'Кембрик для разделки кабеля (22 шт на все кабели)',
      price: 22 * 90,
      complete: false,
    },
  ],
  'Звук в кинозале': [
    {
      title: 'NAD M17 V2i',
      category: 'AV - процессор',
      price: 599990,
      complete: false,
    },
    {
      title: 'NAD M28',
      category: 'Усилитель мощности (7 каналов)',
      price: 449990,
      complete: false,
    },
    {
      title: 'NAD M23',
      category: 'Усилитель мощности (2 канала)',
      price: 299990,
      complete: false,
    },
    {
      title: 'NAD M23',
      category: 'Усилитель мощности (2 канала)',
      price: 299990,
      complete: false,
    },
    {
      title: 'Canton Vento 100',
      category: 'Напольная акустика (Фронтальные)',
      price: 650000,
      complete: false,
    },
    {
      title: 'Canton Vento 50',
      category: 'Акустика центрального канала',
      price: 160000,
      complete: false,
    },
    {
      title: 'Canton Vento 80',
      category: 'Напольная акустика (Боковые)',
      price: 450000,
      complete: false,
    },
    {
      title: 'Canton Vento 30',
      category: 'Полочная акустика (Тыловые)',
      price: 200000,
      complete: false,
    },
    {
      title: 'Canton LS 860',
      category: 'Стойки для полочной акустики (Для тыловых)',
      price: 55000,
      complete: false,
    },
    {
      title: 'Canton AR 8',
      category: 'Dolby Atmos акустика (Верхние фронтальные)',
      price: 165990,
      complete: false,
    },
    {
      title: 'Canton AR 8',
      category: 'Dolby Atmos акустика (Верхние тыловые)',
      price: 165990,
      complete: false,
    },
    {
      title: 'PowerGrip YG-3',
      category: 'Сетевой фильтр',
      price: 189900,
      complete: false,
    },
    {
      title: 'Wire World Stratus 7 Power Cord',
      category: 'Кабель питания (1 метр, для M17)',
      price: 11640,
      complete: false,
    },
    {
      title: 'Wire World Stratus 7 Power Cord',
      category: 'Кабель питания (1 метр, для M28)',
      price: 11640,
      complete: false,
    },
    {
      title: 'Wire World Stratus 7 Power Cord',
      category: 'Кабель питания (1 метр, для M23)',
      price: 11640,
      complete: false,
    },
    {
      title: 'Wire World Stratus 7 Power Cord',
      category: 'Кабель питания (1 метр, для M23)',
      price: 11640,
      complete: false,
    },
    {
      title: 'Wire World Mini-Stratus 7 Power Cord',
      category: 'Кабель питания (2 метра, для сабвуфера)',
      price: 9506,
      complete: false,
    },
    {
      title: 'Wire World Oasis 8 Interconnect',
      category: 'Межблочный аудио кабель (7 шт по 0.5 метраа, для M28)',
      price: 7 * 13677,
      complete: false,
    },
    {
      title: 'Wire World Oasis 8 Interconnect',
      category: 'Межблочный аудио кабель (2 шт по 0.5 метра, для M23)',
      price: 2 * 13677,
      complete: false,
    },
    {
      title: 'Wire World Oasis 8 Interconnect',
      category: 'Межблочный аудио кабель (2 шт по 0.5 метра, для M23)',
      price: 2 * 13677,
      complete: false,
    },
    {
      title: 'Wire World Oasis 8 Subwoofer Interconnect',
      category: 'Сабвуферный аудио кабель (3 метра)',
      price: 13289,
      complete: false,
    },
    {
      title: 'Wire World Chroma 8 Ethernet Cable 1.0м',
      category: 'Ethernet кабель',
      price: 10573,
      complete: false,
    },
    {
      title: 'Wire World Sphere HDMI 2.0 Cable 2.0m',
      category: 'HDMI кабель (2 метра, для телевизора)',
      price: 8342,
      complete: false,
    },
    {
      title: 'Wire World Sphere HDMI 2.0 Cable 0.6m',
      category: 'HDMI кабель (0.6 метра, для модуля с Яндекс ТВ)',
      price: 7566,
      complete: false,
    },
    {
      title: 'Wire World Pulse 3.5mm to 3.5mm 2.0m',
      category: 'Аудио кабель Jack 3.5 - Jack 3.5 (2 метра, для Яндекс Станции)',
      price: 4656,
      complete: false,
    },
    {
      title: 'Wire World Oasis 8 Speaker Cable',
      category: 'Акустический кабель в нарезку (2 x 2.5 метров, на фронтальные)',
      price: 2 * 3166 * 2.5,
      complete: false,
    },
    {
      title: 'Wire World Oasis 8 Speaker Cable',
      category: 'Акустический кабель в нарезку (1 метр, на центральный)',
      price: 3166,
      complete: false,
    },
    {
      title: 'Wire World Oasis 8 Speaker Cable',
      category: 'Акустический кабель в нарезку (2 x 7.5 метров, на боковые)',
      price: 2 * 3166 * 7.5,
      complete: false,
    },
    {
      title: 'Wire World Oasis 8 Speaker Cable',
      category: 'Акустический кабель в нарезку (2 x 15 метров, на тыловые)',
      price: 2 * 3166 * 15,
      complete: false,
    },
    {
      title: 'Wire World Oasis 8 Speaker Cable',
      category: 'Акустический кабель в нарезку (2 x 2.5 метров, на DA фронт)',
      price: 2 * 3166 * 2.5,
      complete: false,
    },
    {
      title: 'Wire World Oasis 8 Speaker Cable',
      category: 'Акустический кабель в нарезку (2 x 15 метров, на DA тыл)',
      price: 2 * 3166 * 15,
      complete: false,
    },
    {
      title: 'Wire World Uni-Term Silver Spades',
      category: 'Разъём для акустического кабеля (Комплект из 8 штук)',
      price: 10088,
      complete: false,
    },
    {
      title: 'Wire World Uni-Term Silver Spades',
      category: 'Разъём для акустического кабеля (Комплект из 8 штук)',
      price: 10088,
      complete: false,
    },
    {
      title: 'Wire World Uni-Term Silver Spades',
      category: 'Разъём для акустического кабеля (Комплект из 8 штук)',
      price: 10088,
      complete: false,
    },
    {
      title: 'Wire World Uni-Term Silver Spades',
      category: 'Разъём для акустического кабеля (Комплект из 8 штук)',
      price: 10088,
      complete: false,
    },
    {
      title: 'Wire World Uni-Term Silver Bananas',
      category: 'Разъём для акустического кабеля (Комплект из 8 штук)',
      price: 10088,
      complete: false,
    },
    {
      title: 'Wire World Uni-Term Silver Bananas',
      category: 'Разъём для акустического кабеля (Комплект из 8 штук)',
      price: 10088,
      complete: false,
    },
    {
      title: 'Wire World Uni-Term Silver Bananas',
      category: 'Разъём для акустического кабеля (Комплект из 8 штук)',
      price: 10088,
      complete: false,
    },
  ],

  'Звук в кабинете': [
    {
      title: 'NAD M33',
      category: 'Интегральный усилитель',
      price: 449990,
      complete: false,
    },
    {
      title: 'Canton Vento 90',
      category: 'Напольная акустика',
      price: 550000,
      complete: false,
    },
    {
      title: 'PowerGrip YG-3',
      category: 'Сетевой фильтр',
      price: 189900,
      complete: false,
    },
    {
      title: 'Wire World Stratus 7 Power Cord',
      category: 'Кабель питания (1 метр)',
      price: 11640,
      complete: false,
    },
    {
      title: 'Wire World Chroma 8 Ethernet Cable 1.0м',
      category: 'Ethernet кабель',
      price: 10573,
      complete: false,
    },
    {
      title: 'Wire World Pulse 3.5mm to 3.5mm',
      category: 'Аудио кабель Jack 3.5 - Jack 3.5 (2 метра, для Яндекс Станции)',
      price: 4656,
      complete: false,
    },
    {
      title: 'Wire World Oasis 8 Speaker Cable',
      category: 'Акустический кабель в нарезку (2 x 2.5 метров)',
      price: 2 * 3166 * 2.5,
      complete: false,
    },
    {
      title: 'Wire World Uni-Term Silver Spades',
      category: 'Разъём для акустического кабеля (Комплект из 8 штук)',
      price: 10088,
      complete: false,
    },
    {
      title: 'Wire World Uni-Term Silver Bananas',
      category: 'Разъём для акустического кабеля (Комплект из 8 штук)',
      price: 10088,
      complete: false,
    },
  ],
};

const slice = createSlice({
  name: 'dream-music',
  initialState,
  reducers: {},
});

export const actions = slice.actions;
export const store = configureStore({ reducer: slice.reducer });
export type RootState = ReturnType<typeof store.getState>;
