import React, { memo } from 'react';
import './styles.scss';
export function DayCell({
  day,
  isCurrentMonth,
  date,
  status,
  selectedDate,
  handleSelectedDate,
}) {
  const today = new Date();
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  return (
    <div
      className="day-cell"
      onClick={() => handleSelectedDate(day, isCurrentMonth)}
    >
      <div
        className={`day-cell__day day-cell__day--${status} ${
          day === selectedDate ? 'selectedDate' : ''
        }`}
      >
        <div className="day-cell__date">{day}</div>
        {status !== 'disabled' && (
          <div className="day-cell__status">{status}</div>
        )}
      </div>
    </div>
  );
}
