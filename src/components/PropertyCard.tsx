import { FC, useState } from 'react';
import { Heart } from 'lucide-react';

interface PropertyCardProps {
  images?: string[];
  imageUrl?: string;
  location: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
}

const PropertyCard: FC<PropertyCardProps> = ({
  images,
  imageUrl,
  location,
  distance,
  dates,
  price,
  rating,
}) => {
  const photoGallery = images || (imageUrl ? [imageUrl] : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleThumbnailClick(index);
    }
  };

  return (
    <div className="group">
      {/* Main Image Container */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
        {/* Main Image */}
        <img 
          src={photoGallery[currentImageIndex]} 
          alt={`${location} - Photo ${currentImageIndex + 1}`}
          className="object-cover w-full h-full"
        />

        {/* Top Left Pill - Title and Location */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-900 leading-tight truncate max-w-[200px]">
              {location}
            </span>
            <span className="text-[10px] text-gray-600 leading-tight">
              {distance}
            </span>
          </div>
        </div>

        {/* Top Right - Favorite Icon */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 p-1.5 hover:scale-110 transition-transform"
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart 
            className={`w-5 h-5 ${isFavorited ? 'fill-red-500 stroke-red-500' : 'fill-white/80 stroke-white'}`}
            strokeWidth={1.5}
          />
        </button>

        {/* Bottom Right - Price Badge */}
        <div className="absolute bottom-3 right-3 bg-gray-900/85 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
          <div className="flex items-baseline gap-1">
            <span className="text-white text-sm font-semibold">£{price}</span>
            <span className="text-white/70 text-[10px]">night</span>
          </div>
        </div>

        {/* Bottom Left - Rating Badge */}
        {rating > 0 && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
            <span className="text-yellow-500 text-xs">★</span>
            <span className="text-gray-900 text-xs font-medium">{rating.toFixed(1)}</span>
          </div>
        )}

        {/* Thumbnail Strip */}
        {photoGallery.length > 1 && (
          <div className="absolute bottom-14 left-0 right-0 px-3">
            <div className="flex justify-center gap-1.5">
              {photoGallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'w-6 bg-white' 
                      : 'w-1 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`View photo ${index + 1}`}
                  aria-current={index === currentImageIndex}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Optional: Dates below card */}
      <div className="mt-2">
        <p className="text-sm text-gray-500">{dates}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
