import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/stores';
import Login from './components/Login';
import Register from './components/Register';
import CategorySelection from './components/CategorySelection';
import CitySelection from './components/CitySelection';
import EventSelection from './components/EventSelection';
import DateSelection from './components/DateSelection';
import Confirmation from './components/Confirmation';
import './App.css';

const App: React.FC = () => {
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  return (
    <Provider store={store}>
      <div>
        <h1>System rejestracji użytkowników na eventy</h1>
        <button onClick={toggleContrast}>
          {highContrast ? 'Przełącznik normalnego kontrastu' : 'Przełącznik wysokiego kontrastu'}
        </button>
        <Login />
        <Register />
        <CategorySelection />
        <CitySelection />
        <EventSelection />
        <DateSelection />
        <Confirmation />
      </div>
    </Provider>
  );
};

export default App;