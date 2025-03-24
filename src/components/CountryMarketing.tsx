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
            to={`/trip/${country.id}`} 
            key={country.id} 
            className="block group cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-[16/9] overflow-hidden rounded-xl">
                <img 
                  src={country.imageUrl} 
                  alt={country.country}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:col-span-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{country.country}</h3>
                  <p className="text-gray-600 mb-4">{country.description}</p>
                  <p className="text-gray-600">Visiting: {country.itinerary.join(" → ")}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-semibold">{country.duration}</span>
                  <span className="text-xl font-bold">From ${country.price}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CountryMarketing;