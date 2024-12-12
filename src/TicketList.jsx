import React from 'react';
import PropTypes from 'prop-types';
import TicketCard from './TicketCard';
import "./TicketList.css"

const TicketList = ({ tickets, currency, conversionRates, selectedStops }) => {
  const filteredTickets = tickets.filter(ticket =>
    selectedStops.length === 0 || selectedStops.includes(ticket.stops)
  );

// Отрисовка списка карточек
  return (
    <ul className="ticket-list">
      {filteredTickets.map((ticket, index) => (
        <TicketCard key={index} ticket={ticket} currency={currency} conversionRates={conversionRates} />
      ))}
    </ul>
  );
};
// Валидация пропосов
TicketList.propTypes = {
  tickets: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired,
  conversionRates: PropTypes.object.isRequired,
  selectedStops: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TicketList;
