// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import './HomePage.css';

const HomePage = ({ query }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://healthcare-backend-tc4i.onrender.com/api/doctors/')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
        setLoading(false);
      });
  }, []);

  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(query.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="homepage-container">
      {loading ? (
        <p>Loading doctors...</p>
      ) : (
        <div className="doctor-grid">
          {filteredDoctors.map(doctor => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
