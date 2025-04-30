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
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-apple 
                flex flex-col h-full transform hover:-translate-y-1" 
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeIn 0.5s ease-out forwards',
        opacity: 0
      }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={spot.image} 
          alt={spot.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full py-1.5 px-3 shadow-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-black fill-black" />
            <span className="font-medium text-sm">{spot.score.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-semibold text-xl mb-2 text-gray-900">{spot.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">{spot.description}</p>
        
        <div className="mt-auto">
          <div className="flex items-start gap-1.5 text-gray-500 mb-4">
            <MapPin className="w-5 h-5 min-w-5 mt-0.5 text-gray-400" />
            <span className="text-sm">{spot.address}</span>
          </div>
          
          <a 
            href={spot.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-black hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg
                    text-center transition-apple text-sm"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;