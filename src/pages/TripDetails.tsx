import { FC } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';

    const TripDetails: FC = () => {
      const { id } = useParams();
      const navigate = useNavigate();

      // This would typically come from an API or central state management
      const tripDetails = {
        id: 'italy-cultural-tour',
        imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        country: "Italy",
        description: "Explore historic cities, coastal villages, and stunning countryside",
        price: 2499,
        duration: "10 days",
        itinerary: [
          "Day 1-2: Rome - Colosseum & Vatican",
          "Day 3-4: Florence - Art & Architecture",
          "Day 5-6: Venice - Canals & Culture",
          "Day 7-8: Tuscany - Wine & Countryside",
          "Day 9-10: Amalfi Coast"
        ],
        excursions: [
          {
            title: "Vatican Museums Tour",
            duration: "4 hours",
            price: 89
          },
          {
            title: "Tuscany Wine Tasting",
            duration: "6 hours",
            price: 129
          }
        ]
      };

      return (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button 
            onClick={() => navigate(-1)}
            className="mb-6 text-rose-500 font-semibold"
          >
            ← Back to all trips
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src={tripDetails.imageUrl} 
                alt={tripDetails.country}
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{tripDetails.country}</h1>
                <p className="text-xl text-gray-600">{tripDetails.description}</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Trip Details</h2>
                <div className="space-y-4">
                  <p className="text-xl">Duration: {tripDetails.duration}</p>
                  <p className="text-2xl font-bold text-rose-500">
                    ${tripDetails.price} per person
                  </p>
                  <button 
                    className="w-full bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
                <ul className="space-y-3">
                  {tripDetails.itinerary.map((day, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="text-rose-500">•</span>
                      <span>{day}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Optional Excursions</h2>
                <div className="space-y-4">
                  {tripDetails.excursions.map((excursion, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{excursion.title}</h3>
                          <p className="text-gray-600">{excursion.duration}</p>
                        </div>
                        <p className="font-semibold">${excursion.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default TripDetails;