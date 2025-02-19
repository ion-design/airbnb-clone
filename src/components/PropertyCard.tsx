import { FC } from 'react';

interface PropertyCardProps {
  imageUrl: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  dates: string;
  price: number;
  rating: number;
}

const PropertyCard: FC<PropertyCardProps> = ({
  imageUrl,
  location,
  bedrooms,
  bathrooms,
  dates,
  price,
  rating,
}) => {
  return (
    <div className="space-y-2">
      <div className="aspect-square rounded-xl overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={location}
          className="object-cover w-full h-full hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-bold text-lg">{location}</span>
        <span className="flex items-center gap-3">
          <span className="text-yellow-400">★</span> {rating.toFixed(1)}
        </span>
      </div>
      <p className="text-gray-500">{bedrooms} beds · {bathrooms} baths</p>
      <p className="text-gray-500">{dates}</p>
      <p>
        <span className="font-semibold">${price}</span> night
      </p>
    </div>
  );
};

export default PropertyCard;
