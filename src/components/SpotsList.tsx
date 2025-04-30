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
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-center mb-12 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
          Top Places in <span className="text-black">{cityName}</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spots.map((spot, index) => (
          <SpotCard key={spot.id} spot={spot} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SpotsList;