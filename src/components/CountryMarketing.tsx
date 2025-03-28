import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface CountryCard {
  id: string;
  imageUrl: string;
  country: string;
  description: string;
  price: number;
  duration: string;
  highlights: string[];
}

const CountryMarketing: FC = () => {
  const navigate = useNavigate();
  const countries: CountryCard[] = [
    {
      id: "italy-2024",
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      country: "Italy",
      description: "Explore historic cities, coastal villages, and stunning countryside",
      price: 2499,
      duration: "10 days",
      highlights: ["Rome", "Florence", "Venice", "Tuscany"]
    },
    {
      id: "japan-2024",
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d",
      country: "Japan",
      description: "Experience the perfect blend of tradition and modern culture",
      price: 3299,
      duration: "12 days",
      highlights: ["Tokyo", "Kyoto", "Mount Fuji", "Osaka"]
    },
    {
      id: "greece-2024",
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647",
      country: "Greece",
      description: "Discover ancient ruins and pristine Mediterranean beaches",
      price: 2199,
      duration: "8 days",
      highlights: ["Athens", "Santorini", "Mykonos"]
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
      <div className="space-y-8">
        {countries.map((country, index) => (
          <div 
            key={index} 
            className="group cursor-pointer flex gap-8 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            onClick={() => navigate(`/trip/${country.id}`)}
          >
            <div className="w-96 h-64 overflow-hidden rounded-xl">
              <img 
                src={country.imageUrl} 
                alt={country.country}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 py-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold mb-2">{country.country}</h3>
                <div className="text-xl font-semibold text-rose-500">
                  ${country.price}
                  <span className="text-sm text-gray-500">/person</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{country.description}</p>
              <p className="text-gray-700 mb-4">{country.duration}</p>
              <div className="flex gap-2 flex-wrap">
                {country.highlights.map((highlight, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryMarketing;