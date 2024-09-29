import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCity } from '../store/actions';
import data from '../data'; 

interface RootState {
  category: string;
  city: string; 
}

const CitySelection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.category);
  const cities = data[category]?.cities || [];

  const filteredCities = cities.filter((city: string) => 
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCitySelect = (city: string) => {
    dispatch(selectCity(city));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Zaznacz miasto</h2>
      <input
        type="text"
        placeholder="Wyszukiwanie miasta..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {filteredCities.map((city: string) => (
          <li key={city} onClick={() => handleCitySelect(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitySelection;