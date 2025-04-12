import React, { memo } from 'react';
import { useState } from 'react';
import Attachment from '../../../assets/icons/Attachment.svg';
import Send from '../../../assets/icons/Send.svg';
import ArrowLeft from '../../../assets/icons/ArrowLeft.svg';
import ArrowRight from '../../../assets/icons/ArrowRight.svg';

import './styles.scss';
import { DayCell } from './DayCell/DayCell';
import TextEditor from './TextEditor';

const ActivityBooking = ({ activityData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleClearAll = () => {
    setName('');
    setEmail('');
    setMessage('');
    setFileName('');
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  // Get days from previous month to fill the first row
  const daysFromPrevMonth = firstDayOfMonth;
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevMonthYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);

  // Calculate days needed from next month
  const totalCells = 35;
  const daysFromNextMonth = totalCells - daysInMonth - daysFromPrevMonth;

  // Create array of day objects for the calendar
  const days = [];

  const busyDays = [
    new Date('1/28/2025').getTime(),
    new Date('1/29/2025').getTime(),
    new Date('4/2/2025').getTime(),
  ];

  // Add days from previous month
  for (let i = 0; i < daysFromPrevMonth; i++) {
    days.push({
      day: daysInPrevMonth - daysFromPrevMonth + i + 1,
      currentMonth: false,
      date: new Date(
        prevMonthYear,
        prevMonth,
        daysInPrevMonth - daysFromPrevMonth + i + 1,
      ),
      status: 'disabled',
    });
  }

  // Add days from current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      currentMonth: true,
      date: new Date(year, month, i),
      status: busyDays.includes(new Date(year, month, i).getTime())
        ? 'occupe'
        : 'libre',
    });
  }

  // Add days from next month
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;

  for (let i = 1; i <= daysFromNextMonth; i++) {
    days.push({
      day: i,
      currentMonth: false,
      date: new Date(nextMonthYear, nextMonth, i),
      status: 'disabled',
    });
  }
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleSelectedDate = (day, isCurrentMonth) => {
    if (
      !isCurrentMonth ||
      busyDays.includes(new Date(year, month, day).getTime())
    )
      return;
    setSelectedDate(day);
  };

  return (
    <div className="activity-booking">
      <div className="section-header">
        <div className="line">
          <span></span>
        </div>
        <h2 className="main-title">{activityData.title}</h2>
        <div className="line">
          <span></span>
        </div>
      </div>
      <div className="activity-booking__calendar">
        <div className="activity-booking__calendar-header">
          <button
            onClick={handlePrevMonth}
            className="activity-booking__nav-button"
          >
            <img src={ArrowLeft} width={20} />
          </button>
          <h2 className="activity-booking__month-title">
            {' '}
            {monthNames[month]} {year}
          </h2>
          <button
            onClick={handleNextMonth}
            className="activity-booking__nav-button"
          >
            <img src={ArrowRight} width={20} />
          </button>
        </div>

        <div className="activity-booking__calendar-grid">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="activity-booking__weekday">
              {day}
            </div>
          ))}

          {days.map((item, index) => (
            <DayCell
              key={index}
              day={item.day}
              isCurrentMonth={item.currentMonth}
              date={item.date}
              status={item.status}
              selectedDate={selectedDate}
              handleSelectedDate={handleSelectedDate}
            />
          ))}
        </div>
      </div>

      <div className="activity-booking__form">
        <div className="activity-booking__form-group">
          <label className="activity-booking__label">
            {activityData.btn_1[0]}:
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={activityData.btn_1[1]}
            className="activity-booking__input"
          />
        </div>

        <div className="activity-booking__form-group">
          <label className="activity-booking__label">
            {activityData.btn_2[0]}:
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={activityData.btn_2[0]}
            className="activity-booking__input"
          />
        </div>

        <div className="activity-booking__form-group">
          <label className="activity-booking__label">
            {activityData.btn_3}:
          </label>

          <div className="activity-booking__editor">
            <TextEditor message={message} setMessage={setMessage} />
          </div>
        </div>

        <div className="activity-booking__form-group">
          <label className="activity-booking__label">
            {activityData.btn_4[0]}:
          </label>
          <div className="activity-booking__file-upload">
            <label className="activity-booking__file-label">
              <img src={Attachment} />
              <span>{activityData.btn_4[1]}</span>
              <span className="activity-booking__file-hint">
                {fileName ? fileName : `(${activityData.btn_4[2]})`}
              </span>
              <input
                type="file"
                accept=".pdf"
                className="activity-booking__file-input"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        <div className="activity-booking__actions">
          <button
            onClick={handleClearAll}
            className="activity-booking__button activity-booking__button--secondary"
          >
            {activityData.btn_5}
          </button>
          <button className="activity-booking__button activity-booking__button--primary">
            {activityData.btn_6}
            <img src={Send} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityBooking;
