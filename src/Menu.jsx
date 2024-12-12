import React from 'react';
import PropTypes from 'prop-types';
import "./menu.css";

const Menu = ({ onCurrencyChange, selectedStops, onStopsChange }) => {
  const handleChange = (stop) => {
    onStopsChange((prev) => {
      if (prev.includes(stop)) {
        return prev.filter((s) => s !== stop);
      } else {
        return [...prev, stop];
      }
    });
  };

  // Отрисовка меню с изменением валюты и фильрация количества пересадок
  return (
    <div className="menu">
      <h3 className="menu-title">ВАЛЮТА</h3>
      <button className="currency-btn" onClick={() => onCurrencyChange('RUB')}>RUB</button>
      <button className="currency-btn" onClick={() => onCurrencyChange('USD')}>USD</button>
      <button className="currency-btn" onClick={() => onCurrencyChange('EUR')}>EUR</button>
      <div className="contain-stops">
        <h3 className="stops-title">КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedStops.length === 0}
            onChange={() => {
              if (selectedStops.length === 0) {
                onStopsChange([0, 1, 2, 3]);
              } else {
                onStopsChange([]);
              }
            }}
          />
          Все
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedStops.includes(0)}
            onChange={() => handleChange(0)}
          />
          Без пересадок
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedStops.includes(1)}
            onChange={() => handleChange(1)}
          />
          1 пересадка
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedStops.includes(2)}
            onChange={() => handleChange(2)}
          />
          2 пересадки
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedStops.includes(3)}
            onChange={() => handleChange(3)}
          />
          3 пересадки
        </label>
      </div>

    </div>
  );
};

// Валидация пропсов
Menu.propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
  selectedStops: PropTypes.arrayOf(PropTypes.number).isRequired,
  onStopsChange: PropTypes.func.isRequired,
};

export default Menu;
