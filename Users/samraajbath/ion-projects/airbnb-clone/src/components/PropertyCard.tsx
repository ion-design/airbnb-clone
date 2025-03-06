import { FC, useState, useEffect, useRef } from 'react';

interface PropertyCardProps {
  imageUrl: string;
  location: string;
  averageStay: string;
  dates: string;
  price: number;
  rating: number;
  bedrooms?: number;
  bathrooms?: number;
}

const PropertyCard: FC<PropertyCardProps> = ({
  imageUrl,
  location,
  averageStay,
  dates,
  price,
  rating,
  bedrooms = 1,
  bathrooms = 1,
}) => {
  return (
    <div className="space-y-2">
      <div className="aspect-square rounded-xl overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={`${location} - ${bedrooms} bedroom, ${bathrooms} bathroom property available for $${price} per night`}
          className="object-cover w-full h-full hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-bold text-lg">{location}</span>
        <span className="flex items-center gap-3">
          <span className="text-yellow-400">★</span> {rating.toFixed(1)}
        </span>
      </div>
      <p className="text-gray-500">{averageStay}</p>
      <p className="text-gray-500">{bedrooms} bed{bedrooms > 1 ? 's' : ''} · {bathrooms} bath{bathrooms > 1 ? 's' : ''}</p>
      <p className="text-gray-500">{dates}</p>
      <p>
        <span className="font-semibold">${price}</span> night
      </p>
    </div>
  );
};

export default PropertyCard;
