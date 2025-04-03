import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trip } from '../types/trip';

const CountryMarketing: FC = () => {
  const navigate = useNavigate();
  
  const trips: Trip[] = [
    {
      id: "italy-2024",
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      country: "Italy",
      description: "Explore historic cities, coastal villages, and stunning countryside",
      price: 2499,
      duration: "10 days",
      startDates: ["2024-06-15", "2024-07-01", "2024-08-15"],
      itinerary: [
        {
          day: 1,
          title: "Rome Arrival",
          description: "Welcome to the Eternal City",
          activities: ["Airport transfer", "Welcome dinner", "Evening walk"]
        },
        // ... rest of itinerary
      ],
      excursions: [
        {
          title: "Vatican Museums Tour",
          description: "Private guided tour of the Vatican Museums",
          price: 89,
          duration: "3 hours"
        }
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d",
      country: "Japan",
      description: "Experience the perfect blend of tradition and modern culture",
      price: 1999,
      duration: "12 days",
      startDates: ["2024-09-01", "2024-10-15", "2024-11-15"],
      itinerary: [
        {
          day: 1,
          title: "Tokyo Arrival",
          description: "Welcome to the capital of Japan",
          activities: ["Airport transfer", "Welcome dinner", "Evening walk"]
        },
        // ... rest of itinerary
      ],
      excursions: [
        {
          title: "Tokyo Tower Tour",
          description: "Guided tour of the Tokyo Tower",
          price: 79,
          duration: "2 hours"
        }
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647",
      country: "Greece",
      description: "Discover ancient ruins and pristine Mediterranean beaches",
      price: 1499,
      duration: "8 days",
      startDates: ["2024-05-15", "2024-06-15", "2024-07-15"],
      itinerary: [
        {
          day: 1,
          title: "Athens Arrival",
          description: "Welcome to the birthplace of democracy",
          activities: ["Airport transfer", "Welcome dinner", "Evening walk"]
        },
        // ... rest of itinerary
      ],
      excursions: [
        {
          title: "Acropolis Tour",
          description: "Private guided tour of the Acropolis",
          price: 69,
          duration: "3 hours"
        }
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
      <div className="grid grid-cols-1 gap-8">
        {trips.map((trip) => (
          <div 
            key={trip.id} 
            className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
            onClick={() => navigate(`/trip/${trip.id}`)}
          >
            <div className="flex">
              <div className="w-1/3">
                <div className="aspect-[4/3] overflow-hidden">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryMarketing;