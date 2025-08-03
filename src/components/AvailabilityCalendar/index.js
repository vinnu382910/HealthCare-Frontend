// src/components/AvailabilityCalendar.js
import React from 'react';
import './AvailabilityCalendar.css';

const daysOfWeekFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const daysOfWeekShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const AvailabilityCalendar = ({ month = 'August', year = 2025, workingDays = [] }) => {
  const daysInMonth = new Date(year, 8, 0).getDate(); // August = 8 (index starts at 0)
  const firstDay = new Date(year, 7, 1).getDay(); // August 1st
  const workingDayIndexes = workingDays.map(day => daysOfWeekFull.indexOf(day)); // [1, 4, 5]

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h3>{month} {year}</h3>
        <div className="calendar-nav">
          <button>&larr;</button>
          <button>&rarr;</button>
        </div>
      </div>

      <div className="calendar-grid">
        {daysOfWeekShort.map(day => (
          <div key={day} className="day-name">{day}</div>
        ))}

        {Array(firstDay).fill(null).map((_, i) => (
          <div key={`empty-${i}`} className="day-empty" />
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const dayOfWeek = new Date(year, 7, day).getDay(); // 0-6
          const isAvailable = workingDayIndexes.includes(dayOfWeek);

          return (
            <div
              key={day}
              className={`calendar-day ${isAvailable ? 'available' : 'notworking'}`}
            >
              <span className="day-number">{day}</span>
              {isAvailable && <span className="status-label">Available</span>}
            </div>
          );
        })}
      </div>

      <div className="calendar-legend">
        <div><span className="legend-box available-box"></span> Available</div>
        <div><span className="legend-box notworking-box"></span> Not Working</div>
      </div>

      <div className="calendar-schedule">
        <h4>Working Schedule</h4>
        <div className="schedule-row">
          <span>Working Days:</span>
          <span>{workingDays.join(', ')}</span>
        </div>
        <div className="schedule-row">
          <span>Working Hours:</span>
          <span>08:00 - 16:00</span>
        </div>
        <div className="schedule-row">
          <span>Appointment Duration:</span>
          <span>30 minutes</span>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;
