import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const TripDetail: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState<'details' | 'checkout'>('details');

  // This would typically come from an API
  const tripData = {
    "italy-2024": {
      title: "Italian Cultural Experience",
      country: "Italy",
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      description: "Explore historic cities, coastal villages, and stunning countryside",
      price: 2499,
      duration: "10 days",
      dates: "Multiple departures available",
      included: ["Accommodation", "Local transport", "Expert guide", "Selected meals"],
      itinerary: [
        "Day 1-3: Rome - Colosseum, Vatican, Roman Forum",
        "Day 4-6: Florence - Uffizi Gallery, Duomo",
        "Day 7-10: Venice - St. Mark's Square, Grand Canal"
      ],
      excursions: [
        { name: "Vatican Museums After Hours", price: 89 },
        { name: "Tuscan Cooking Class", price: 120 },
        { name: "Venetian Mask Workshop", price: 75 }
      ]
    }
  }[id || ""] || null;

  if (!tripData) {
    return <div className="text-center py-12">Trip not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-900"
          >
            ← Back
          </button>
          <h1 className="text-xl font-semibold">{tripData.title}</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="flex-grow">
        {step === 'details' ? (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <img 
                  src={tripData.imageUrl} 
                  alt={tripData.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
                  {tripData.itinerary.map((day, index) => (
                    <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
                      {day}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="sticky top-8 h-fit">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold mb-2">${tripData.price}</div>
                  <p className="text-gray-600 mb-6">{tripData.duration}</p>
                  <button
                    onClick={() => setStep('checkout')}
                    className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors"
                  >
                    Book Now
                  </button>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Included:</h3>
                    <ul className="text-gray-600">
                      {tripData.included.map((item, index) => (
                        <li key={index} className="mb-1">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-8">Complete your booking</h2>
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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default TripDetail;