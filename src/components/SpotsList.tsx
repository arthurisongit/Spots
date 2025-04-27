import React from 'react';
import { Spot } from '../types';
import SpotCard from './SpotCard';
import { Map } from 'lucide-react';

interface SpotsListProps {
  spots: Spot[];
  cityName: string;
}

const SpotsList: React.FC<SpotsListProps> = ({ spots, cityName }) => {
  if (!spots.length) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-8 text-center">
        <Map className="w-6 h-6 mr-2 text-cyan-600" />
        <h2 className="text-3xl font-bold text-gray-800">
          Top 10 Places to Visit in <span className="text-cyan-600">{cityName}</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spots.map((spot, index) => (
          <SpotCard key={spot.id} spot={spot} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SpotsList;