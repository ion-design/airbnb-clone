import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TripDetail: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Mock data - in a real app, this would come from an API
  const tripData = {
    id: "italy-2024",
    title: "Italian Adventure",
    imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    price: 2499,
    duration: "10 days",
    description: "Experience the best of Italy with our carefully curated tour package",
    itinerary: [
      "Day 1-2: Rome - Colosseum & Vatican City",
      "Day 3-4: Florence - Art & Architecture",
      "Day 5-6: Venice - Canals & Culture",
      "Day 7-8: Amalfi Coast",
      "Day 9-10: Sicily"
    ],
    excursions: [
      {
        title: "Vatican Museums Skip-the-Line Tour",
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

  const steps = ["Trip Details", "Customization", "Payment"];

  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      <div className="mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="text-rose-500 mb-4"
        >
          ← Back to trips
        </button>
        <h1 className="text-3xl font-bold mb-2">{tripData.title}</h1>
        <div className="flex gap-4 text-gray-600">
          <span>{tripData.duration}</span>
          <span>|</span>
          <span>${tripData.price} per person</span>
        </div>
      </div>

      {/* Checkout Progress */}
      <div className="flex justify-between mb-12">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`flex-1 text-center ${
              currentStep > index + 1 ? 'text-rose-500' : ''
            }`}
          >
            <div className="relative">
              <div className={`w-8 h-8 rounded-full ${
                currentStep >= index + 1 ? 'bg-rose-500' : 'bg-gray-300'
              } text-white flex items-center justify-center mx-auto`}>
                {index + 1}
              </div>
              <div className="mt-2">{step}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Content based on current step */}
      {currentStep === 1 && (
        <div className="grid grid-cols-2 gap-12">
          <div>
            <img 
              src={tripData.imageUrl}
              alt={tripData.title}
              className="w-full h-96 object-cover rounded-xl mb-8"
            />
            <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
            <ul className="space-y-4">
              {tripData.itinerary.map((day, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-rose-500">•</span>
                  {day}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Optional Excursions</h2>
            <div className="space-y-4">
              {tripData.excursions.map((excursion, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold">{excursion.title}</h3>
                  <p className="text-gray-600">{excursion.duration}</p>
                  <p className="text-rose-500 font-semibold">${excursion.price}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setCurrentStep(2)}
              className="w-full mt-8 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
            >
              Continue to Customization
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripDetail;