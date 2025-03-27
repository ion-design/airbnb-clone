import { FC, useState } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';

    const TripDetail: FC = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [selectedDate, setSelectedDate] = useState<string>('');
      const [guests, setGuests] = useState(1);

      // This would typically come from an API
      const tripData = {
        id: "italy-2024",
        imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        country: "Italy",
        description: "Explore historic cities, coastal villages, and stunning countryside",
        price: 2499,
        duration: "10 days",
        highlights: ["Rome", "Florence", "Venice", "Tuscany"],
        itinerary: [
          { day: 1, title: "Arrival in Rome", description: "Welcome dinner and city orientation" },
          { day: 2, title: "Ancient Rome", description: "Colosseum and Roman Forum tour" },
          // ... more days
        ],
        dates: ["2024-06-15", "2024-07-01", "2024-07-15"],
        included: ["Hotels", "Breakfast", "Local transport", "Guide"],
      };

      return (
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-3 gap-12">
            <div className="col-span-2">
              <h1 className="text-4xl font-bold mb-6">{tripData.country} Adventure</h1>
              <img 
                src={tripData.imageUrl} 
                alt={tripData.country}
                className="w-full h-96 object-cover rounded-xl mb-8"
              />
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Trip Overview</h2>
                  <p className="text-gray-600">{tripData.description}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
                  <div className="space-y-4">
                    {tripData.itinerary.map((day) => (
                      <div key={day.day} className="border-l-4 border-rose-500 pl-4">
                        <h3 className="font-semibold">Day {day.day}: {day.title}</h3>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className="sticky top-8 h-fit">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold mb-6">
                  ${tripData.price}
                  <span className="text-lg text-gray-500">/person</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Date</label>
                    <select 
                      className="w-full p-3 border rounded-lg"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    >
                      <option value="">Choose a date</option>
                      {tripData.dates.map((date) => (
                        <option key={date} value={date}>{date}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Guests</label>
                    <input 
                      type="number" 
                      min="1"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>

                  <button 
                    className="w-full py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
                    onClick={() => navigate('/checkout')}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default TripDetail;