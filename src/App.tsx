import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SpotsList from './components/SpotsList';
import EmptyState from './components/EmptyState';
import ErrorState from './components/ErrorState';
import LoadingState from './components/LoadingState';
import Footer from './components/Footer';
import { getCityByName } from './data/cities';
import { City } from './types';

function App() {
  const [city, setCity] = useState<City | null>(null);
  const [searchedCity, setSearchedCity] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSearch = (cityName: string) => {
    setIsLoading(true);
    setSearchedCity(cityName);
    setError(false);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const foundCity = getCityByName(cityName);
      
      if (foundCity) {
        setCity(foundCity);
        setError(false);
      } else {
        setCity(null);
        setError(true);
      }
      
      setIsLoading(false);
    }, 1500); // Simulate loading for 1.5 seconds
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="w-full max-w-7xl mx-auto px-4 -mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {isLoading ? (
            <LoadingState />
          ) : error ? (
            <ErrorState cityName={searchedCity} />
          ) : city ? (
            <SpotsList spots={city.spots} cityName={city.name} />
          ) : (
            <EmptyState />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;