import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a city name (e.g., Paris, Tokyo, New York)"
          className="w-full py-4 px-5 pr-14 rounded-full border-2 border-gray-200 focus:border-cyan-600 focus:outline-none 
                   text-lg shadow-md transition-all duration-300 placeholder:text-gray-400"
          aria-label="Search for a city"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-cyan-600 hover:bg-cyan-700 
                   text-white p-3 rounded-full transition-colors duration-300"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;