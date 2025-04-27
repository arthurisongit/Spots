export interface Spot {
  id: number;
  name: string;
  description: string;
  image: string;
  score: number;
  address: string;
  googleMapsUrl: string;
}

export interface City {
  name: string;
  country: string;
  spots: Spot[];
}