import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface CountryCard {
  imageUrl: string;
  country: string;
  description: string;
  price: string;
  rating: number;
  bathrooms: number;
}

const CountryMarketing: FC = () => {
  const navigate = useNavigate();
  const countries: CountryCard[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      country: "Italy",
      description: "Explore historic cities, coastal villages, and stunning countryside",
      price: "from $150/night",
      rating: 4.9,
      bathrooms: 2
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d",
      country: "Japan",
      description: "Experience the perfect blend of tradition and modern culture",
      price: "from $180/night",
      rating: 4.8,
      bathrooms: 1
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647",
      country: "Greece",
      description: "Discover ancient ruins and pristine Mediterranean beaches",
      price: "from $130/night",
      rating: 4.7,
      bathrooms: 2
    }
  ];

  return (
    <section className="mt-16 p-8 rounded-3xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Inspiration for your next trip
          </h2>
          <p className="text-gray-600 mt-2">Discover the world's most amazing places</p>
        </div>
        <button 
          onClick={() => navigate('/trips')}
          className="px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full font-semibold"
        >
          Explore More
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {countries.map((country, index) => (
          <div 
            key={index} 
            className="cursor-pointer bg-white rounded-2xl overflow-hidden"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={country.imageUrl} 
                alt={country.country}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-black">{country.country}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 font-medium text-black">{country.rating}</span>
                  </div>
                </div>
                <p className="text-black">{country.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-rose-500 font-semibold">{country.price}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{country.bathrooms} bath</span>
                </div>
                <button className="text-sm text-black font-medium self-end">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryMarketing;