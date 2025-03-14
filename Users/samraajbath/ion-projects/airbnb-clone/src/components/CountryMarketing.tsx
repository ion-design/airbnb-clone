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
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
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
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d",
      country: "Japanese Discovery",
      description: "Experience the perfect blend of ancient and modern Japan",
      duration: "12 days",
      itinerary: [
        "Tokyo: Modern culture and traditional temples",
        "Kyoto: Historic temples and tea ceremonies",
        "Osaka: Street food paradise and castle visits",
        "Mount Fuji: Natural wonder and hot springs"
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647",
      country: "Greek Island Hopping",
      description: "Journey through the best of Greek islands and mainland",
      duration: "9 days",
      itinerary: [
        "Athens: Acropolis and ancient history",
        "Santorini: Sunset views and white villages",
        "Mykonos: Beach life and vibrant culture",
        "Delphi: Ancient ruins and mountain views"
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
          View All Trips
        </button>
      </div>
      <div className="flex flex-col gap-8">
        {countries.map((country, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={country.imageUrl} 
                    alt={country.country}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{country.country}</h3>
                  <span className="text-rose-500 font-semibold">{country.duration}</span>
                </div>
                <p className="text-gray-600 mb-4">{country.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700">Trip Highlights:</h4>
                  {country.itinerary.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
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