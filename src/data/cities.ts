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
  },
  {
    name: 'London',
    country: 'UK',
    spots: [
      {
        id: 1,
        name: 'Tower of London',
        description: 'Historic castle and fortress with Crown Jewels',
        image: 'https://images.pexels.com/photos/1427578/pexels-photo-1427578.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.2,
        address: 'St Katharine\'s & Wapping, London EC3N 4AB',
        googleMapsUrl: 'https://maps.google.com/?q=Tower+of+London,+London,+UK'
      },
      {
        id: 2,
        name: 'British Museum',
        description: 'World-famous museum of human history and culture',
        image: 'https://images.pexels.com/photos/2519800/pexels-photo-2519800.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.5,
        address: 'Great Russell St, Bloomsbury, London WC1B 3DG',
        googleMapsUrl: 'https://maps.google.com/?q=British+Museum,+London,+UK'
      },
      {
        id: 3,
        name: 'Westminster Abbey',
        description: 'Gothic church and UNESCO World Heritage site',
        image: 'https://images.pexels.com/photos/460324/pexels-photo-460324.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.0,
        address: '20 Deans Yd, Westminster, London SW1P 3PA',
        googleMapsUrl: 'https://maps.google.com/?q=Westminster+Abbey,+London,+UK'
      },
      {
        id: 4,
        name: 'Buckingham Palace',
        description: 'Official residence of the British monarch',
        image: 'https://images.pexels.com/photos/372225/pexels-photo-372225.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.8,
        address: 'Westminster, London SW1A 1AA',
        googleMapsUrl: 'https://maps.google.com/?q=Buckingham+Palace,+London,+UK'
      },
      {
        id: 5,
        name: 'London Eye',
        description: 'Giant Ferris wheel offering city views',
        image: 'https://images.pexels.com/photos/2374805/pexels-photo-2374805.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.5,
        address: 'Riverside Building, County Hall, London SE1 7PB',
        googleMapsUrl: 'https://maps.google.com/?q=London+Eye,+London,+UK'
      },
      {
        id: 6,
        name: 'St. Paul\'s Cathedral',
        description: 'Anglican cathedral with iconic dome',
        image: 'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.1,
        address: 'St. Paul\'s Churchyard, London EC4M 8AD',
        googleMapsUrl: 'https://maps.google.com/?q=St+Pauls+Cathedral,+London,+UK'
      },
      {
        id: 7,
        name: 'Tate Modern',
        description: 'Modern art gallery in former power station',
        image: 'https://images.pexels.com/photos/6447217/pexels-photo-6447217.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.9,
        address: 'Bankside, London SE1 9TG',
        googleMapsUrl: 'https://maps.google.com/?q=Tate+Modern,+London,+UK'
      },
      {
        id: 8,
        name: 'Hyde Park',
        description: 'Large park with Serpentine lake',
        image: 'https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.7,
        address: 'Hyde Park, London W2 2UH',
        googleMapsUrl: 'https://maps.google.com/?q=Hyde+Park,+London,+UK'
      },
      {
        id: 9,
        name: 'Tower Bridge',
        description: 'Iconic Victorian bridge over Thames',
        image: 'https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.3,
        address: 'Tower Bridge Rd, London SE1 2UP',
        googleMapsUrl: 'https://maps.google.com/?q=Tower+Bridge,+London,+UK'
      },
      {
        id: 10,
        name: 'Natural History Museum',
        description: 'Museum showcasing natural history specimens',
        image: 'https://images.pexels.com/photos/6899778/pexels-photo-6899778.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.4,
        address: 'Cromwell Rd, South Kensington, London SW7 5BD',
        googleMapsUrl: 'https://maps.google.com/?q=Natural+History+Museum,+London,+UK'
      }
    ]
  },
  {
    name: 'Rome',
    country: 'Italy',
    spots: [
      {
        id: 1,
        name: 'Colosseum',
        description: 'Ancient amphitheater and iconic symbol of Rome',
        image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.8,
        address: 'Piazza del Colosseo, 1, 00184 Roma RM',
        googleMapsUrl: 'https://maps.google.com/?q=Colosseum,+Rome,+Italy'
      },
      {
        id: 2,
        name: 'Vatican Museums',
        description: 'Art museums with Sistine Chapel',
        image: 'https://images.pexels.com/photos/3722870/pexels-photo-3722870.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.6,
        address: '00120 Vatican City',
        googleMapsUrl: 'https://maps.google.com/?q=Vatican+Museums,+Vatican+City'
      },
      {
        id: 3,
        name: 'Pantheon',
        description: 'Former Roman temple, now a church',
        image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.4,
        address: 'Piazza della Rotonda, 00186 Roma RM',
        googleMapsUrl: 'https://maps.google.com/?q=Pantheon,+Rome,+Italy'
      },
      {
        id: 4,
        name: 'Trevi Fountain',
        description: 'Baroque fountain and popular tourist spot',
        image: 'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.2,
        address: 'Piazza di Trevi, 00187 Roma RM',
        googleMapsUrl: 'https://maps.google.com/?q=Trevi+Fountain,+Rome,+Italy'
      },
      {
        id: 5,
        name: 'Roman Forum',
        description: 'Ancient city center ruins',
        image: 'https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.3,
        address: 'Via della Salara Vecchia, 5/6, 00186 Roma RM',
        googleMapsUrl: 'https://maps.google.com/?q=Roman+Forum,+Rome,+Italy'
      },
      {
        id: 6,
        name: 'St. Peter\'s Basilica',
        description: 'Renaissance church in Vatican City',
        image: 'https://images.pexels.com/photos/3722876/pexels-photo-3722876.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.7,
        address: 'Piazza San Pietro, 00120 Città del Vaticano',
        googleMapsUrl: 'https://maps.google.com/?q=St+Peters+Basilica,+Vatican+City'
      },
      {
        id: 7,
        name: 'Spanish Steps',
        description: 'Monumental staircase with Trinità dei Monti church',
        image: 'https://images.pexels.com/photos/2346185/pexels-photo-2346185.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.8,
        address: 'Piazza di Spagna, 00187 Roma RM',
        googleMapsUrl: 'https://maps.google.com/?q=Spanish+Steps,+Rome,+Italy'
      },
      {
        id: 8,
        name: 'Borghese Gallery',
        description: 'Art museum in Villa Borghese gardens',
        image: 'https://images.pexels.com/photos/5825366/pexels-photo-5825366.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.1,
        address: 'Piazzale Scipione Borghese, 5, 00197 Roma RM',
        googleMapsUrl: 'https://maps.google.com/?q=Borghese+Gallery,+Rome,+Italy'
      },
      {
        id: 9,
        name: 'Castel Sant\'Angelo',
        description: 'Fortress-turned-museum on the Tiber',
        image: 'https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.9,
        address: 'Lungotevere Castello, 50, 00193 Roma RM',
        googleMapsUrl: 'https://maps.google.com/?q=Castel+Sant+Angelo,+Rome,+Italy'
      },
      {
        id: 10,
        name: 'Piazza Navona',
        description: 'Square with Baroque fountains',
        image: 'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.0,
        address: 'Piazza Navona, 00186 Roma RM',
        googleMapsUrl: 'https://maps.google.com/?q=Piazza+Navona,+Rome,+Italy'
      }
    ]
  },
  {
    name: 'Dubai',
    country: 'UAE',
    spots: [
      {
        id: 1,
        name: 'Burj Khalifa',
        description: 'World\'s tallest building with observation decks',
        image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.5,
        address: '1 Sheikh Mohammed bin Rashid Blvd, Dubai',
        googleMapsUrl: 'https://maps.google.com/?q=Burj+Khalifa,+Dubai,+UAE'
      },
      {
        id: 2,
        name: 'Dubai Mall',
        description: 'Massive shopping center with aquarium',
        image: 'https://images.pexels.com/photos/2861656/pexels-photo-2861656.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.0,
        address: 'Financial Center Rd, Dubai',
        googleMapsUrl: 'https://maps.google.com/?q=Dubai+Mall,+Dubai,+UAE'
      },
      {
        id: 3,
        name: 'Palm Jumeirah',
        description: 'Palm-shaped artificial island',
        image: 'https://images.pexels.com/photos/4388287/pexels-photo-4388287.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.2,
        address: 'Palm Jumeirah, Dubai',
        googleMapsUrl: 'https://maps.google.com/?q=Palm+Jumeirah,+Dubai,+UAE'
      },
      {
        id: 4,
        name: 'Dubai Marina',
        description: 'Waterfront district with luxury yachts',
        image: 'https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.9,
        address: 'Dubai Marina, Dubai',
        googleMapsUrl: 'https://maps.google.com/?q=Dubai+Marina,+Dubai,+UAE'
      },
      {
        id: 5,
        name: 'Burj Al Arab',
        description: 'Luxury hotel shaped like a sail',
        image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.3,
        address: 'Jumeirah St, Dubai',
        googleMapsUrl: 'https://maps.google.com/?q=Burj+Al+Arab,+Dubai,+UAE'
      },
      {
        id: 6,
        name: 'Dubai Miracle Garden',
        description: 'Flower garden with artistic displays',
        image: 'https://images.pexels.com/photos/4614227/pexels-photo-4614227.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.7,
        address: 'Al Barsha South 3, Dubai',
        googleMapsUrl: 'https://maps.google.com/?q=Dubai+Miracle+Garden,+Dubai,+UAE'
      },
      {
        id: 7,
        name: 'Dubai Frame',
        description: 'Architectural landmark with city views',
        image: 'https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.8,
        address: 'Zabeel Park, Dubai',
        googleMapsUrl: 'https://maps.google.com/?q=Dubai+Frame,+Dubai,+UAE'
      },
      {
        id: 8,
        name: 'Gold Souk',
        description: 'Traditional market for gold jewelry',
        image: 'https://images.pexels.com/photos/4614201/pexels-photo-4614201.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.5,
        address: 'Al Dhagaya, Dubai',
        googleMapsUrl: 'https://maps.google.com/?q=Gold+Souk,+Dubai,+UAE'
      },
      {
        id: 9,
        name: 'Dubai Desert Safari',
        description: 'Desert adventure with dune bashing',
        image: 'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.1,
        address: 'Dubai Desert Conservation Reserve',
        googleMapsUrl: 'https://maps.google.com/?q=Dubai+Desert+Conservation+Reserve,+Dubai,+UAE'
      },
      {
        id: 10,
        name: 'Dubai Creek',
        description: 'Historic waterway with traditional boats',
        image: 'https://images.pexels.com/photos/4388287/pexels-photo-4388287.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.6,
        address: 'Dubai Creek, Dubai',
        googleMapsUrl: 'https://maps.google.com/?q=Dubai+Creek,+Dubai,+UAE'
      }
    ]
  },
  {
    name: 'Rio de Janeiro',
    country: 'Brazil',
    spots: [
      {
        id: 1,
        name: 'Christ the Redeemer',
        description: 'Iconic statue of Jesus Christ atop Corcovado Mountain',
        image: 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.8,
        address: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro',
        googleMapsUrl: 'https://maps.google.com/?q=Christ+the+Redeemer,+Rio+de+Janeiro,+Brazil'
      },
      {
        id: 2,
        name: 'Sugarloaf Mountain',
        description: 'Mountain peak offering panoramic city views',
        image: 'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.5,
        address: 'Urca, Rio de Janeiro',
        googleMapsUrl: 'https://maps.google.com/?q=Sugarloaf+Mountain,+Rio+de+Janeiro,+Brazil'
      },
      {
        id: 3,
        name: 'Copacabana Beach',
        description: 'Famous beach known for its crescent shape',
        image: 'https://images.pexels.com/photos/2868255/pexels-photo-2868255.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.4,
        address: 'Copacabana, Rio de Janeiro',
        googleMapsUrl: 'https://maps.google.com/?q=Copacabana+Beach,+Rio+de+Janeiro,+Brazil'
      },
      {
        id: 4,
        name: 'Ipanema Beach',
        description: 'Trendy beach area with vibrant culture',
        image: 'https://images.pexels.com/photos/2868245/pexels-photo-2868245.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.2,
        address: 'Ipanema, Rio de Janeiro',
        googleMapsUrl: 'https://maps.google.com/?q=Ipanema+Beach,+Rio+de+Janeiro,+Brazil'
      },
      {
        id: 5,
        name: 'Maracanã Stadium',
        description: 'Legendary football stadium',
        image: 'https://images.pexels.com/photos/2868244/pexels-photo-2868244.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.9,
        address: 'Av. Pres. Castelo Branco, Maracanã, Rio de Janeiro',
        googleMapsUrl: 'https://maps.google.com/?q=Maracana+Stadium,+Rio+de+Janeiro,+Brazil'
      },
      {
        id: 6,
        name: 'Tijuca National Park',
        description: 'Urban forest with hiking trails and waterfalls',
        image: 'https://images.pexels.com/photos/2868246/pexels-photo-2868246.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.0,
        address: 'Alto da Boa Vista, Rio de Janeiro',
        googleMapsUrl: 'https://maps.google.com/?q=Tijuca+National+Park,+Rio+de+Janeiro,+Brazil'
      },
      {
        id: 7,
        name: 'Escadaria Selarón',
        description: 'Colorful tiled steps and famous landmark',
        image: 'https://images.pexels.com/photos/2868247/pexels-photo-2868247.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.8,
        address: 'R. Joaquim Silva, s/n - Centro, Rio de Janeiro',
        googleMapsUrl: 'https://maps.google.com/?q=Escadaria+Selaron,+Rio+de+Janeiro,+Brazil'
      },
      {
        id: 8,
        name: 'Museum of Tomorrow',
        description: 'Science museum with futuristic architecture',
        image: 'https://images.pexels.com/photos/2868248/pexels-photo-2868248.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.7,
        address: 'Praça Mauá, 1 - Centro, Rio de Janeiro',
        googleMapsUrl: 'https://maps.google.com/?q=Museum+of+Tomorrow,+Rio+de+Janeiro,+Brazil'
      },
      {
        id: 9,
        name: 'Botanical Garden',
        description: 'Historic garden with rare plants and wildlife',
        image: 'https://images.pexels.com/photos/2868249/pexels-photo-2868249.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.6,
        address: 'R. Jardim Botânico, 1008 - Jardim Botânico, Rio de Janeiro',
        googleMapsUrl: 'https://maps.google.com/?q=Botanical+Garden,+Rio+de+Janeiro,+Brazil'
      },
      {
        id: 10,
        name: 'Lapa Arches',
        description: 'Historic aqueduct and architectural landmark',
        image: 'https://images.pexels.com/photos/2868250/pexels-photo-2868250.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.5,
        address: 'Arcos da Lapa - Centro, Rio de Janeiro',
        googleMapsUrl: 'https://maps.google.com/?q=Lapa+Arches,+Rio+de+Janeiro,+Brazil'
      }
    ]
  },
  {
    name: 'São Paulo',
    country: 'Brazil',
    spots: [
      {
        id: 1,
        name: 'Ibirapuera Park',
        description: 'Urban park with museums and cultural centers',
        image: 'https://images.pexels.com/photos/2868251/pexels-photo-2868251.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.3,
        address: 'Av. Pedro Álvares Cabral - Vila Mariana, São Paulo',
        googleMapsUrl: 'https://maps.google.com/?q=Ibirapuera+Park,+Sao+Paulo,+Brazil'
      },
      {
        id: 2,
        name: 'Pinacoteca',
        description: 'Art museum in historic building',
        image: 'https://images.pexels.com/photos/2868252/pexels-photo-2868252.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.1,
        address: 'Praça da Luz, 2 - Luz, São Paulo',
        googleMapsUrl: 'https://maps.google.com/?q=Pinacoteca,+Sao+Paulo,+Brazil'
      },
      {
        id: 3,
        name: 'Municipal Market',
        description: 'Historic market with gourmet food',
        image: 'https://images.pexels.com/photos/2868253/pexels-photo-2868253.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.9,
        address: 'R. da Cantareira, 306 - Centro Histórico de São Paulo, São Paulo',
        googleMapsUrl: 'https://maps.google.com/?q=Municipal+Market,+Sao+Paulo,+Brazil'
      },
      {
        id: 4,
        name: 'Paulista Avenue',
        description: 'Main financial center with cultural attractions',
        image: 'https://images.pexels.com/photos/2868254/pexels-photo-2868254.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.0,
        address: 'Avenida Paulista - Bela Vista, São Paulo',
        googleMapsUrl: 'https://maps.google.com/?q=Paulista+Avenue,+Sao+Paulo,+Brazil'
      },
      {
        id: 5,
        name: 'MASP',
        description: 'Modern art museum with iconic architecture',
        image: 'https://images.pexels.com/photos/2868255/pexels-photo-2868255.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 9.2,
        address: 'Av. Paulista, 1578 - Bela Vista, São Paulo',
        googleMapsUrl: 'https://maps.google.com/?q=MASP,+Sao+Paulo,+Brazil'
      },
      {
        id: 6,
        name: 'São Paulo Cathedral',
        description: 'Neo-Gothic cathedral in city center',
        image: 'https://images.pexels.com/photos/2868256/pexels-photo-2868256.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.8,
        address: 'Praça da Sé - Sé, São Paulo',
        googleMapsUrl: 'https://maps.google.com/?q=Sao+Paulo+Cathedral,+Sao+Paulo,+Brazil'
      },
      {
        id: 7,
        name: 'Batman Alley',
        description: 'Street art gallery in Vila Madalena',
        image: 'https://images.pexels.com/photos/2868257/pexels-photo-2868257.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.7,
        address: 'R. Gonçalo Afonso - Vila Madalena, São Paulo',
        googleMapsUrl: 'https://maps.google.com/?q=Batman+Alley,+Sao+Paulo,+Brazil'
      },
      {
        id: 8,
        name: 'Liberdade',
        description: 'Japanese district with cultural attractions',
        image: 'https://images.pexels.com/photos/2868258/pexels-photo-2868258.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.6,
        address: 'Liberdade, São Paulo',
        googleMapsUrl: 'https://maps.google.com/?q=Liberdade,+Sao+Paulo,+Brazil'
      },
      {
        id: 9,
        name: 'Football Museum',
        description: 'Interactive museum about Brazilian football',
        image: 'https://images.pexels.com/photos/2868259/pexels-photo-2868259.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.5,
        address: 'Praça Charles Miller - Pacaembu, São Paulo',
        googleMapsUrl: 'https://maps.google.com/?q=Football+Museum,+Sao+Paulo,+Brazil'
      },
      {
        id: 10,
        name: '25 de Março Street',
        description: 'Popular shopping street with various stores',
        image: 'https://images.pexels.com/photos/2868260/pexels-photo-2868260.jpeg?auto=compress&cs=tinysrgb&w=800',
        score: 8.4,
        address: 'Rua 25 de Março - Centro Histórico de São Paulo, São Paulo',
        googleMapsUrl: 'https://maps.google.com/?q=25+de+Marco+Street,+Sao+Paulo,+Brazil'
      }
    ]
  }
];

export const getCityByName = (cityName: string): City | undefined => {
  const normalizedCityName = cityName.trim().toLowerCase();
  return cities.find(city => city.name.toLowerCase() === normalizedCityName);
};