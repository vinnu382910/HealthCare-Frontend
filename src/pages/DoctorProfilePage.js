import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DoctorProfile from '../components/DoctorProfile';
import AvailabilityCalendar from '../components/AvailabilityCalendar';
import AppointmentBooking from '../components/AppointmentBooking';
import './DoctorDetailsPage.css';

const DoctorDetailsPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://healthcare-backend-tc4i.onrender.com/api/doctors/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Doctor not found');
        return res.json();
      })
      .then((data) => setDoctor(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!doctor) return <p>Loading...</p>;

  // Generate availableSlots based on doctor's working hours (optional: use real slot calculation logic)
  const availableSlots = doctor?.availableSlots || ['09:00', '10:00', '11:00', '14:00', '15:00']; // Fallback

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="doctor-details-wrapper">
      <div className="doctor-details-main">
        <DoctorProfile doctor={doctor} />

        <AppointmentBooking
          doctorId={doctor._id}
          doctorName={doctor.name}
          date={today}
          availableSlots={availableSlots}
          onSuccess={(data) => {
            console.log('Appointment Success:', data);
          }}
        />
      </div>

      <div className="calendar-wrapper">
        <AvailabilityCalendar
          workingDays={doctor.workingDays}
          startTime={doctor.startTime}
          endTime={doctor.endTime}
          appointmentDuration={doctor.appointmentDuration}
        />
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
