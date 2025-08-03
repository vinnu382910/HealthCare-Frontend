import React, { createContext, useState, useEffect } from 'react';

export const DoctorsContext = createContext();

export const DoctorsProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://healthcare-backend-tc4i.onrender.com/api/doctors')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        setLoading(false);
      });
  }, []);

  return (
    <DoctorsContext.Provider value={{ doctors, loading }}>
      {children}
    </DoctorsContext.Provider>
  );
};
