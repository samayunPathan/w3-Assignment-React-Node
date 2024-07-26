import React, { useState, useEffect } from "react";
import "./CustomCalendar.css";

const CustomDateRangePicker = ({ onDateRangeChange, isCheckIn }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [flexibleRange, setFlexibleRange] = useState("exact");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  useEffect(() => {
    onDateRangeChange(startDate, endDate);
  }, [startDate, endDate, onDateRangeChange]);

  const renderCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysCount = daysInMonth(year, month);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${month}-${i}`} className="day empty"></div>);
    }

    for (let day = 1; day <= daysCount; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        (startDate &&
          date >= startDate &&
          date <= (endDate || hoverDate || startDate)) ||
        (endDate && date <= endDate && date >= startDate);
      const isStart =
        startDate && date.toDateString() === startDate.toDateString();
      const isEnd = endDate && date.toDateString() === endDate.toDateString();

      days.push(
        <div
          key={`${month}-${day}`}
          className={`day-cal ${isSelected ? "selected" : ""} ${
            isStart ? "start" : ""
          } ${isEnd ? "end" : ""}`}
          onClick={() => handleDateClick(date)}
          onMouseEnter={() => setHoverDate(date)}
          onMouseLeave={() => setHoverDate(null)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate) || date < startDate) {
      setStartDate(date);
      setEndDate(null);
    } else {
      setEndDate(date);
    }
  };

  const handleFlexibleRange = (days) => {
    setFlexibleRange(days);
    if (startDate) {
      const newEndDate = new Date(startDate);
      newEndDate.setDate(newEndDate.getDate() + (days === "exact" ? 0 : days));
      setEndDate(newEndDate);
    }
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
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
            <span>{`${
              monthNames[currentDate.getMonth()]
            } ${currentDate.getFullYear()}`}</span>
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
        {window.innerWidth > 768 && (
          <div className="calendar">
            <div className="calendar-header">
              <span>{`${monthNames[(currentDate.getMonth() + 1) % 12]} ${
                currentDate.getMonth() === 11
                  ? currentDate.getFullYear() + 1
                  : currentDate.getFullYear()
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
                currentDate.getMonth() === 11
                  ? currentDate.getFullYear() + 1
                  : currentDate.getFullYear()
              )}
            </div>
          </div>
        )}
      </div>
      <div className="date-range-info">
        {startDate && endDate
          ? `${startDate.toDateString()} - ${endDate.toDateString()}`
          : "Select your dates"}
      </div>
      <div className="flexible-options">
        <button
          className={flexibleRange === "exact" ? "active" : ""}
          onClick={() => handleFlexibleRange("exact")}
        >
          Exact dates
        </button>
        <button
          className={flexibleRange === 1 ? "active" : ""}
          onClick={() => handleFlexibleRange(1)}
        >
          ±1 day
        </button>
        <button
          className={flexibleRange === 2 ? "active" : ""}
          onClick={() => handleFlexibleRange(2)}
        >
          ±2 days
        </button>
        <button
          className={flexibleRange === 3 ? "active" : ""}
          onClick={() => handleFlexibleRange(3)}
        >
          ±3 days
        </button>
        <button
          className={flexibleRange === 7 ? "active" : ""}
          onClick={() => handleFlexibleRange(7)}
        >
          ±7 days
        </button>
        <button
          className={flexibleRange === 14 ? "active" : ""}
          onClick={() => handleFlexibleRange(14)}
        >
          ±14 days
        </button>
      </div>
    </div>
  );
};

export default CustomDateRangePicker;
