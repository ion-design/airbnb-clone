import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface CountryCard {
  imageUrl: string;
  country: string;
  description: string;
  itinerary: string[];
  duration: string;
}

const CountryMarketing: FC = () => {
  const navigate = useNavigate();
  const countries: CountryCard[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
      country: "Italian Adventure",
      description: "A curated journey through Italy's most iconic destinations",
      duration: "10 days",
      itinerary: [
        "Rome: Ancient ruins and Vatican City",
        "Florence: Renaissance art and Tuscan cuisine",
        "Venice: Canal tours and Murano glass-making",
        "Amalfi Coast: Coastal villages and Mediterranean beaches"
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80",
      country: "Japanese Discovery",
      description: "An immersive exploration of Japan's culture and traditions",
      duration: "12 days",
      itinerary: [
        "Tokyo: Modern districts and traditional temples",
        "Kyoto: Historic temples and tea ceremonies",
        "Osaka: Street food and modern architecture",
        "Mount Fuji: Natural wonders and hot springs"
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      country: "Greek Island Hopping",
      description: "A perfect blend of history, culture, and island life",
      duration: "9 days",
      itinerary: [
        "Athens: Acropolis and ancient sites",
        "Santorini: Sunset views and white-washed villages",
        "Mykonos: Beach life and vibrant nightlife",
        "Crete: Ancient ruins and Mediterranean cuisine"
      ]
    }
  ];

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Curated Travel Experiences</h2>
        <button 
          onClick={() => navigate('/trips')}
          className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
        >
          Show More
        </button>
      </div>
      <div className="flex flex-col space-y-12">
        {countries.map((country, index) => (
          <div key={index} className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="h-full">
                  <img 
                    src={country.imageUrl} 
                    alt={country.country}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">{country.country}</h3>
                  <span className="text-rose-500 font-semibold">{country.duration}</span>
                </div>
                <p className="text-gray-600 text-lg">{country.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Planned Itinerary:</h4>
                  <ul className="space-y-2">
                    {country.itinerary.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryMarketing;