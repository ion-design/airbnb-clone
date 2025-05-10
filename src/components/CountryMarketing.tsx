import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const countries: CountryCard[] = [
    {
      id: "italy-2024",
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      country: "Italy",
      description: "Explore historic cities, coastal villages, and stunning countryside",
      price: 2499,
      duration: "10 days",
      itinerary: [
        "Day 1-3: Rome - Colosseum, Vatican, Roman Forum",
        "Day 4-6: Florence - Uffizi Gallery, Duomo",
        "Day 7-10: Venice - St. Mark's Square, Gondola Tour"
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80",
      country: "Japan",
      description: "Experience the perfect blend of tradition and modern culture",
      price: 3999,
      duration: "14 days",
      itinerary: [
        "Day 1-3: Tokyo - Shibuya Crossing, Tsukiji Fish Market",
        "Day 4-6: Kyoto - Fushimi Inari Shrine, Arashiyama Bamboo Grove",
        "Day 7-10: Hiroshima - Peace Memorial Park, Hiroshima Castle"
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      country: "Greece",
      description: "Discover ancient ruins and pristine Mediterranean beaches",
      price: 2999,
      duration: "12 days",
      itinerary: [
        "Day 1-3: Athens - Acropolis, Parthenon",
        "Day 4-6: Santorini - Blue Grotto, Oia",
        "Day 7-10: Mykonos - Beaches, Wine Tasting"
      ]
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
      <div className="flex flex-col gap-8">
        {countries.map((country) => (
          <div 
            key={country.id} 
            className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
            onClick={() => navigate(`/trip/${country.id}`)}
          >
            <div className="flex">
              <div className="w-1/3">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={country.imageUrl} 
                    alt={country.country}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="w-2/3 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{country.country}</h3>
                    <p className="text-gray-600 mb-4">{country.description}</p>
                    <p className="text-gray-500">{country.duration}</p>
                  </div>
                  <p className="text-xl font-semibold text-rose-500">
                    ${country.price}
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Trip Highlights:</h4>
                  <ul className="text-sm text-gray-600">
                    {country.itinerary.slice(0, 2).map((item, index) => (
                      <li key={index} className="mb-1">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryMarketing;