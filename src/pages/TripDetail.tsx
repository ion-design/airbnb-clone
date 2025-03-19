import { FC, useState } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';

    const TripDetail: FC = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [step, setStep] = useState(1);

      // This would typically come from an API
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

      const steps = ["Trip Details", "Excursions", "Payment"];

      return (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <button 
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back
            </button>
          </div>

          <div className="flex justify-between items-center mb-8">
            {steps.map((s, i) => (
              <div 
                key={i}
                className={`flex items-center ${i < step ? 'text-rose-500' : 'text-gray-400'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                  ${i < step ? 'border-rose-500 bg-rose-500 text-white' : 'border-gray-300'}`}>
                  {i + 1}
                </div>
                <span className="ml-2">{s}</span>
                {i < steps.length - 1 && <div className="w-24 h-1 mx-4 bg-gray-200" />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={tripData.imageUrl} 
                  alt={tripData.country}
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-4">{tripData.country}</h1>
                <p className="text-xl text-gray-600 mb-6">{tripData.description}</p>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Itinerary</h2>
                  {tripData.itinerary.map((day, index) => (
                    <p key={index} className="text-gray-600">{day}</p>
                  ))}
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="mt-8 w-full py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
                >
                  Continue to Excursions
                </button>
              </div>
            </div>
          )}

          {/* Add more steps for excursions and payment */}
        </div>
      );
    };

    export default TripDetail;