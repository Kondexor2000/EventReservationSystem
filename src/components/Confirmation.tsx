
import React from 'react';
import { useSelector } from 'react-redux';

const Confirmation: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  const category = useSelector((state: any) => state.category);
  const city = useSelector((state: any) => state.city);
  const event = useSelector((state: any) => state.event);
  const date = useSelector((state: any) => state.date);

  return (
    <div>
      <h2>Rejestracja ukończona</h2>
      <p>Uczestnik: {user}</p>
      <p>Kategoria: {category}</p>
      <p>Miejscowość: {city}</p>
      <p>Event: {event}</p>
      <p>Data: {date?.toDateString()}</p>
    </div>
  );
};

export default Confirmation;