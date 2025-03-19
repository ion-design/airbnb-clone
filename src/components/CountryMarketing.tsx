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
        "Day 1-2: Rome - Colosseum & Vatican City",
        "Day 3-4: Florence - Art & Architecture",
        "Day 5-6: Venice - Canals & Culture",
        "Day 7-8: Amalfi Coast - Coastal Beauty",
        "Day 9-10: Milan - Fashion & Design"
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80",
      country: "Japan",
      description: "Experience the perfect blend of tradition and modern culture",
      price: 3999,
      duration: "14 days",
      itinerary: [
        "Day 1-2: Tokyo - Imperial Palace & Tsukiji Market",
        "Day 3-4: Kyoto - Temples & Gardens",
        "Day 5-6: Osaka - Daimaru & Osaka Castle",
        "Day 7-8: Hiroshima - Peace Memorial Park",
        "Day 9-10: Nagasaki - Atomic Bomb Museum"
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      country: "Greece",
      description: "Discover ancient ruins and pristine Mediterranean beaches",
      price: 1999,
      duration: "8 days",
      itinerary: [
        "Day 1-2: Athens - Acropolis & Parthenon",
        "Day 3-4: Santorini - Blue Houses & Beaches",
        "Day 5-6: Mykonos - Beaches & Water Sports",
        "Day 7-8: Crete - Ancient City of Knossos",
        "Day 9-10: Rhodes - Beaches & History"
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
        {countries.map((country, index) => (
          <div 
            key={index} 
            className="group cursor-pointer flex gap-8 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            onClick={() => navigate(`/trip/${country.id}`)}
          >
            <div className="w-1/3 aspect-[16/9] overflow-hidden rounded-xl">
              <img 
                src={country.imageUrl} 
                alt={country.country}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-2/3">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold mb-2">{country.country}</h3>
                <p className="text-xl font-semibold text-rose-500">${country.price}</p>
              </div>
              <p className="text-gray-600 mb-4">{country.description}</p>
              <p className="text-sm text-gray-500 mb-2">{country.duration}</p>
              <div className="space-y-1">
                {country.itinerary.slice(0, 3).map((day, i) => (
                  <p key={i} className="text-sm text-gray-600">{day}</p>
                ))}
                <p className="text-sm text-rose-500">+ more</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryMarketing;