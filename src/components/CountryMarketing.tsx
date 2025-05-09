import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface CountryCard {
  imageUrl: string;
  country: string;
  description: string;
}

const CountryMarketing: FC = () => {
  const navigate = useNavigate();
  const countries: CountryCard[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
      country: "Italy",
      description: "Explore historic cities, coastal villages, and stunning countryside"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80",
      country: "Japan",
      description: "Experience the perfect blend of tradition and modern culture"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      country: "Greece",
      description: "Discover ancient ruins and pristine Mediterranean beaches"
    }
  ];

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Inspiration for your next holiday</h2>
        <button 
          onClick={() => navigate('/trips')}
          className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
        >
          Show More
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {countries.map((country, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-[16/9] overflow-hidden rounded-xl">
              <img 
                src={country.imageUrl} 
                alt={country.country}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">{country.country}</h3>
              <p className="text-gray-600">{country.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryMarketing;