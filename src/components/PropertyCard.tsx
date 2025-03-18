import { FC, useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface PropertyCardProps {
  imageUrl: string;
  location: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
  isLiked: boolean;
  onLike: () => void;
}

const PropertyCard: FC<PropertyCardProps> = ({
  imageUrl,
  location,
  distance,
  dates,
  price,
  rating,
  isLiked,
  onLike
}) => {
  return (
    <div className="space-y-1 text-white">
      <div className="aspect-square rounded-xl overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={location}
          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
        />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onLike();
          }}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100/90 transition-colors"
        >
          {isLiked ? (
            <HeartSolidIcon className="w-6 h-6 text-rose-500" />
          ) : (
            <HeartIcon className="w-6 h-6 text-white stroke-2" />
          )}
        </button>
      </div>
      <div className="flex justify-between mt-2">
        <span className="font-bold text-lg text-blue-600">{location}</span>
        <span className="flex items-center gap-1">
          <span className="text-yellow-500">★</span> 
          <span>{rating.toFixed(2)}</span>
        </span>
      </div>
      <p className="text-gray-500 text-sm">{distance}</p>
      <p className="text-gray-500 text-sm">{dates}</p>
      <p>
        <span className="font-semibold">£{price}</span> night
      </p>
    </div>
  );
};

export default PropertyCard;