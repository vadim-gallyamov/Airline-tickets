import React, { useState } from 'react';
import TicketList from './TicketList';
import Menu from './Menu';
import tickets from '../ticket.json';
import "./App.css"


//Изменение цены в зависимости от валюты
const App = () => {
  const [currency, setCurrency] = useState('RUB');
  const [selectedStops, setSelectedStops] = useState([]);
  const conversionRates = {
    RUB: 1,
    USD: 0.013,
    EUR: 0.011,
  };

  const handleCurrencyChange = (newCurrency) => setCurrency(newCurrency);

// Отрисовка приложения
  return (
    <div className="app">
      <Menu
        onCurrencyChange={handleCurrencyChange}
        selectedStops={selectedStops}
        onStopsChange={setSelectedStops}
      />
      <TicketList
        tickets={tickets.tickets}
        currency={currency}
        conversionRates={conversionRates}
        selectedStops={selectedStops}
      />
    </div>
  );
};

export default App;

