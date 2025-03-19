import { FC } from 'react';

interface PropertyCardProps {
  imageUrl: string;
  location: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
}

const PropertyCard: FC<PropertyCardProps> = ({
  imageUrl,
  location,
  distance,
  dates,
  price,
  rating,
}) => {
  return (
    <div className="space-y-2 animate-fade-in cursor-pointer">
      <div className="aspect-square rounded-xl overflow-hidden relative shadow-lg transition duration-300 hover:shadow-hover">
        <img 
          src={imageUrl} 
          alt={location}
          className="object-cover w-full h-full transition duration-700 hover:scale-105"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-bold text-lg">{location}</span>
        <span className="flex items-center gap-3">
          <span className="text-yellow-500">★</span> {rating.toFixed(1)}
        </span>
      </div>
      <p className="text-gray-500">{distance}</p>
      <p className="text-gray-500">{dates}</p>
      <p>
        <span className="font-semibold">£{price}</span> night
      </p>
    </div>
  );
};

export default PropertyCard;