import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface CountryCard {
  imageUrl: string;
  country: string;
  description: string;
  price: string;
  rating: number;
  bathrooms: number;
  hasJapaneseToilet?: boolean;
}

const CountryMarketing: FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const images = sectionRef.current.querySelectorAll('.country-image');
      const cards = sectionRef.current.querySelectorAll('.country-card');
      
      images.forEach((image, index) => {
        const card = cards[index];
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          const speed = 0.15;
          const yPos = (window.innerHeight - rect.top) * speed;
          (image as HTMLElement).style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      bathrooms: 1,
      hasJapaneseToilet: true
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
    <section ref={sectionRef} className="mt-16 rounded-3xl bg-white overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-red-500">
            Inspiration for your next trip
          </h2>
          <p className="text-gray-600 mt-2">Discover the world's most amazing places</p>
        </div>
        <button 
          onClick={() => navigate('/trips')}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold"
        >
          Explore More
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {countries.map((country, index) => (
          <div 
            key={index} 
            className="country-card cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm transform transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={country.imageUrl} 
                alt={country.country}
                className="country-image w-full h-full object-cover transition-transform duration-200"
              />
            </div>
            <div className="p-6 bg-white relative z-10">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-900">{country.country}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 font-medium text-gray-900">{country.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600">{country.description}</p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{country.price}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{country.bathrooms} baths</span>
                  {country.hasJapaneseToilet && (
                    <>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600">Smart Toilet</span>
                    </>
                  )}
                </div>
                <button className="text-sm text-gray-700 font-medium justify-self-end">
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