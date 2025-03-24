import { FC, useState } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';

    const TripDetails: FC = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [selectedDate, setSelectedDate] = useState<string>('');
      const [guests, setGuests] = useState(1);

      // Mock data - in a real app, this would come from an API
      const tripData = {
        'italy-2024': {
          country: 'Italy',
          price: 2499,
          duration: '10 days',
          itinerary: [
            { day: 1, location: 'Rome', activities: ['Colosseum Tour', 'Roman Forum', 'Welcome Dinner'] },
            { day: 2, location: 'Rome', activities: ['Vatican Museums', 'Sistine Chapel', 'St. Peter\'s Basilica'] },
            { day: 3, location: 'Florence', activities: ['Uffizi Gallery', 'Duomo', 'Walking Tour'] },
          ],
          included: ['Hotels', 'Breakfast daily', 'Local guide', 'Transportation'],
          dates: ['Jun 15, 2024', 'Jul 20, 2024', 'Aug 10, 2024'],
        },
        // Add other trips as needed
      };

      const trip = tripData[id as keyof typeof tripData];

      if (!trip) {
        return <div>Trip not found</div>;
      }

      const handleBooking = () => {
        // Handle booking logic
        alert('Booking confirmed!');
        navigate('/');
      };

      return (
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-6">{trip.country} Adventure</h1>
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
                  <div className="space-y-4">
                    {trip.itinerary.map((day) => (
                      <div key={day.day} className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold mb-2">Day {day.day} - {day.location}</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {day.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
                  <ul className="grid grid-cols-2 gap-4">
                    {trip.included.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
                <h3 className="text-2xl font-bold mb-2">${trip.price}</h3>
                <p className="text-gray-600 mb-6">{trip.duration}</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Date</label>
                    <select 
                      className="w-full p-2 border rounded"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    >
                      <option value="">Select a date</option>
                      {trip.dates.map((date) => (
                        <option key={date} value={date}>{date}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Guests</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="w-full p-2 border rounded"
                    />
                  </div>

                  <button
                    onClick={handleBooking}
                    className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700"
                  >
                    Book Now
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    You won't be charged yet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default TripDetails;