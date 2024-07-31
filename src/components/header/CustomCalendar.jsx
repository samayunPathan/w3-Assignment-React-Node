import React, { useState, useEffect } from "react";
import "./CustomCalendar.css";

const CustomDateRangePicker = ({ onDateRangeChange, isCheckIn }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [flexibleRange, setFlexibleRange] = useState("exact");

  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    onDateRangeChange(selectedDate, flexibleRange);
  }, [selectedDate, flexibleRange, onDateRangeChange]);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const renderCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysCount = daysInMonth(year, month);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${month}-${i}`} className="day empty"></div>);
    }

    for (let day = 1; day <= daysCount; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

      days.push(
        <div
          key={`${month}-${day}`}
          className={`day-cal ${isSelected ? "selected" : ""}`}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleFlexibleRange = (range) => {
    setFlexibleRange(range);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  return (
    <div className="custom-date-range-picker">
      <div className="picker-header">
        <button className="tab active">Dates</button>
        <button className="tab">Months</button>
        <button className="tab">Flexible</button>
      </div>
      <div className="calendars">
        <div className="calendar">
          <div className="calendar-header">
            <button onClick={prevMonth}>&lt;</button>
            <span>{`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</span>
          </div>
          <div className="weekdays">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>
          <div className="days-cal">
            {renderCalendar(currentDate.getMonth(), currentDate.getFullYear())}
          </div>
        </div>
        <div className="calendar">
          <div className="calendar-header">
            <span>{`${monthNames[(currentDate.getMonth() + 1) % 12]} ${
              currentDate.getMonth() === 11 ? currentDate.getFullYear() + 1 : currentDate.getFullYear()
            }`}</span>
            <button onClick={nextMonth}>&gt;</button>
          </div>
          <div className="weekdays">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>
          <div className="days-cal">
            {renderCalendar(
              (currentDate.getMonth() + 1) % 12,
              currentDate.getMonth() === 11 ? currentDate.getFullYear() + 1 : currentDate.getFullYear()
            )}
          </div>
        </div>
      </div>
      <div className="date-range-info">
        {selectedDate ? selectedDate.toDateString() : "Select your date"}
      </div>
      <div className="flexible-options">
        <button
          className={flexibleRange === "exact" ? "active" : ""}
          onClick={() => handleFlexibleRange("exact")}
        >
          Exact dates
        </button>
        <button
          className={flexibleRange === "± 1 day" ? "active" : ""}
          onClick={() => handleFlexibleRange("± 1 day")}
        >
          ± 1 day
        </button>
        <button
          className={flexibleRange === "± 2 days" ? "active" : ""}
          onClick={() => handleFlexibleRange("± 2 days")}
        >
          ± 2 days
        </button>
        <button
          className={flexibleRange === "± 3 days" ? "active" : ""}
          onClick={() => handleFlexibleRange("± 3 days")}
        >
          ± 3 days
        </button>
        <button
          className={flexibleRange === "± 7 days" ? "active" : ""}
          onClick={() => handleFlexibleRange("± 7 days")}
        >
          ± 7 days
        </button>
      </div>
    </div>
  );
};

export default CustomDateRangePicker;