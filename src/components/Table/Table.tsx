import { RootState } from '../../store';

const HEADING = ['№', 'Наименование', 'Описание товара', 'Цена'];

interface IProps {
  title: string;
  data: RootState['cinema'] | RootState['stereo'];
}

export const Table = (props: IProps) => {
  const { title, data } = props;

  const totalPrice = data.reduce((accum, { price }) => accum + price, 0);
  const dataSorted = [...data].sort((a, b) => Number(a.complete) - Number(b.complete));

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
        {dataSorted.map(({ title, category, price, complete }, index) => (
          <tr className={complete ? 'done' : ''} key={index}>
            <td>{index + 1}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{price.toLocaleString('ru-RU')}&nbsp;руб.</td>
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
