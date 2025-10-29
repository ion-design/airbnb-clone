import PropertyCard from '../components/PropertyCard';

export default function PropertyShowcase() {
  const sampleProperties = [
    {
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      location: 'Modern Loft',
      distance: '1.2 km away',
      dates: '15-20 Jan',
      price: 185,
      rating: 4.9,
    },
    {
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      location: 'Seaside Villa',
      distance: '3.5 km away',
      dates: '22-28 Jan',
      price: 245,
      rating: 5.0,
    },
    {
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      location: 'Mountain Cabin',
      distance: '8.1 km away',
      dates: '5-10 Feb',
      price: 165,
      rating: 4.8,
    },
    {
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      location: 'City Studio',
      distance: '0.5 km away',
      dates: '12-15 Feb',
      price: 95,
      rating: 4.7,
    },
    {
      images: [
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      location: 'Garden House',
      distance: '2.7 km away',
      dates: '18-23 Feb',
      price: 125,
      rating: 4.6,
    },
    {
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
      location: 'Cozy Apartment',
      distance: '1.8 km away',
      dates: '1-5 Mar',
      price: 110,
      rating: 4.5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Property Cards
          </h1>
          <p className="text-gray-600">
            Image-heavy cards with minimal overlay text and thumbnail navigation
          </p>
        </div>

        {/* Grid of Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProperties.map((property, index) => (
            <PropertyCard
              key={index}
              images={property.images}
              location={property.location}
              distance={property.distance}
              dates={property.dates}
              price={property.price}
              rating={property.rating}
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Design Features</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span><strong>Multi-photo support:</strong> Navigate between images using thumbnail dots at the bottom</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span><strong>Minimal overlay:</strong> Small opaque pill in top-left with title and location</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span><strong>Price badge:</strong> Bottom-right with dark background for contrast</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span><strong>Rating badge:</strong> Bottom-left with star rating</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span><strong>Favorite button:</strong> Top-right, clickable with heart icon</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span><strong>Keyboard accessible:</strong> Tab through thumbnails and use Enter/Space to navigate</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
