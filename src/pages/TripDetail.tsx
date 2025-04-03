import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Trip } from '../types/trip';

const TripDetail: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedExcursions, setSelectedExcursions] = useState<string[]>([]);

  // In a real app, this would come from an API
  const trip: Trip | undefined = {
    // ... trip data matching the ID
  };

  if (!trip) {
    return <div>Trip not found</div>;
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
          <h1 className="text-3xl font-bold mt-6 mb-4">{trip.country}</h1>
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