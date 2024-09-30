import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="搜索帖子..."
      />
      <button type="submit">搜索</button>
    </form>
  );
}

export default Search;