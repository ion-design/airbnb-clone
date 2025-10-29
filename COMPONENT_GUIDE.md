# PropertyCard Component Guide

## Visual Structure

```
┌─────────────────────────────────────────┐
│  📍 Location          ❤️ Favorite       │ ← Top Overlays
│     Distance                             │
│                                          │
│                                          │
│            [Main Image]                  │
│                                          │
│                                          │
│              ● ● ● ●                    │ ← Thumbnail Dots
│  ★ 4.9                      £185 night  │ ← Bottom Overlays
└─────────────────────────────────────────┘
     15-20 Jan                              ← Dates (below card)
```

## Component Hierarchy

```
PropertyCard (wrapper div)
├── Main Image Container (relative positioning)
│   ├── Image Element
│   ├── Top-Left Pill (absolute)
│   │   ├── Location Text (semibold)
│   │   └── Distance Text (smaller)
│   ├── Top-Right Button (absolute)
│   │   └── Heart Icon (lucide-react)
│   ├── Bottom-Right Badge (absolute)
│   │   ├── Price Text
│   │   └── "night" Text
│   ├── Bottom-Left Badge (absolute)
│   │   ├── Star Icon (★)
│   │   └── Rating Number
│   └── Thumbnail Strip (absolute, conditional)
│       └── Dot Buttons (map over images)
└── Dates Container (outside image)
    └── Dates Text
```

## Props Interface

```typescript
interface PropertyCardProps {
  // Image(s) - at least one required
  images?: string[];      // Preferred: Array of image URLs
  imageUrl?: string;      // Legacy: Single image URL
  
  // Text Information
  location: string;       // Property name/location
  distance: string;       // Distance from user
  dates: string;         // Available dates
  
  // Numeric Data
  price: number;         // Price per night
  rating: number;        // Star rating (0-5)
}
```

## State Management

```typescript
// Track which image is currently displayed
const [currentImageIndex, setCurrentImageIndex] = useState(0);

// Track favorite status
const [isFavorited, setIsFavorited] = useState(false);
```

## Key Functions

### Image Array Resolution
```typescript
// Handles both images array and single imageUrl
const photoGallery = images || (imageUrl ? [imageUrl] : []);
```

### Thumbnail Click Handler
```typescript
const handleThumbnailClick = (index: number) => {
  setCurrentImageIndex(index);
};
```

### Keyboard Navigation
```typescript
const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleThumbnailClick(index);
  }
};
```

## CSS Classes Breakdown

### Container Classes
```css
.group                    /* For group hover effects */
```

### Main Image Container
```css
.relative                 /* Position context for overlays */
.aspect-square           /* 1:1 aspect ratio */
.rounded-xl              /* Large border radius */
.overflow-hidden         /* Hide overflow */
.bg-gray-100            /* Fallback background */
```

### Image Element
```css
.object-cover            /* Cover the container */
.w-full .h-full         /* Fill container */
```

### Top-Left Pill
```css
.absolute .top-3 .left-3           /* Position */
.bg-white/90                       /* 90% white opacity */
.backdrop-blur-sm                  /* Blur effect */
.rounded-full                      /* Pill shape */
.px-3 .py-1.5                     /* Padding */
.shadow-sm                         /* Subtle shadow */
```

### Location Text
```css
.text-xs                  /* Small font size */
.font-semibold           /* Bold weight */
.text-gray-900           /* Dark text */
.leading-tight           /* Tight line height */
.truncate                /* Ellipsis overflow */
.max-w-[200px]          /* Max width constraint */
```

### Distance Text
```css
.text-[10px]            /* Even smaller font */
.text-gray-600          /* Medium gray */
.leading-tight          /* Tight line height */
```

### Favorite Button
```css
.absolute .top-3 .right-3          /* Position */
.p-1.5                             /* Padding */
.hover:scale-110                   /* Hover effect */
.transition-transform              /* Smooth animation */
```

### Heart Icon States
```css
/* Unfavorited */
.fill-white/80 .stroke-white

/* Favorited */
.fill-red-500 .stroke-red-500
```

### Bottom-Right Price Badge
```css
.absolute .bottom-3 .right-3       /* Position */
.bg-gray-900/85                    /* 85% dark opacity */
.backdrop-blur-sm                  /* Blur effect */
.rounded-lg                        /* Rounded corners */
.px-2.5 .py-1.5                   /* Padding */
```

### Price Text
```css
.text-white               /* White text */
.text-sm                 /* Small size */
.font-semibold          /* Bold weight */
```

### "night" Text
```css
.text-white/70          /* 70% white opacity */
.text-[10px]           /* Tiny font */
```

### Bottom-Left Rating Badge
```css
.absolute .bottom-3 .left-3        /* Position */
.bg-white/90                       /* 90% white opacity */
.backdrop-blur-sm                  /* Blur effect */
.rounded-lg                        /* Rounded corners */
.px-2 .py-1                       /* Padding */
.flex .items-center .gap-1        /* Flexbox layout */
```

### Star Icon
```css
.text-yellow-500         /* Yellow color */
.text-xs                /* Small size */
```

### Rating Number
```css
.text-gray-900          /* Dark text */
.text-xs                /* Small size */
.font-medium           /* Medium weight */
```

### Thumbnail Strip Container
```css
.absolute .bottom-14              /* Position above bottom badges */
.left-0 .right-0                 /* Full width */
.px-3                            /* Horizontal padding */
```

### Thumbnail Dots Wrapper
```css
.flex                    /* Flexbox */
.justify-center         /* Center horizontally */
.gap-1.5               /* Space between dots */
```

### Individual Dot Button
```css
.h-1                     /* Fixed height */
.rounded-full           /* Circular/pill shape */
.transition-all         /* Animate all properties */

/* Inactive dot */
.w-1                    /* Small width */
.bg-white/50           /* 50% white opacity */
.hover:bg-white/75     /* Brighter on hover */

/* Active dot */
.w-6                    /* Expanded width */
.bg-white              /* Full white */
```

### Dates Container
```css
.mt-2                   /* Margin top */
```

### Dates Text
```css
.text-sm               /* Small font */
.text-gray-500        /* Gray color */
```

## Responsive Behavior

The component itself is flexible and adapts to container width. Grid layout in parent:

```css
/* Mobile */
.grid .grid-cols-1

/* Tablet */
sm:grid-cols-2
md:grid-cols-3

/* Desktop */
lg:grid-cols-4
xl:grid-cols-4
```

## Conditional Rendering

### Rating Badge
```typescript
{rating > 0 && (
  <div>...</div>
)}
```
Only shows if rating is greater than 0.

### Thumbnail Strip
```typescript
{photoGallery.length > 1 && (
  <div>...</div>
)}
```
Only shows if there are multiple images.

## Event Handlers

### Click Events
```typescript
onClick={() => setIsFavorited(!isFavorited)}
onClick={() => handleThumbnailClick(index)}
```

### Keyboard Events
```typescript
onKeyDown={(e) => handleKeyDown(e, index)}
```

## Accessibility Attributes

### Buttons
```typescript
aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
aria-label={`View photo ${index + 1}`}
aria-current={index === currentImageIndex}
```

### Images
```typescript
alt={`${location} - Photo ${currentImageIndex + 1}`}
```

## Usage Examples

### Minimal Example
```tsx
<PropertyCard
  imageUrl="https://example.com/image.jpg"
  location="Cozy Studio"
  distance="1 km away"
  dates="Jan 15-20"
  price={150}
  rating={4.8}
/>
```

### Full Example
```tsx
<PropertyCard
  images={[
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg",
  ]}
  location="Luxury Penthouse"
  distance="2.5 km away"
  dates="Feb 10-15"
  price={350}
  rating={4.95}
/>
```

### In a Grid
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {properties.map((property, index) => (
    <PropertyCard key={index} {...property} />
  ))}
</div>
```

## Common Customizations

### Change Overlay Opacity
```typescript
// In the component, find:
bg-white/90  // Change 90 to desired opacity (0-100)
bg-gray-900/85  // Change 85 to desired opacity (0-100)
```

### Change Border Radius
```typescript
rounded-xl   // Change to: rounded-sm, rounded-lg, rounded-2xl, etc.
```

### Change Colors
```typescript
text-gray-900    // Location text color
text-yellow-500  // Star color
fill-red-500     // Favorite heart color
```

### Change Spacing
```typescript
gap-6    // Grid gap between cards
px-3     // Horizontal padding on overlays
py-1.5   // Vertical padding on overlays
```

## Animation Timings

All transitions use default Tailwind timing:
```css
transition-all        /* ~150ms ease */
transition-transform  /* ~150ms ease */
```

## Browser Support

### Modern Features Used
- `aspect-square` - CSS aspect ratio
- `backdrop-blur-sm` - CSS backdrop filter
- `/` opacity syntax - Tailwind 3.x

### Fallbacks
- `bg-gray-100` - Fallback color if image fails
- Overlays work without backdrop blur (just without blur effect)

## Performance Tips

1. **Image Optimization**: Use optimized images (WebP, proper size)
2. **Lazy Loading**: Add `loading="lazy"` to img tag
3. **Memoization**: Wrap component in `React.memo()` if needed
4. **Image CDN**: Use CDN for faster loading

## Debugging Checklist

- [ ] Are images loading? (Check network tab)
- [ ] Are overlays positioned correctly? (Check z-index)
- [ ] Is backdrop blur working? (Browser support)
- [ ] Do thumbnails appear? (Only if images.length > 1)
- [ ] Is keyboard navigation working? (Tab to dots, press Enter)
- [ ] Are ARIA labels present? (Check with screen reader)

## Related Files

- Component: `src/components/PropertyCard.tsx`
- Showcase: `src/pages/PropertyShowcase.tsx`
- Integration: `src/App.tsx`
- Documentation: `PROPERTY_CARD_INTEGRATION.md`

---

**Quick Reference Card**

| Feature | Location | Opacity |
|---------|----------|---------|
| Location | Top-left | 90% white |
| Favorite | Top-right | N/A |
| Rating | Bottom-left | 90% white |
| Price | Bottom-right | 85% dark |
| Thumbnails | Bottom-center | 50-100% white |
| Dates | Below card | N/A |
