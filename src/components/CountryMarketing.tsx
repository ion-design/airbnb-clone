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
    <section className="mt-16 font-['Courier_New'] bg-black text-green-500 p-8 border-4 border-gray-700">
      <div className="mb-8 border-b-2 border-green-500 pb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl uppercase blink">**** AVAILABLE TRAVEL PACKAGES ****</h2>
          <button 
            onClick={() => navigate('/trips')}
            className="px-4 py-2 bg-green-500 text-black hover:bg-green-400 uppercase"
          >
            [MORE]
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {trips.map((trip) => (
          <div 
            key={trip.id} 
            className="border-2 border-green-500 p-4 cursor-pointer hover:bg-green-900"
            onClick={() => navigate(`/trip/${trip.id}`)}
          >
            <div className="flex flex-col">
              <div className="mb-4 uppercase">
                ================================
                <br />
                DESTINATION: {trip.country}
                <br />
                ================================
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-2">DESC: {trip.description}</p>
                  <p>DURATION: {trip.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl">COST: ${trip.price}.00</p>
                  <p>PER HUMAN UNIT</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-2">***** ITINERARY *****</p>
                <div className="font-mono">
                  {trip.itinerary.slice(0, 3).map((day, index) => (
                    <p key={index}>> {day}</p>
                  ))}
                </div>
              </div>
              <div className="mt-4 text-center">
                [PRESS ENTER TO SELECT THIS PACKAGE]
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center blink">
        *** END OF DATA - SYSTEM READY ***
      </div>
    </section>
  );
};

export default CountryMarketing;