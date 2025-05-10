import { FC, useState } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';

    const TripDetail: FC = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [step, setStep] = useState(1);

      const tripData = {
        'italy-2024': {
          title: "Italian Adventure",
          price: 2499,
          duration: "10 days",
          imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
          itinerary: [
            { day: 1, location: "Rome", activities: ["Colosseum", "Roman Forum", "Welcome Dinner"] },
            { day: 2, location: "Florence", activities: ["Uffizi Gallery", "Duomo", "Wine Tasting"] },
            { day: 3, location: "Venice", activities: ["St. Mark's Basilica", "Gondola Ride"] }
          ],
          excursions: [
            { title: "Tuscany Wine Tour", price: 150 },
            { title: "Cooking Class in Florence", price: 120 },
            { title: "Pompeii Day Trip", price: 180 }
          ]
        },
        // Add other trips...
      };

      const trip = tripData[id as keyof typeof tripData];

      if (!trip) return <div>Trip not found</div>;

      return (
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="mb-8">
            <button 
              onClick={() => navigate(-1)}
              className="text-rose-500 mb-4"
            >
              ← Back to all trips
            </button>
            <h1 className="text-4xl font-bold mb-4">{trip.title}</h1>
            <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-8">
              <img src={trip.imageUrl} alt={trip.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {step === 1 && (
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <h2 className="text-2xl font-semibold mb-6">Itinerary</h2>
                <div className="space-y-6">
                  {trip.itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-rose-500 pl-4">
                      <h3 className="font-bold">Day {day.day} - {day.location}</h3>
                      <ul className="mt-2">
                        {day.activities.map((activity, i) => (
                          <li key={i} className="text-gray-600">{activity}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg h-fit sticky top-8">
                <h3 className="text-2xl font-bold mb-4">${trip.price}</h3>
                <p className="text-gray-600 mb-6">{trip.duration}</p>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors"
                >
                  Continue to Book
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <h2 className="text-2xl font-semibold mb-6">Optional Excursions</h2>
                <div className="space-y-4">
                  {trip.excursions.map((excursion, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <span>{excursion.title}</span>
                      <span className="font-semibold">${excursion.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg h-fit sticky top-8">
                <h3 className="text-2xl font-bold mb-4">Checkout</h3>
                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <button 
                  className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors"
                >
                  Complete Booking
                </button>
              </div>
            </div>
          )}
        </div>
      );
    };

    export default TripDetail;