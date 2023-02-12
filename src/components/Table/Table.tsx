import { RootState } from '../../store';

const HEADING = ['№', 'Наименование', 'Описание товара', 'Цена', 'Количество', 'Сумма'];

interface IProps {
  title: string;
  data: RootState['cinema'] | RootState['stereo'];
}

export const Table = (props: IProps) => {
  const { title, data } = props;

  const totalPrice = data.reduce((accum, { price, value }) => accum + price * (value || 1), 0);

  return (
    <table className="pure-table">
      <caption>{title}</caption>
      <thead>
        <tr>
          {HEADING.map((data, index) => (
            <td key={index}>{data}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ title, category, price, value = 1 }, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{price.toLocaleString('ru-RU')} руб.</td>
            <td>{value} шт.</td>
            <td>{(price * value).toLocaleString('ru-RU')} руб.</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={HEADING.length}>Итого: {totalPrice.toLocaleString('ru-RU')} руб.</td>
        </tr>
      </tfoot>
    </table>
  );
};
