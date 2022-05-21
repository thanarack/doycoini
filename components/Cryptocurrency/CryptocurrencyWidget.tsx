import ChatWidget from '../Chat/ChatWidget';
import CryptoTags from './CryptoTags';
import TableData from './TableData';

const CryptocurrencyWidget = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-5" style={{ minHeight: 200 }}>
      <div className="col-span-6 h-full">
        <CryptoTags />
        <div id="table-data-box">
          <TableData />
        </div>
      </div>
      <div className="col-span-6 h-full">
        <ChatWidget />
      </div>
    </div>
  );
};

export default CryptocurrencyWidget;
