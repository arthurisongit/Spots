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
          className="w-full py-5 px-6 pr-14 rounded-xl border border-gray-200 focus:border-black focus:outline-none 
                   text-lg bg-white/80 backdrop-blur-sm transition-apple placeholder:text-gray-400"
          aria-label="Search for a city"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-900 
                   text-white p-3 rounded-lg transition-apple"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;