import { City } from '../types';

// Mock data for demonstration purposes
export const cities: City[] = [
  {
    name: 'Paris',
    country: 'France',
    spots: [
      {
        id: 1,
        name: 'Eiffel Tower',
        description: 'Iconic iron tower offering city views',
        image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.5,
        address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris',
        googleMapsUrl: 'https://maps.google.com/?q=Eiffel+Tower,+Paris,+France'
      },
      {
        id: 2,
        name: 'Louvre Museum',
        description: 'World\'s largest art museum and historic monument',
        image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800',
        score: 9.8,
        address: 'Rue de Rivoli, 75001 Paris',
        googleMapsUrl: 'https://maps.google.com/?q=Louvre+Museum,+Paris,+France'
      },
      {
        id: 3,
        name: 'Notre-Dame Cathedral',
        description: 'Medieval Catholic cathedral known for Gothic architecture',
        image: 'https://images.pexels.com/photos/5191399/pexels-photo-5191399.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.2,
        address: '6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris',
        googleMapsUrl: 'https://maps.google.com/?q=Notre+Dame+Cathedral,+Paris,+France'
      },
      {
        id: 4,
        name: 'Arc de Triomphe',
        description: 'Iconic triumphal arch honoring those who fought for France',
        image: 'https://images.pexels.com/photos/2412697/pexels-photo-2412697.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.9,
        address: 'Place Charles de Gaulle, 75008 Paris',
        googleMapsUrl: 'https://maps.google.com/?q=Arc+de+Triomphe,+Paris,+France'
      },
      {
        id: 5,
        name: 'Montmartre',
        description: 'Hillside area known for Sacré-Cœur Basilica and artists',
        image: 'https://images.pexels.com/photos/705764/pexels-photo-705764.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.7,
        address: 'Montmartre, 75018 Paris',
        googleMapsUrl: 'https://maps.google.com/?q=Montmartre,+Paris,+France'
      },
      {
        id: 6,
        name: 'Champs-Élysées',
        description: 'Famous avenue known for luxury shops and cafes',
        image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.5,
        address: 'Champs-Élysées, 75008 Paris',
        googleMapsUrl: 'https://maps.google.com/?q=Champs-Elysees,+Paris,+France'
      },
      {
        id: 7,
        name: 'Centre Pompidou',
        description: 'Complex building housing National Museum of Modern Art',
        image: 'https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.3,
        address: 'Place Georges-Pompidou, 75004 Paris',
        googleMapsUrl: 'https://maps.google.com/?q=Centre+Pompidou,+Paris,+France'
      },
      {
        id: 8,
        name: 'Sainte-Chapelle',
        description: 'Gothic chapel with stunning stained glass windows',
        image: 'https://images.pexels.com/photos/3428289/pexels-photo-3428289.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.0,
        address: '8 Boulevard du Palais, 75001 Paris',
        googleMapsUrl: 'https://maps.google.com/?q=Sainte+Chapelle,+Paris,+France'
      },
      {
        id: 9,
        name: 'Luxembourg Gardens',
        description: 'Beautiful garden featuring Luxembourg Palace',
        image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.2,
        address: '75006 Paris',
        googleMapsUrl: 'https://maps.google.com/?q=Luxembourg+Gardens,+Paris,+France'
      },
      {
        id: 10,
        name: 'Musée d\'Orsay',
        description: 'Museum in a former railway station with impressionist art',
        image: 'https://images.pexels.com/photos/14794286/pexels-photo-14794286.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.3,
        address: '1 Rue de la Légion d\'Honneur, 75007 Paris',
        googleMapsUrl: 'https://maps.google.com/?q=Musee+d\'Orsay,+Paris,+France'
      }
    ]
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    spots: [
      {
        id: 1,
        name: 'Tokyo Skytree',
        description: 'Tallest structure in Japan with observation decks',
        image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.0,
        address: '1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045',
        googleMapsUrl: 'https://maps.google.com/?q=Tokyo+Skytree,+Tokyo,+Japan'
      },
      {
        id: 2,
        name: 'Shibuya Crossing',
        description: 'Famous busy intersection known for scramble crossing',
        image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.8,
        address: '2 Chome-2-1 Dogenzaka, Shibuya City, Tokyo 150-0043',
        googleMapsUrl: 'https://maps.google.com/?q=Shibuya+Crossing,+Tokyo,+Japan'
      },
      {
        id: 3,
        name: 'Meiji Shrine',
        description: 'Shinto shrine dedicated to Emperor Meiji',
        image: 'https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.2,
        address: '1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557',
        googleMapsUrl: 'https://maps.google.com/?q=Meiji+Shrine,+Tokyo,+Japan'
      },
      {
        id: 4,
        name: 'Senso-ji Temple',
        description: 'Ancient Buddhist temple in Asakusa',
        image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.5,
        address: '2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032',
        googleMapsUrl: 'https://maps.google.com/?q=Senso-ji+Temple,+Tokyo,+Japan'
      },
      {
        id: 5,
        name: 'Tokyo Imperial Palace',
        description: 'Primary residence of the Emperor of Japan',
        image: 'https://images.pexels.com/photos/10885819/pexels-photo-10885819.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.9,
        address: '1-1 Chiyoda, Chiyoda City, Tokyo 100-8111',
        googleMapsUrl: 'https://maps.google.com/?q=Tokyo+Imperial+Palace,+Tokyo,+Japan'
      },
      {
        id: 6,
        name: 'Shinjuku Gyoen National Garden',
        description: 'Spacious park with diverse gardens and seasonal flowers',
        image: 'https://images.pexels.com/photos/6494994/pexels-photo-6494994.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.7,
        address: '11 Naitomachi, Shinjuku City, Tokyo 160-0014',
        googleMapsUrl: 'https://maps.google.com/?q=Shinjuku+Gyoen+National+Garden,+Tokyo,+Japan'
      },
      {
        id: 7,
        name: 'Akihabara',
        description: 'Electronics district known for anime and manga culture',
        image: 'https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.6,
        address: 'Akihabara, Taito City, Tokyo 110-0006',
        googleMapsUrl: 'https://maps.google.com/?q=Akihabara,+Tokyo,+Japan'
      },
      {
        id: 8,
        name: 'Harajuku',
        description: 'Trendy district known for youth fashion and culture',
        image: 'https://images.pexels.com/photos/4058519/pexels-photo-4058519.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.5,
        address: 'Harajuku, Shibuya City, Tokyo 150-0001',
        googleMapsUrl: 'https://maps.google.com/?q=Harajuku,+Tokyo,+Japan'
      },
      {
        id: 9,
        name: 'Tokyo Tower',
        description: 'Communications and observation tower inspired by Eiffel Tower',
        image: 'https://images.pexels.com/photos/13339006/pexels-photo-13339006.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.9,
        address: '4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011',
        googleMapsUrl: 'https://maps.google.com/?q=Tokyo+Tower,+Tokyo,+Japan'
      },
      {
        id: 10,
        name: 'Tsukiji Outer Market',
        description: 'Market district with shops and restaurants',
        image: 'https://images.pexels.com/photos/2338857/pexels-photo-2338857.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.0,
        address: '4 Chome-16-2 Tsukiji, Chuo City, Tokyo 104-0045',
        googleMapsUrl: 'https://maps.google.com/?q=Tsukiji+Outer+Market,+Tokyo,+Japan'
      }
    ]
  },
  {
    name: 'New York',
    country: 'USA',
    spots: [
      {
        id: 1,
        name: 'Statue of Liberty',
        description: 'Iconic copper statue on Liberty Island',
        image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.5,
        address: 'New York, NY 10004',
        googleMapsUrl: 'https://maps.google.com/?q=Statue+of+Liberty,+New+York,+USA'
      },
      {
        id: 2,
        name: 'Times Square',
        description: 'Major commercial intersection known for bright lights and billboards',
        image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.0,
        address: 'Manhattan, NY 10036',
        googleMapsUrl: 'https://maps.google.com/?q=Times+Square,+New+York,+USA'
      },
      {
        id: 3,
        name: 'Central Park',
        description: 'Urban park in Manhattan spanning 843 acres',
        image: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.3,
        address: 'New York, NY 10024',
        googleMapsUrl: 'https://maps.google.com/?q=Central+Park,+New+York,+USA'
      },
      {
        id: 4,
        name: 'Empire State Building',
        description: 'Iconic 102-story skyscraper',
        image: 'https://images.pexels.com/photos/421927/pexels-photo-421927.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.2,
        address: '20 W 34th St, New York, NY 10001',
        googleMapsUrl: 'https://maps.google.com/?q=Empire+State+Building,+New+York,+USA'
      },
      {
        id: 5,
        name: 'Brooklyn Bridge',
        description: 'Historic hybrid cable-stayed/suspension bridge',
        image: 'https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.0,
        address: 'Brooklyn Bridge, New York, NY 10038',
        googleMapsUrl: 'https://maps.google.com/?q=Brooklyn+Bridge,+New+York,+USA'
      },
      {
        id: 6,
        name: 'Metropolitan Museum of Art',
        description: 'One of the world\'s largest and finest art museums',
        image: 'https://images.pexels.com/photos/3017912/pexels-photo-3017912.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.4,
        address: '1000 5th Ave, New York, NY 10028',
        googleMapsUrl: 'https://maps.google.com/?q=Metropolitan+Museum+of+Art,+New+York,+USA'
      },
      {
        id: 7,
        name: 'One World Trade Center',
        description: 'Main building of the rebuilt World Trade Center',
        image: 'https://images.pexels.com/photos/1115175/pexels-photo-1115175.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.9,
        address: '285 Fulton St, New York, NY 10007',
        googleMapsUrl: 'https://maps.google.com/?q=One+World+Trade+Center,+New+York,+USA'
      },
      {
        id: 8,
        name: 'High Line',
        description: 'Elevated linear park created on a former railroad',
        image: 'https://images.pexels.com/photos/14711365/pexels-photo-14711365.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.8,
        address: 'New York, NY 10011',
        googleMapsUrl: 'https://maps.google.com/?q=High+Line,+New+York,+USA'
      },
      {
        id: 9,
        name: 'Grand Central Terminal',
        description: 'Historic train station with Beaux-Arts design',
        image: 'https://images.pexels.com/photos/3642722/pexels-photo-3642722.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.7,
        address: '89 E 42nd St, New York, NY 10017',
        googleMapsUrl: 'https://maps.google.com/?q=Grand+Central+Terminal,+New+York,+USA'
      },
      {
        id: 10,
        name: 'Broadway',
        description: 'Theater district offering world-class performances',
        image: 'https://images.pexels.com/photos/357612/pexels-photo-357612.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.1,
        address: 'Broadway, New York, NY',
        googleMapsUrl: 'https://maps.google.com/?q=Broadway,+New+York,+USA'
      }
    ]
  }
];

export const getCityByName = (cityName: string): City | undefined => {
  const normalizedCityName = cityName.trim().toLowerCase();
  return cities.find(city => city.name.toLowerCase() === normalizedCityName);
};