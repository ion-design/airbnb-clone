import { FC, useState } from 'react';

interface PropertyCardProps {
  imageUrl: string;
  title?: string;
  location: string;
  distance?: string;
  dates?: string;
  price: number;
  rating: number;
  reviewCount?: number;
  isSuperhost?: boolean;
  isInstantBook?: boolean;
  onClick?: () => void;
}

const PropertyCard: FC<PropertyCardProps> = ({
  imageUrl,
  title,
  location,
  distance,
  dates,
  price,
  rating,
  reviewCount = 0,
  isSuperhost = false,
  isInstantBook = false,
  onClick,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <div
      className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      {/* Full-bleed image */}
      <img
        src={imageUrl}
        alt={`${title || location}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Save button - top right */}
      <button
        onClick={handleSaveClick}
        className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label={isSaved ? 'Remove from saved' : 'Save property'}
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4"
          fill={isSaved ? 'white' : 'none'}
          stroke="white"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      {/* Badges - just above bottom strip */}
      {(isSuperhost || isInstantBook) && (
        <div className="absolute bottom-[28%] left-3 z-10 flex gap-2">
          {isSuperhost && (
            <span className="px-2 py-1 text-xs font-medium bg-white text-gray-900 rounded-md">
              Superhost
            </span>
          )}
          {isInstantBook && (
            <span className="px-2 py-1 text-xs font-medium bg-white text-gray-900 rounded-md">
              Instant Book
            </span>
          )}
        </div>
      )}

      {/* Bottom opaque info strip */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gray-900/85 backdrop-blur-sm px-4 py-3 transition-all duration-200 ${
          isHovered ? 'bg-gray-900/90 py-4' : ''
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          {/* Left side - Title and location */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-sm leading-tight truncate">
              {title || location}
            </h3>
            {title && (
              <p className="text-white/70 text-xs mt-0.5 truncate">{location}</p>
            )}
            
            {/* Additional info on hover */}
            {isHovered && (distance || dates) && (
              <p className="text-white/60 text-xs mt-1 truncate">
                {distance || dates}
              </p>
            )}
          </div>

          {/* Right side - Rating and Price */}
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            {/* Rating */}
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="w-3.5 h-3.5"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white text-xs font-medium">
                {rating.toFixed(1)}
              </span>
              {reviewCount > 0 && (
                <span className="text-white/60 text-xs">({reviewCount})</span>
              )}
            </div>

            {/* Price */}
            <div className="text-right">
              <span className="text-white font-bold text-sm">£{price}</span>
              <span className="text-white/70 text-xs ml-1">night</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
