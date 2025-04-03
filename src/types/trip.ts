export interface Itinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Excursion {
  title: string;
  description: string;
  price: number;
  duration: string;
}

export interface Trip {
  id: string;
  imageUrl: string;
  country: string;
  description: string;
  price: number;
  duration: string;
  startDates: string[];
  itinerary: Itinerary[];
  excursions: Excursion[];
}