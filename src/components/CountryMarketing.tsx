import { FC } from 'react';
import { Link } from 'react-router-dom';

interface TripDetails {
  imageUrl: string;
  country: string;
  description: string;
  price: number;
  duration: string;
  id: string;
  itinerary: string[];
}

const CountryMarketing: FC = () => {
  const trips: TripDetails[] = [
    {
      id: 'italy-cultural-tour',
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      country: "Italy",
      description: "Explore historic cities, coastal villages, and stunning countryside",
      price: 2499,
      duration: "10 days",
      itinerary: [
        "Day 1-2: Rome - Colosseum & Vatican",
        "Day 3-4: Florence - Art & Architecture",
        "Day 5-6: Venice - Canals & Culture",
        "Day 7-8: Tuscany - Wine & Countryside",
        "Day 9-10: Amalfi Coast"
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d",
      country: "Japan",
      description: "Experience the perfect blend of tradition and modern culture",
      price: 3999,
      duration: "14 days",
      itinerary: [
        "Day 1-2: Tokyo - Shibuya Crossing",
        "Day 3-4: Kyoto - Temples & Gardens",
        "Day 5-6: Osaka - Daimaru",
        "Day 7-8: Hiroshima - Peace Memorial Park",
        "Day 9-10: Nagasaki - Atomic Bomb Museum"
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647",
      country: "Greece",
      description: "Discover ancient ruins and pristine Mediterranean beaches",
      price: 2999,
      duration: "12 days",
      itinerary: [
        "Day 1-2: Athens - Acropolis",
        "Day 3-4: Santorini - Blue Huts",
        "Day 5-6: Mykonos - Beaches",
        "Day 7-8: Crete - Knossos",
        "Day 9-10: Rhodes - Old Town"
      ]
    }
  ];

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-8">Inspiration for your next trip</h2>
      <div className="grid grid-cols-1 gap-8">
        {trips.map((trip) => (
          <Link 
            to={`/trip/${trip.id}`} 
            key={trip.id} 
            className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 aspect-[16/9] md:aspect-square overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-t-none">
                <img 
                  src={trip.imageUrl} 
                  alt={trip.country}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold mb-2">{trip.country}</h3>
                  <div className="text-xl font-bold text-rose-500">
                    ${trip.price}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{trip.description}</p>
                <div className="text-sm text-gray-500">
                  <p className="font-semibold mb-2">Duration: {trip.duration}</p>
                  <ul className="list-disc pl-4">
                    {trip.itinerary.slice(0, 3).map((day, index) => (
                      <li key={index}>{day}</li>
                    ))}
                    <li className="text-rose-500">... and more</li>
                  </ul>
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