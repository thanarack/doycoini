/* eslint-disable react/jsx-key */
import classNames from 'classnames';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import { numberWithCommas } from '../../utils/formatter';
import { GetIcon } from '../../utils/icon';

const TableData = () => {
  const data = useMemo(
    () => [
      {
        ranking: '1',
        name: { value: 'Bitcoin', symbol: 'BTC' },
        changes24: { value: '1.39%', isUp: true },
        priceBinance: '29413.96',
        priceBitkub: '29413.96',
        priceUpbit: '29413.96',
        action: '/room-btc',
      },
      {
        ranking: '2',
        name: { value: 'Ethereum', symbol: 'ETH' },
        changes24: { value: '66.88%', isUp: false },
        priceBinance: '1975.55',
        priceBitkub: '1975.55',
        priceUpbit: '1975.55',
        action: '/room-eth',
      },
      {
        ranking: '3',
        name: { value: 'Tether', symbol: 'USDT' },
        changes24: { value: '0.02%', isUp: true },
        priceBinance: '32.14',
        priceBitkub: '32.14',
        priceUpbit: '32.14',
        action: '/room-usdt',
      },
      {
        ranking: '4',
        name: { value: 'USD Coin', symbol: 'USDC' },
        changes24: { value: '0.08%', isUp: true },
        priceBinance: '40.95',
        priceBitkub: '40.95',
        priceUpbit: '40.95',
        action: '/room-usdc',
      },
      {
        ranking: '5',
        name: { value: 'BNB', symbol: 'BNB' },
        changes24: { value: '1.69%', isUp: true },
        priceBinance: '9895.45',
        priceBitkub: '9895.45',
        priceUpbit: '9895.45',
        action: '/room-bnb',
      },
      {
        ranking: '6',
        name: { value: 'XRP', symbol: 'XRP' },
        changes24: { value: '2.20%', isUp: false },
        priceBinance: '63.41',
        priceBitkub: '63.41',
        priceUpbit: '63.41',
        action: '/room-xrp',
      },
      {
        ranking: '7',
        name: { value: 'DOGE', symbol: 'DOGE' },
        changes24: { value: '2.29%', isUp: false },
        priceBinance: '0.0865',
        priceBitkub: '0.0865',
        priceUpbit: '0.0865',
        action: '/room-doge',
      },
      {
        ranking: '8',
        name: { value: 'Binance', symbol: 'BUSD' },
        changes24: { value: '0.07%', isUp: false },
        priceBinance: '31.41',
        priceBitkub: '31.41',
        priceUpbit: '31.41',
        action: '/room-busd',
      },
      {
        ranking: '9',
        name: { value: 'Cardano', symbol: 'ADA' },
        changes24: { value: '2.20%', isUp: true },
        priceBinance: '63.41',
        priceBitkub: '63.41',
        priceUpbit: '63.41',
        action: '/room-ada',
      },
      {
        ranking: '10',
        name: { value: 'Shiba Inu', symbol: 'SHIB' },
        changes24: { value: '3.34%', isUp: false },
        priceBinance: '0.000011485',
        priceBitkub: '0.000011485',
        priceUpbit: '0.000011485',
        action: '/room-shib',
      },
      {
        ranking: '11',
        name: { value: 'Polygon', symbol: 'MATIC' },
        changes24: { value: '4.71%', isUp: false },
        priceBinance: '0.65',
        priceBitkub: '0.65',
        priceUpbit: '0.65',
        action: '/room-matic',
      },
    ],
    []
  );

  const formatOption = (options: any) => {
    const { title, position = 'text-left', formatNumber = false } = options;
    return {
      Header: () => <div className={position}>{title}</div>,
      Cell: ({ value }: any) => (
        <div className={position}>
          {formatNumber ? <span>฿{numberWithCommas(value)}</span> : value}
        </div>
      ),
    };
  };

  const columns: any = useMemo(
    () => [
      {
        accessor: 'ranking',
        width: 16,
        Header: () => <div className="text-center">#</div>,
        Cell: ({ value }: any) => {
          return <div className="text-center text-neutral-400">{value}</div>;
        },
      },
      {
        accessor: 'name',
        width: 60,
        Header: () => <div className="text-left">ชื่อเหรียญ</div>,
        Cell: ({ value }: any) => {
          const display = (
            <>
              <span>{value.value}</span>
              <span className="ml-1 text-neutral-400">({value.symbol})</span>
            </>
          );
          return <div className="text-left">{display}</div>;
        },
      },
      {
        accessor: 'changes24',
        width: 50,
        Header: () => <div className="text-right">24h %</div>,
        Cell: ({ value }: any) => {
          const isUp = value.isUp ? 'text-emerald-500' : 'text-rose-500';
          return (
            <div className={classNames(['text-right', isUp, 'changes24'])}>
              {value.isUp ? (
                <GetIcon mode="outline" name="trending-up" />
              ) : (
                <GetIcon mode="outline" name="trending-down" />
              )}
              {value.value}
            </div>
          );
        },
      },
      {
        accessor: 'priceBinance',
        width: 55,
        ...formatOption({
          title: '@Binance',
          position: 'text-right',
          formatNumber: true,
        }),
      },
      {
        accessor: 'priceBitkub',
        width: 55,
        ...formatOption({
          title: '@Bitkub',
          position: 'text-right',
          formatNumber: true,
        }),
      },
      {
        accessor: 'priceUpbit',
        width: 55,
        ...formatOption({
          title: '@Upbit',
          position: 'text-right',
          formatNumber: true,
        }),
      },
      {
        accessor: 'action',
        width: 24,
        Cell: ({ value }: any) => (
          <div className="text-center flex justify-center">
            <div
              role="button"
              title="Chat room"
              data-room-id={value}
              className="text-sky-600"
            >
              <GetIcon mode="outline" name="chat-alt" />
            </div>
          </div>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      id="cryptocurrencyWidgetTableData"
      className="w-full table-fixed "
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className="text-sm font-medium text-neutral-400"
                {...column.getHeaderProps({
                  style: { minWidth: column.minWidth, width: column.width },
                })}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className="text-base text-sm font-medium text-neutral-600"
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableData;
