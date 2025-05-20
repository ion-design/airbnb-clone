import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface CountryCard {
  imageUrl: string;
  country: string;
  description: string;
  rating: number;
  price: number;
}

const CountryMarketing: FC = () => {
  const navigate = useNavigate();
  const countries: CountryCard[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
      country: "Italy",
      description: "Explore historic cities and villages",
      rating: 4.92,
      price: 120
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80",
      country: "Japan",
      description: "Traditional meets modern culture",
      rating: 4.96,
      price: 150
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      country: "Greece",
      description: "Mediterranean paradise",
      rating: 4.88,
      price: 95
    }
  ];

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Inspiration for your next trip</h2>
        <button 
          onClick={() => navigate('/trips')}
          className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
        >
          Show More
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {countries.map((country, index) => (
          <div key={index} className="space-y-2">
            <div className="aspect-square rounded-xl overflow-hidden relative">
              <img 
                src={country.imageUrl} 
                alt={country.country}
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-lg">{country.country}</span>
              <span className="flex items-center gap-3">
                <span className="text-yellow-500">★</span> {country.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-gray-500">{country.description}</p>
            <p>
              <span className="font-semibold">£{country.price}</span> night
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryMarketing;