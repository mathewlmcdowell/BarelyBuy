// SearchBar.jsx
import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text); // Pass the search text to the parent component
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search inventory..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}
