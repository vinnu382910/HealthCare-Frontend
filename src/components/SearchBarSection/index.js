import React from 'react';
import './SearchBarSection.css';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';

const SearchBarSection = ({ query, setQuery }) => {
  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className="search-section">
      <h2 className="search-title">Find & Book Your Doctor</h2>
      <p className="search-subtitle">Connect with qualified healthcare professionals</p>

      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search doctors, specializations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && <FaTimesCircle className="clear-icon" onClick={handleClear} />}
      </div>
    </div>
  );
};

export default SearchBarSection;
