import { FC, KeyboardEvent } from 'react';

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
  const handleClick = () => {
    // Navigate to property details
    console.log(`Navigating to ${location} property details`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="space-y-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:cursor-pointer"
    >
      <div className="aspect-square rounded-xl overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={`${location} vacation rental property - ${price} per night, rated ${rating.toFixed(1)} out of 5 stars`}
          className="object-cover w-full h-full hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-bold text-lg">{location}</span>
        <span className="flex items-center gap-3" aria-label={`Rating: ${rating.toFixed(1)} out of 5`}>
          <span className="text-yellow-400" aria-hidden="true">★</span>
          {rating.toFixed(1)}
        </span>
      </div>
      <p className="text-gray-500">{distance}</p>
      <p className="text-gray-500">{dates}</p>
      <p>
        <span className="font-semibold">${price}</span> night
      </p>
    </article>
  );
};

export default PropertyCard;
