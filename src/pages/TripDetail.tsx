import { FC, useState } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';

    const TripDetail: FC = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [step, setStep] = useState(1);

      // Mock data - in real app, fetch based on id
      const tripData = {
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
          "Day 7-8: Amalfi Coast - Coastal Beauty",
          "Day 9-10: Milan - Fashion & Design"
        ],
        excursions: [
          {
            title: "Vatican Museums Tour",
            price: 89,
            duration: "3 hours"
          },
          {
            title: "Tuscany Wine Tasting",
            price: 120,
            duration: "6 hours"
          }
        ]
      };

      return (
        <div className="max-w-7xl mx-auto px-8 py-12">
          <button 
            onClick={() => navigate(-1)}
            className="mb-8 text-rose-500 hover:text-rose-600"
          >
            ← Back to trips
          </button>
          
          {step === 1 ? (
            <div className="grid grid-cols-2 gap-12">
              <div>
                <img 
                  src={tripData.imageUrl} 
                  alt={tripData.country}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="mt-8 space-y-6">
                  <h1 className="text-4xl font-bold">{tripData.country}</h1>
                  <p className="text-xl text-gray-600">{tripData.description}</p>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Itinerary</h2>
                    {tripData.itinerary.map((day, i) => (
                      <p key={i} className="text-gray-600">{day}</p>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg h-fit sticky top-8">
                <h3 className="text-2xl font-semibold mb-4">Trip Summary</h3>
                <div className="space-y-4 mb-8">
                  <p className="flex justify-between">
                    <span>Base price</span>
                    <span>${tripData.price}</span>
                  </p>
                  <p className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${tripData.price}</span>
                  </p>
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
                >
                  Continue to Booking
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8">Complete your booking</h2>
              {/* Add booking form here */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>
                {/* Add more form fields */}
                <button 
                  type="submit"
                  className="w-full py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
                >
                  Complete Booking
                </button>
              </form>
            </div>
          )}
        </div>
      );
    };

    export default TripDetail;