import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Spot } from '../types';

interface SpotCardProps {
  spot: Spot;
  index: number;
}

const SpotCard: React.FC<SpotCardProps> = ({ spot, index }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 
                flex flex-col h-full transform hover:-translate-y-1" 
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeIn 0.5s ease-out forwards',
        opacity: 0
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={spot.image} 
          alt={spot.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-bold text-sm">{spot.score.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{spot.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{spot.description}</p>
        
        <div className="mt-auto">
          <div className="flex items-start gap-1 text-gray-500 mb-3">
            <MapPin className="w-5 h-5 min-w-5 mt-0.5 text-gray-400" />
            <span className="text-sm">{spot.address}</span>
          </div>
          
          <a 
            href={spot.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg
                    text-center transition-colors duration-300"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;