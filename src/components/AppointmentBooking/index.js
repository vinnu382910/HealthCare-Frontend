import React, { useState } from 'react';
import './AppointmentBooking.css';

const AppointmentBooking = ({ doctorId, doctorName, availableSlots = [], onSuccess }) => {
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const isEmailValid = (email) => /^\S+@\S+\.\S+$/.test(email);
  const isFormValid = patientName && isEmailValid(patientEmail) && selectedTime;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMsg('');

    try {
      const res = await fetch('https://healthcare-backend-tc4i.onrender.com/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          doctorId,
          patientName,
          patientEmail,
          date: selectedDate,
          time: selectedTime,
        }),
      });

      const result = await res.json();

      if (res.status === 201) {
        setSuccessMsg(`Appointment booked with Dr. ${doctorName} at ${selectedTime} on ${selectedDate}`);
        if (onSuccess) onSuccess(result);
        setPatientName('');
        setPatientEmail('');
        setSelectedTime('');
      } else {
        if (res.status === 409) {
          setError('This slot was just booked. Please pick another time.');
        } else if (res.status === 400) {
          setError(result.message || 'Please check the form fields.');
        } else if (res.status === 404) {
          setError('Doctor not found.');
        } else {
          setError('Something went wrong. Please try again later.');
        }
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment-card">
      <div className="appointment-header">
        <h2><i className="icon-calendar" /> Book Appointment</h2>
      </div>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Full Name</label>
          <input
            id="patientName"
            type="text"
            placeholder="Enter your full name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="patientEmail">Email</label>
          <input
            id="patientEmail"
            type="email"
            placeholder="Enter your email"
            value={patientEmail}
            onChange={(e) => setPatientEmail(e.target.value)}
            required
            className={!isEmailValid(patientEmail) && patientEmail ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentDate">Select Date</label>
          <input
            id="appointmentDate"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="timeSlot">Available Time Slots</label>
          <select
            id="timeSlot"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >
            <option value="">Select a time slot</option>
            {availableSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        {error && <div className="error-text">{error}</div>}
        {successMsg && <div className="success-text">{successMsg}</div>}

        <button
          type="submit"
          disabled={!isFormValid || loading}
          className="submit-btn"
        >
          {loading ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>
    </div>
  );
};

export default AppointmentBooking;
