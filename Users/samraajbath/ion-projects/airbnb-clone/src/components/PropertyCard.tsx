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
          <span className="text-yellow-500">★</span> {rating.toFixed(1)}
        </span>
      </div>
      <p className="text-gray-500">{bedrooms} bedroom{bedrooms !== 1 ? 's' : ''} · {bathrooms} bathroom{bathrooms !== 1 ? 's' : ''}</p>
      <p className="text-gray-500">{dates}</p>
      <p className="flex items-baseline">
        <span className="text-xl font-semibold">£{price}</span>
        <span className="text-sm text-gray-500 ml-1">/night</span>
      </p>
    </div>
  );
};

export default PropertyCard;