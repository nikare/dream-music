import { configureStore, createSlice } from '@reduxjs/toolkit';

interface IState {
  [title: string]: Array<{
    title: string;
    category: string;
    price: number;
    value?: number;
  }>;
}

const initialState: IState = {
  'Кинозал мечты': [
    {
      title: 'NAD M17 V2i',
      category: 'AV - процессор',
      price: 599990,
    },
    {
      title: 'NAD M28',
      category: 'Усилитель мощности (7 каналов)',
      price: 389900,
      value: 2,
    },
    {
      title: 'JBL HDI 3800 Grey Oak',
      category: 'Напольная акустика',
      price: 439990,
    },
    {
      title: 'JBL HDI 3600 Grey Oak',
      category: 'Напольная акустика',
      price: 329990,
    },
    {
      title: 'JBL HDI 1200P Grey Oak',
      category: 'Сабвуфер',
      price: 225000,
    },
    {
      title: 'JBL HDI 4500 Grey Oak',
      category: 'Акустика центрального канала',
      price: 160000,
    },
    {
      title: 'JBL HDI 1600 Grey Oak',
      category: 'Полочная акустика',
      price: 149990,
    },
    {
      title: 'JBL HDI FS',
      category: 'Стойка под акустику',
      price: 50000,
      value: 2,
    },
    {
      title: 'PowerGrip YG-3',
      category: 'Сетевой фильтр',
      price: 189900,
      value: 1,
    },
  ],

  'Стерео мечты': [
    {
      title: 'NAD M33',
      category: 'Интегральный усилитель',
      price: 449990,
    },
    {
      title: 'JBL HDI 3800 Grey Oak',
      category: 'Напольная акустика',
      price: 439990,
    },
    {
      title: 'PowerGrip YG-2',
      category: 'Сетевой фильтр',
      price: 93900,
      value: 1,
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
