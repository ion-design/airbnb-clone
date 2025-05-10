import { FC, useState, useRef, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PropertyCardProps {
  imageUrl: string;
  location: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
  isLiked: boolean;
  onLike: () => void;
  additionalImages?: string[];
}

const PropertyCard: FC<PropertyCardProps> = ({
  imageUrl,
  location,
  distance,
  dates,
  price,
  rating,
  isLiked,
  onLike,
  additionalImages = []
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const allImages = [imageUrl, ...additionalImages];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="space-y-1 text-black">
      <div 
        className="aspect-square rounded-xl overflow-hidden relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setCurrentImageIndex(0);
        }}
      >
        <div className="relative w-full h-full">
          {allImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${location} ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300
                ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>

        {isHovered && allImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1 shadow-md hover:bg-white transition-colors"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1 shadow-md hover:bg-white transition-colors"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {allImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors
                    ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}

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