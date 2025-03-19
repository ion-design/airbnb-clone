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
    <div className="space-y-2 animate-fade-in">
      <div className="aspect-square rounded-xl overflow-hidden relative shadow-lg hover:shadow-hover transition-shadow duration-300 cursor-pointer">
        <img 
          src={imageUrl} 
          alt={location}
          className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300"/>
      </div>
      <div className="flex justify-between">
        <span className="font-bold text-lg cursor-pointer">{location}</span>
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