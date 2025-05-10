import { FC, useState } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';

    const TripDetail: FC = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [step, setStep] = useState(1);

      const tripData = {
        'italy-2024': {
          title: "Italian Discovery",
          price: 2499,
          duration: "10 days",
          imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
          itinerary: [
            { day: 1, location: "Rome", activities: ["Colosseum", "Roman Forum", "Welcome Dinner"] },
            { day: 2, location: "Florence", activities: ["Uffizi Gallery", "Duomo", "Wine Tasting"] },
            { day: 3, location: "Venice", activities: ["St. Mark's Basilica", "Gondola Ride"] }
          ],
          excursions: [
            { title: "Tuscan Cooking Class", price: 129 },
            { title: "Pompeii Day Trip", price: 149 }
          ]
        },
        // Add other trips here
      };

      const trip = tripData[id as keyof typeof tripData];

      const renderCheckoutStep = () => {
        switch(step) {
          case 1:
            return (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Select Your Dates</h3>
                {/* Add date picker here */}
              </div>
            );
          case 2:
            return (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Choose Excursions</h3>
                {trip.excursions.map((excursion, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded">
                    <span>{excursion.title}</span>
                    <span>${excursion.price}</span>
                  </div>
                ))}
              </div>
            );
          case 3:
            return (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Payment Details</h3>
                {/* Add payment form here */}
              </div>
            );
        }
      };

      if (!trip) return <div>Trip not found</div>;

      return (
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold">{trip.title}</h1>
              <img src={trip.imageUrl} className="w-full rounded-xl" alt={trip.title} />
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Itinerary</h2>
                {trip.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-rose-500 pl-4">
                    <h3 className="font-semibold">Day {day.day} - {day.location}</h3>
                    <ul className="mt-2">
                      {day.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="sticky top-8 h-fit">
              <div className="border rounded-xl p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${trip.price}</span>
                  <span>{trip.duration}</span>
                </div>
                
                {renderCheckoutStep()}

                <div className="flex gap-4">
                  {step > 1 && (
                    <button 
                      onClick={() => setStep(step - 1)}
                      className="flex-1 px-4 py-2 border border-rose-500 text-rose-500 rounded-lg"
                    >
                      Back
                    </button>
                  )}
                  <button 
                    onClick={() => step < 3 ? setStep(step + 1) : navigate('/confirmation')}
                    className="flex-1 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
                  >
                    {step === 3 ? 'Complete Booking' : 'Continue'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default TripDetail;