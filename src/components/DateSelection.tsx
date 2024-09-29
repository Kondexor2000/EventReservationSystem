
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from '../store/actions';
import data from '../data';

const DateSelection: React.FC = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: any) => state.category);
  const city = useSelector((state: any) => state.city);
  const event = useSelector((state: any) => state.event);
  const dates = data[category]?.dates[event] || [];

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    dispatch(selectDate(date));
  };

  return (
    <div>
      <h2>Zaznacz datę</h2>
      <ul>
        {dates.map((date) => (
          <li key={date.toString()} onClick={() => handleDateSelect(date)}>
            {date.toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DateSelection;