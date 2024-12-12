import PropTypes from 'prop-types';
import './TicketCard.css';

const TicketCard = ({ ticket, currency, conversionRates }) => {
  const { departure_time, arrival_time, origin, carrier, origin_name, destination_name, departure_date, arrival_date, stops, } = ticket;
  const priceInSelectedCurrency = Math.floor(ticket.price * conversionRates[currency])


// Определение текст для количества пересадок
  const stopText =
    stops === 0 ? 'ПЕРЕСАДОК' :
      stops === 1 ? 'ПЕРЕСАДКА' :
        'ПЕРЕСАДКИ';

// Передача объект для определения логотипа авиакомпании
  const photoUrls = {
    "BA": "https://i.yapx.ru/YQcg3.png",
    "S7": "https://i.yapx.ru/YQd8A.png",
    "TK": "https://i.yapx.ru/YQdDK.png",
    "SU": "https://i.yapx.ru/YQcni.png",
  }
  const photoUrl = photoUrls[carrier]

// Отрисовка карточки
  return (
    <li className="ticket-card">
      <div className="ticket-buy">
        <img src={photoUrl} alt={carrier} className='ticket-photo' />
        <button className="buy-button">
          Купить за  {priceInSelectedCurrency} {currency}
        </button>
      </div>

      <div className="ticket-left">
        <p className="ticket-time">{departure_time}</p>
        <p className="ticket-cities">{origin}, {origin_name}</p>
        <p className="ticket-date">{new Date(departure_date).toLocaleDateString('ru-RU', {
          month: 'short',
          year: 'numeric',
          weekday: 'short',
          day: 'numeric',
        }).replace('г.', '')}</p>

      </div>
      <span className="stop-span">{stops} {stopText}</span>
      <div className="tiket-right">
        <p className="ticket-time">{arrival_time}</p>
        <p className="ticket-cities">{destination_name}, {carrier}</p>
        <p className="ticket-date">{new Date(arrival_date).toLocaleDateString('ru-RU', {
          month: 'short',
          year: 'numeric',
          weekday: 'short',
          day: 'numeric',
        }).replace('г.', '')}</p>
      </div>
    </li>
  );
};

// Валидация пропсов

TicketCard.propTypes = {
  ticket: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    origin_name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    destination_name: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    departure_time: PropTypes.string.isRequired,
    arrival_date: PropTypes.string.isRequired,
    arrival_time: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired,
    stops: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  currency: PropTypes.string.isRequired,
  conversionRates: PropTypes.object.isRequired,
};
export default TicketCard;
