import React from 'react';
import { Compass, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Compass className="w-6 h-6 mr-2" />
            <span className="text-xl font-bold">Spots</span>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Spots. All rights reserved.</p>
            <p className="mt-1">Find the best places to visit anywhere in the world.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;