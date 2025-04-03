import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Trip } from '../types/trip';

const TripDetail: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedExcursions, setSelectedExcursions] = useState<string[]>([]);

  // Mock trip data - in a real app, this would come from an API
  const trips: Record<string, Trip> = {
    'italy-2024': {
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
        {
          day: 2,
          title: "Vatican & Roman Forum",
          description: "Explore the heart of Roman history",
          activities: ["Vatican Museums", "Sistine Chapel", "Roman Forum tour"]
        }
      ],
      excursions: [
        {
          title: "Vatican Museums Tour",
          description: "Private guided tour of the Vatican Museums",
          price: 89,
          duration: "3 hours"
        },
        {
          title: "Colosseum Night Tour",
          description: "Exclusive night access to the Colosseum",
          price: 99,
          duration: "2 hours"
        }
      ]
    }
  };

  const trip = trips[id || ''];

  if (!trip) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Trip not found</h1>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  const handleExcursionToggle = (title: string) => {
    setSelectedExcursions(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const calculateTotal = () => {
    const excursionsTotal = selectedExcursions.reduce((total, title) => {
      const excursion = trip.excursions.find(e => e.title === title);
      return total + (excursion?.price || 0);
    }, 0);
    return trip.price + excursionsTotal;
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <img 
            src={trip.imageUrl} 
            alt={trip.country} 
            className="w-full h-[400px] object-cover rounded-xl"
          />
          <h1 className="text-2xl font-semibold text-[#A25B5B] mt-6 mb-4">{trip.country}</h1>
          <p className="text-gray-600 mb-8">{trip.description}</p>
          
          <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
          <div className="space-y-6">
            {trip.itinerary.map((day) => (
              <div key={day.day} className="border-l-4 border-rose-500 pl-4">
                <h3 className="font-semibold">Day {day.day}: {day.title}</h3>
                <p className="text-gray-600">{day.description}</p>
                <ul className="mt-2">
                  {day.activities.map((activity, index) => (
                    <li key={index} className="text-gray-500">• {activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky top-8 h-fit bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">${trip.price}</h3>
          <p className="text-gray-600 mb-6">{trip.duration}</p>
          
          <select 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-3 border rounded-lg mb-6"
          >
            <option value="">Select a date</option>
            {trip.startDates.map(date => (
              <option key={date} value={date}>
                {new Date(date).toLocaleDateString()}
              </option>
            ))}
          </select>

          <h4 className="font-semibold mb-4">Optional Excursions</h4>
          {trip.excursions.map((excursion) => (
            <div key={excursion.title} className="mb-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selectedExcursions.includes(excursion.title)}
                  onChange={() => handleExcursionToggle(excursion.title)}
                  className="mt-1"
                />
                <div>
                  <div className="font-semibold">{excursion.title}</div>
                  <div className="text-sm text-gray-500">${excursion.price}</div>
                </div>
              </label>
            </div>
          ))}

          <div className="border-t pt-4 mt-6">
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold">${calculateTotal()}</span>
            </div>
            <button
              disabled={!selectedDate}
              onClick={() => {/* Handle booking */}}
              className="w-full bg-rose-500 text-white py-3 rounded-lg disabled:opacity-50"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;