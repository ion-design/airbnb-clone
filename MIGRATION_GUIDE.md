# PropertyCard Migration Guide

This guide helps you migrate from the old PropertyCard component to the new image-heavy design with minimal overlay.

## What Changed?

### Visual Changes
- **Before**: Text information displayed below the image
- **After**: All information overlaid on the image with minimal, semi-transparent badges

### New Features
- Multi-image support with thumbnail navigation
- Interactive favorite button
- Improved visual hierarchy
- Better mobile experience

## Breaking Changes

### ❌ None! 
The new component is **100% backward compatible**. Your existing code will continue to work without modifications.

## API Comparison

### Old Usage (Still Works!)
```tsx
<PropertyCard
  imageUrl="https://example.com/image.jpg"
  location="Notting Hill, London"
  distance="2 kilometers away"
  dates="Aug 10-15"
  price={750}
  rating={4.88}
/>
```

### New Usage (Recommended)
```tsx
<PropertyCard
  images={[
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ]}
  location="Notting Hill, London"
  distance="2 kilometers away"
  dates="Aug 10-15"
  price={750}
  rating={4.88}
/>
```

## Migration Steps

### Step 1: Update Your Data Structure (Optional)

If you want to support multiple images, update your property data:

**Before:**
```typescript
const property = {
  imageUrl: "https://example.com/image.jpg",
  // ... other props
};
```

**After:**
```typescript
const property = {
  images: [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ],
  // ... other props
};
```

### Step 2: Update Component Usage (Optional)

Replace `imageUrl` prop with `images` array:

**Before:**
```tsx
<PropertyCard
  imageUrl={property.imageUrl}
  {...otherProps}
/>
```

**After:**
```tsx
<PropertyCard
  images={property.images}
  {...otherProps}
/>
```

### Step 3: Test the New Features

1. Verify images display correctly
2. Test thumbnail navigation (if using multiple images)
3. Try the favorite button
4. Check responsive behavior

## Feature Comparison

| Feature | Old Component | New Component |
|---------|--------------|---------------|
| Single Image | ✅ Yes | ✅ Yes |
| Multiple Images | ❌ No | ✅ Yes |
| Image Navigation | ❌ No | ✅ Yes (Dots) |
| Favorite Button | ❌ No | ✅ Yes |
| Text Location | Below image | On image overlay |
| Keyboard Navigation | ❌ No | ✅ Yes |
| ARIA Labels | Partial | ✅ Complete |
| Responsive Grid | ✅ Yes | ✅ Yes |

## Visual Differences

### Layout Changes

**Old Design:**
```
┌─────────────────┐
│                 │
│     Image       │
│                 │
└─────────────────┘
  Location  ★ 4.8
  Distance
  Dates
  £750 night
```

**New Design:**
```
┌─────────────────┐
│ 📍Location  ❤️  │
│                 │
│     Image       │
│  ● ● ●          │
│ ★4.8      £750  │
└─────────────────┘
  Dates
```

## Common Patterns

### Pattern 1: Single Image Property
```tsx
// Works perfectly - uses imageUrl
<PropertyCard
  imageUrl="https://example.com/image.jpg"
  location="City Studio"
  distance="0.5 km away"
  dates="12-15 Feb"
  price={95}
  rating={4.7}
/>
```

### Pattern 2: Multi-Image Property
```tsx
// New capability - uses images array
<PropertyCard
  images={[
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ]}
  location="Modern Loft"
  distance="1.2 km away"
  dates="15-20 Jan"
  price={185}
  rating={4.9}
/>
```

### Pattern 3: Mixed Data Sources
```tsx
// Handles both formats automatically
const properties = [
  { imageUrl: "...", /* old format */ },
  { images: ["...", "..."], /* new format */ },
];

properties.map(prop => <PropertyCard {...prop} />)
```

## New Component Internals

### State Management
```typescript
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [isFavorited, setIsFavorited] = useState(false);
```

### Image Source Resolution
```typescript
// Automatically handles both props
const photoGallery = images || (imageUrl ? [imageUrl] : []);
```

## Styling Changes

### Before (External Layout)
- Used `space-y-2` for vertical spacing
- Text outside image container
- Rating displayed inline with location

### After (Overlay Layout)
- All overlays positioned absolutely
- Semi-transparent backgrounds with backdrop blur
- Information badges at corners
- Dates remain below (outside) the image

## Accessibility Improvements

### Image Alt Text
**Before:** `alt={location}`

**After:** `alt={${location} - Photo ${currentImageIndex + 1}}`

### Interactive Elements
- All buttons now have proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Performance Notes

### Rendering
- Only current image is displayed
- Minimal re-renders on image navigation
- Efficient state management

### Memory
- No significant memory increase
- Image switching is instant
- Lightweight thumbnail indicators (dots, not images)

## Troubleshooting

### Issue: Images not showing
**Solution:** Ensure you're using either `images` array or `imageUrl` string.

### Issue: Thumbnails not appearing
**Solution:** Thumbnails only show when `images.length > 1`.

### Issue: Favorite state not persisting
**Solution:** This is expected. Add your own persistence logic if needed:
```tsx
const [favorites, setFavorites] = useLocalStorage('favorites', []);
```

### Issue: Backdrop blur not working
**Solution:** Some older browsers don't support backdrop-filter. The overlays will still work but without the blur effect.

## Rollback Plan

If you need to rollback, the old component code was:

```tsx
// Old PropertyCard.tsx (saved for reference)
const PropertyCard: FC<PropertyCardProps> = ({
  imageUrl,
  location,
  distance,
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
      <p className="text-gray-500">{distance}</p>
      <p className="text-gray-500">{dates}</p>
      <p>
        <span className="font-semibold">£{price}</span> night
      </p>
    </div>
  );
};
```

## Questions?

See [PROPERTY_CARD_INTEGRATION.md](./PROPERTY_CARD_INTEGRATION.md) for complete documentation.

## Summary

✅ **No breaking changes** - your existing code works as-is  
✅ **Backward compatible** - supports both `imageUrl` and `images`  
✅ **New features** - multi-image navigation, favorites, better UX  
✅ **Easy adoption** - just add `images` array when ready  

Happy coding! 🚀
