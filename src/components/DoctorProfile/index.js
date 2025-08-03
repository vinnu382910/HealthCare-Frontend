// src/components/DoctorProfile.js
import React from 'react';
import './DoctorProfile.css';

const DoctorProfile = ({ doctor }) => {
  const {
    name,
    specialization,
    profileImage,
    startTime,
    endTime,
    appointmentDuration,
    workingDays,
    bio,
  } = doctor;

  return (
    <div className="doctor-profile-container">
      <div className="doctor-header-card">
  <div className="doctor-card-content">
    <div className="doctor-card-top">
      <div className="relative">
        <img src={profileImage} alt={name} className="doctor-profile-pic" />
        {/* <div className="doctor-availability-indicator"></div> */}
      </div>
      <div className="doctor-details">
        <h1 className="doctor-name">{name}</h1>
        <p className="doctor-specialization">{specialization}</p>
        <div className="doctor-tags">
          <div className="doctor-tag">🕒 {startTime} - {endTime}</div>
          <div className="doctor-tag">📅 {appointmentDuration} min appointments</div>
        </div>
        <div className="working-days">
          <p className="working-days-title">Working Days:</p>
          <div className="working-days-badges">
            {workingDays.map((day) => (
              <span className="working-day-badge" key={day}>{day}</span>
            ))}
          </div>
        </div>
        <span className="available-badge">Available for Appointments</span>
      </div>
    </div>
  </div>
</div>


      <div className="doctor-about">
        <h3>About {name}</h3>
        <p>
          {bio ||
            `${name} is a highly qualified ${specialization.toLowerCase()} committed to providing exceptional patient care. With expertise in their field, ${name} offers comprehensive medical services and personalized treatment plans for each patient.`}
        </p>
      </div>

      <div className="doctor-schedule">
        <h3>Schedule & Availability</h3>
        <div className="schedule-details">
          <p><strong>Working Hours:</strong> {startTime} - {endTime}</p>
          <p><strong>Appointment Duration:</strong> {appointmentDuration} minutes per session</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
