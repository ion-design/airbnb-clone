import { FC } from 'react';

interface TripCard {
  imageUrl: string;
  destination: string;
  description: string;
  price: number;
  duration: string;
}

const Trips: FC = () => {
  const trips: TripCard[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      destination: "Venice, Italy",
      description: "Experience the romantic canals and historic architecture",
      price: 1200,
      duration: "5 days"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d",
      destination: "Tokyo, Japan",
      description: "Immerse yourself in Japanese culture and cuisine",
      price: 1800,
      duration: "7 days"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647",
      destination: "Santorini, Greece",
      description: "Relax on stunning beaches with incredible views",
      price: 1500,
      duration: "6 days"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      destination: "London, UK",
      description: "Explore the historic capital of England",
      price: 1300,
      duration: "5 days"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      destination: "Paris, France",
      description: "Discover the city of love and lights",
      price: 1400,
      duration: "6 days"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 bg-white">
      <h1 className="text-3xl font-bold mb-8">Discover Our Featured Trips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trips.map((trip, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={trip.imageUrl} 
                alt={trip.destination}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{trip.destination}</h3>
              <p className="text-gray-600 mb-4">{trip.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">${trip.price}</span>
                <span className="text-gray-500">{trip.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trips;