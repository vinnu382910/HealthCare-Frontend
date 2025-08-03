// src/components/DoctorCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  const {
    _id,
    name,
    specialization,
    profileImage,
    startTime,
    endTime,
    appointmentDuration,
    workingDays,
  } = doctor;

  return (
    <div className="doctor-card">
      <div className="card-content">
        <div className="doctor-info">
          <div className="profile-img-wrapper">
            <img src={profileImage} alt={name} className="profile-img" />
            <div className="status-indicator"></div>
          </div>

          <div className="doctor-details">
            <h3 className="doctor-name">{name}</h3>
            <p className="doctor-specialization">{specialization}</p>

            <div className="doctor-meta">
              <div className="meta-item">
                <span className="meta-icon">🕒</span>
                <span>{startTime} - {endTime}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📅</span>
                <span>{appointmentDuration}min slots</span>
              </div>
            </div>

            <div className="doctor-days">
              <p className="days-title">Working Days:</p>
              <div className="days-badges">
                {workingDays.map((day, idx) => (
                  <span className="day-badge" key={idx}>
                    {day.slice(0, 3)}
                  </span>
                ))}
              </div>
            </div>

            <span className="availability">Available</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <Link to={`/doctor/${_id}`} className="book-btn-link">
          <button className="book-btn">View Profile & Book</button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
