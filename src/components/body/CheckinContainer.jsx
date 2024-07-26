import React, { useState } from "react";
import "./CheckinContainer.css";
import { FaCalendarAlt } from "react-icons/fa";

const CheckinDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

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

  const renderMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    return (
      <div className="month">
        <h3 className="month-year">
          {monthNames[month]} {year}
        </h3>
        <div className="week-days">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day} className="week-day">
              {day}
            </div>
          ))}
        </div>
        <div className="days-check">
          {[...Array(firstDayOfMonth).keys()].map((i) => (
            <div key={`empty-${i}`} className="day"></div>
          ))}
          {[...Array(daysInMonth).keys()].map((i) => {
            const day = i + 1;
            const currentDate = new Date(year, month, day);
            const isDisabled = currentDate < new Date();
            return (
              <div
                key={day}
                className={`day ${isDisabled ? "disabled" : ""} ${
                  selectedDate &&
                  selectedDate.getTime() === currentDate.getTime()
                    ? "selected"
                    : ""
                }`}
                onClick={() => !isDisabled && handleDateClick(currentDate)}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 2, 1)
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 2, 1)
    );
  };

  return (
    <div className="container">
      <h2 className="header">Select check-in date</h2>
      <p className="subheader">Add your travel dates for exact pricing</p>
      <div className="calendar-header">
        <button className="nav-button" onClick={prevMonth}>
          &lt;
        </button>
        <button className="nav-button" onClick={nextMonth}>
          &gt;
        </button>
      </div>
      <div className="calendar-check">
        {renderMonth(currentMonth)}
        {renderMonth(
          new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
        )}
      </div>
      <div className="controls">
        <button
          className="btn-cal-icon"
          onClick={() => setSelectedDate(new Date())}
        >
          <FaCalendarAlt />
        </button>
        <button className="btn-cal" onClick={() => setSelectedDate(null)}>
          Clear dates
        </button>
      </div>
    </div>
  );
};

export default CheckinDate;
