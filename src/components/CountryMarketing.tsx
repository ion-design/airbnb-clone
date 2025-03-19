import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface CountryCard {
  imageUrl: string;
  country: string;
  description: string;
  itinerary: string[];
  price: number;
}

const CountryMarketing: FC = () => {
  const navigate = useNavigate();
  const countries: CountryCard[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
      country: "Italy",
      description: "Explore historic cities, coastal villages, and stunning countryside",
      itinerary: ["Rome - 3 days", "Florence - 2 days", "Venice - 2 days", "Amalfi Coast - 3 days"],
      price: 2499
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80",
      country: "Japan",
      description: "Experience the perfect blend of tradition and modern culture",
      itinerary: ["Tokyo - 4 days", "Kyoto - 3 days", "Osaka - 2 days", "Mount Fuji - 1 day"],
      price: 2899
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      country: "Greece",
      description: "Discover ancient ruins and pristine Mediterranean beaches",
      itinerary: ["Athens - 3 days", "Santorini - 3 days", "Mykonos - 2 days", "Crete - 2 days"],
      price: 1999
    }
  ];

  return (
    <section className="mt-16 animate-slide-up">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Inspiration for your next trip</h2>
        <button 
          onClick={() => navigate('/trips')}
          className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
        >
          Show More
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {countries.map((country, index) => (
          <div key={index} className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-hover transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
              <img 
                src={country.imageUrl} 
                alt={country.country}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{country.country}</h3>
              <p className="text-gray-600 mb-4">{country.description}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Itinerary:</h4>
                  <ul className="space-y-1">
                    {country.itinerary.map((item, i) => (
                      <li key={i} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xl font-bold text-rose-500">
                    ${country.price}
                    <span className="text-sm font-normal text-gray-600"> per person</span>
                  </p>
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