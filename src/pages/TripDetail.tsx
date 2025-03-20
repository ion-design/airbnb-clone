import { FC, useState } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';
    import Footer from '../components/Footer';

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
        itinerary: [
          "Day 1-3: Rome - Colosseum, Vatican, Roman Forum",
          "Day 4-6: Florence - Uffizi Gallery, Duomo",
          "Day 7-10: Venice - St. Mark's Square, Gondola Tour"
        ],
        excursions: [
          {
            title: "Vatican Museums Skip-the-Line Tour",
            price: 79,
            duration: "3 hours"
          },
          {
            title: "Tuscany Wine Tasting",
            price: 129,
            duration: "6 hours"
          }
        ]
      };

      return (
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
              <button 
                onClick={() => navigate(-1)}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back
              </button>
            </div>
          </header>

          <main className="flex-grow">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <img 
                    src={tripData.imageUrl}
                    alt={tripData.country}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                  <h1 className="text-3xl font-bold mt-6 mb-4">{tripData.country}</h1>
                  <p className="text-gray-600 mb-6">{tripData.description}</p>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                    <h2 className="text-xl font-semibold mb-4">Itinerary</h2>
                    <div className="space-y-4">
                      {tripData.itinerary.map((day, index) => (
                        <p key={index} className="text-gray-600">{day}</p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Optional Excursions</h2>
                    <div className="space-y-4">
                      {tripData.excursions.map((excursion, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{excursion.title}</h3>
                            <p className="text-gray-500">{excursion.duration}</p>
                          </div>
                          <p className="font-semibold">${excursion.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl p-6 shadow-sm sticky top-4">
                    <h2 className="text-2xl font-bold mb-4">${tripData.price}</h2>
                    <p className="text-gray-600 mb-6">{tripData.duration}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Select Date
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-2 border rounded-lg"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Guests
                        </label>
                        <input
                          type="number"
                          min="1"
                          className="w-full px-4 py-2 border rounded-lg"
                          value={guests}
                          onChange={(e) => setGuests(parseInt(e.target.value))}
                        />
                      </div>

                      <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    };

    export default TripDetail;