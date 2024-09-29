
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvent } from '../store/actions';
import data from '../data';

const EventSelection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const category = useSelector((state: any) => state.category);
  const city = useSelector((state: any) => state.city);
  const events = data[category]?.events[city] || [];

  const filteredEvents = events.filter((event) =>
    event.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEventSelect = (event: string) => {
    dispatch(selectEvent(event));
  };

  return (
    <div>
      <h2>Zaznacz event</h2>
      <input
        type="text"
        placeholder="Wyszukiwanie eventów..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredEvents.map((event) => (
          <li key={event} onClick={() => handleEventSelect(event)}>
            {event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventSelection;