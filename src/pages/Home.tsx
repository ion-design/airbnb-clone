import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import CountryMarketing from '../components/CountryMarketing';

const Home: FC = () => {
  const navigate = useNavigate();
  const properties = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Miami Beach, Florida',
      distance: '3,127 kilometers away',
      dates: 'Aug 10-15',
      price: 950,
      rating: 4.88,
      coordinates: { lat: 25.7907, lng: -80.1300 }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      location: 'Aspen, Colorado',
      distance: '1,523 kilometers away',
      dates: 'Jul 20-25',
      price: 1450,
      rating: 4.96,
      coordinates: { lat: 39.1911, lng: -106.8175 }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Lake Tahoe, Nevada',
      distance: '1,828 kilometers away',
      dates: 'Aug 1-6',
      price: 875,
      rating: 4.92,
      coordinates: { lat: 39.0968, lng: -120.0324 }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
      location: 'Malibu, California',
      distance: '2,043 kilometers away',
      dates: 'Jul 14-19',
      price: 1250,
      rating: 4.98,
      coordinates: { lat: 34.0259, lng: -118.7798 }
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-8 py-8 flex-grow">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            {...property}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate('/listings')}
          className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
        >
          Show More Properties
        </button>
      </div>
      <CountryMarketing />
    </main>
  );
};

export default Home;
