import { useStore } from './hooks';
import { Table } from './components';

export const App = () => {
  const store = useStore();

  const totalPrice = Object.values(store)
    .reduce((arr, current) => arr.concat(current), [])
    .reduce((accum, { price }) => accum + price, 0);

  return (
    <div className="app">
      {Object.entries(store).map(([title, data], index) => (
        <Table key={index} title={title} data={data} />
      ))}
      <h2>Итого: {totalPrice.toLocaleString('ru-RU')} руб.</h2>
    </div>
  );
};
