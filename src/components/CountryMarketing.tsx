import { FC } from 'react';
import { Link } from 'react-router-dom';

interface CountryCard {
  id: string;
  imageUrl: string;
  country: string;
  description: string;
  price: number;
  duration: string;
  itinerary: string[];
}

const CountryMarketing: FC = () => {
  const countries: CountryCard[] = [
    {
      id: 'italy-2024',
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      country: "Italy",
      description: "Explore historic cities, coastal villages, and stunning countryside",
      price: 2499,
      duration: "10 days",
      itinerary: ["Rome", "Florence", "Venice", "Amalfi Coast"]
    },
    {
      id: 'japan-2024',
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d",
      country: "Japan",
      description: "Experience the perfect blend of tradition and modern culture",
      price: 3299,
      duration: "12 days",
      itinerary: ["Tokyo", "Kyoto", "Osaka", "Mount Fuji"]
    },
    {
      id: 'greece-2024',
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647",
      country: "Greece",
      description: "Discover ancient ruins and pristine Mediterranean beaches",
      price: 2799,
      duration: "9 days",
      itinerary: ["Athens", "Santorini", "Mykonos"]
    }
  ];

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-8">Inspiration for your next trip</h2>
      <div className="space-y-8">
        {countries.map((country) => (
          <Link

