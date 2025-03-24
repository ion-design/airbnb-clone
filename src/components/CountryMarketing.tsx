import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface TripCard {
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
  const trips: TripCard[] = [
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
        "Day 7-8: Amalfi Coast - Scenic Beauty",
        "Day 9-10: Milan - Fashion & Design"
      ]
    },
    {
      id: "japan-2024",
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d",
      country: "Japan",
      description: "Experience the perfect blend of tradition and modern culture",
      price: 3299,
      duration: "12 days",
      itinerary: [
        "Day 1-3: Tokyo - Modern Japan",
        "Day 4-5: Kyoto - Traditional Culture",
        "Day 6-7: Osaka - Food & Entertainment",
        "Day 8-9: Hakone - Mt. Fuji & Onsen",
        "Day 10-12: Hiroshima & Miyajima"
      ]
    },
    {
      id: "greece-2024",
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647",
      country: "Greece",
      description: "Discover ancient ruins and pristine Mediterranean beaches",
      price: 2799,
      duration: "11 days",
      itinerary: [
        "Day 1-3: Athens - Ancient History",
        "Day 4-5: Santorini - Island Paradise",
        "Day 6-7: Mykonos - Beach Life",
        "Day 8-9: Crete - Minoan Culture",
        "Day 10-11: Delphi - Ancient Oracle"
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
        {trips.map((trip) => (
          <div 
            key={trip.id} 
            className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
            onClick={() => navigate(`/trip/${trip.id}`)}
          >
            <div className="flex">
              <div className="w-1/3">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={trip.imageUrl} 
                    alt={trip.country}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="w-2/3 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{trip.country}</h3>
                    <p className="text-gray-600 mb-4">{trip.description}</p>
                    <p className="text-gray-500">{trip.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-rose-500">${trip.price}</p>
                    <p className="text-gray-500">per person</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-semibold mb-2">Trip Highlights:</p>
                  <ul className="text-sm text-gray-600">
                    {trip.itinerary.slice(0, 3).map((day, index) => (
                      <li key={index}>{day}</li>
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