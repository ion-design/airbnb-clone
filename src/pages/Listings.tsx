import { FC, useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface Property {
  imageUrl: string;
  location: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface FilterOptions {
  minPrice: number;
  maxPrice: number;
  minRating: number;
  location: string;
}

const ListingCard: FC<Property> = ({ imageUrl, location, distance, dates, price, rating }) => {
  return (
    <div className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
      <div className="w-48 h-32 flex-shrink-0">
        <img
          src={imageUrl}
          alt={location}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{location}</h3>
          <div className="flex items-center gap-1">
            <span>★</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-1">{distance}</p>
        <p className="text-gray-500 text-sm">{dates}</p>
        <p className="mt-auto pt-4">
          <span className="font-semibold">${price}</span>
          <span className="text-gray-500"> night</span>
        </p>
      </div>
    </div>
  );
};

const FilterBar: FC<{
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
}> = ({ filters, setFilters }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
            className="w-full p-2 border rounded-md"
            min={0}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
            className="w-full p-2 border rounded-md"
            min={0}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Min Rating</label>
          <input
            type="number"
            value={filters.minRating}
            onChange={(e) => setFilters({ ...filters, minRating: Number(e.target.value) })}
            className="w-full p-2 border rounded-md"
            min={0}
            max={5}
            step={0.1}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="w-full p-2 border rounded-md"
            placeholder="Search by location..."
          />
        </div>
      </div>
    </div>
  );
};

const Listings: FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    location: ''
  });
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);

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
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Maui, Hawaii',
      distance: '4,127 kilometers away',
      dates: 'Aug 20-25',
      price: 1800,
      rating: 4.95,
      coordinates: { lat: 20.7967, lng: -156.3319 }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Jackson Hole, Wyoming',
      distance: '1,723 kilometers away',
      dates: 'Jul 25-30',
      price: 1150,
      rating: 4.89,
      coordinates: { lat: 43.4799, lng: -110.7624 }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Sedona, Arizona',
      distance: '1,923 kilometers away',
      dates: 'Aug 5-10',
      price: 890,
      rating: 4.91,
      coordinates: { lat: 34.8697, lng: -111.7610 }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Martha\'s Vineyard, Massachusetts',
      distance: '2,823 kilometers away',
      dates: 'Jul 15-20',
      price: 1350,
      rating: 4.93,
      coordinates: { lat: 41.3805, lng: -70.6456 }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Napa Valley, California',
      distance: '2,123 kilometers away',
      dates: 'Aug 15-20',
      price: 1550,
      rating: 4.97,
      coordinates: { lat: 38.5025, lng: -122.2654 }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Charleston, South Carolina',
      distance: '2,423 kilometers away',
      dates: 'Jul 10-15',
      price: 925,
      rating: 4.90,
      coordinates: { lat: 32.7765, lng: -79.9311 }
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Vail, Colorado',
      distance: '1,623 kilometers away',
      dates: 'Aug 8-13',
      price: 1275,
      rating: 4.94,
      coordinates: { lat: 39.6433, lng: -106.3781 }
    }
  ];

  useEffect(() => {
    const filtered = properties.filter(property => {
      const matchesPrice = property.price >= filters.minPrice && 
                         (filters.maxPrice === 0 || property.price <= filters.maxPrice);
      const matchesRating = property.rating >= filters.minRating;
      const matchesLocation = filters.location === '' || 
                            property.location.toLowerCase().includes(filters.location.toLowerCase());
      
      return matchesPrice && matchesRating && matchesLocation;
    });
    
    setFilteredProperties(filtered);
  }, [filters]);

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 39.8283,
    lng: -98.5795
  };

  return (
    <div className="flex h-[calc(100vh-80px)]">
      <div className="w-1/2 overflow-y-auto p-8">
        <FilterBar filters={filters} setFilters={setFilters} />
        <div className="space-y-4">
          {filteredProperties.map((property, index) => (
            <div
              key={index}
              onMouseEnter={() => setSelectedProperty(index)}
              onMouseLeave={() => setSelectedProperty(null)}
            >
              <ListingCard {...property} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 relative">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={4}
          >
            {filteredProperties.map((property, index) => (
              <Marker
                key={index}
                position={property.coordinates}
                icon={{
                  url: selectedProperty === index 
                    ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    : 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Listings;
