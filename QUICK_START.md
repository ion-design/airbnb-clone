# Quick Start Guide: Image-Heavy Property Card

Get up and running with the new PropertyCard component in 5 minutes!

## 🚀 Quick Overview

The new PropertyCard component features:
- 📸 Multi-image support with thumbnail navigation
- ❤️ Interactive favorite button
- ✨ Minimal overlays that don't hide the beauty
- ⌨️ Full keyboard accessibility
- 📱 Responsive design

## 📦 Installation

### Step 1: Install Dependencies
```bash
npm install
# or
yarn install
```

The `lucide-react` package is already included in `package.json`.

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: View the Integration
Open your browser to:
- **Main page**: http://localhost:5173/
- **Showcase**: http://localhost:5173/showcase

## 💻 Basic Usage

### Example 1: Single Image (Simplest)
```tsx
import PropertyCard from './components/PropertyCard';

function App() {
  return (
    <PropertyCard
      imageUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
      location="Cozy Studio"
      distance="1 km away"
      dates="Jan 15-20"
      price={150}
      rating={4.8}
    />
  );
}
```

### Example 2: Multiple Images (Recommended)
```tsx
import PropertyCard from './components/PropertyCard';

function App() {
  return (
    <PropertyCard
      images={[
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
      ]}
      location="Modern Loft"
      distance="1.2 km away"
      dates="Jan 15-20"
      price={185}
      rating={4.9}
    />
  );
}
```

### Example 3: Grid of Properties
```tsx
import PropertyCard from './components/PropertyCard';

function PropertyGrid() {
  const properties = [
    {
      images: ["url1", "url2", "url3"],
      location: "Property 1",
      distance: "1 km away",
      dates: "Jan 15-20",
      price: 150,
      rating: 4.8
    },
    // ... more properties
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
}
```

## 🎮 Interactive Features

### Favorite Button
Click the heart icon in the top-right corner:
- **White heart** = Not favorited
- **Red heart** = Favorited

### Image Navigation
Multiple ways to navigate between images:
1. **Click dots** at the bottom of the card
2. **Press Tab** to focus on dots
3. **Press Enter or Space** to switch images

### Visual Feedback
- Hover over favorite button → scales up
- Hover over thumbnail dots → becomes brighter
- Current image dot → expands into a line

## 📱 Responsive Layout

The component adapts to screen size:

| Screen Size | Columns | Class |
|-------------|---------|-------|
| Mobile (< 640px) | 1 | `grid-cols-1` |
| Tablet (640px+) | 2 | `sm:grid-cols-2` |
| Desktop (1024px+) | 3-4 | `lg:grid-cols-3` |
| Large (1280px+) | 4 | `xl:grid-cols-4` |

## 🎨 Design Elements

### Top-Left: Location & Distance
```
┌──────────────────
│ 📍 Modern Loft
│    1.2 km away
```

### Top-Right: Favorite Button
```
                ❤️ │
                   │
```

### Bottom-Left: Rating
```
│ ★ 4.9
└──────────────────
```

### Bottom-Right: Price
```
              £185 │
             night │
──────────────────┘
```

### Bottom-Center: Navigation Dots
```
│    ● ● ● ●       │
```
- Small dots = other images
- Long line = current image

## ⌨️ Keyboard Controls

| Key | Action |
|-----|--------|
| Tab | Focus next element (dots, favorite button) |
| Shift+Tab | Focus previous element |
| Enter | Activate focused element |
| Space | Activate focused element |

## 🎯 Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `images` | `string[]` | No* | Array of image URLs |
| `imageUrl` | `string` | No* | Single image URL (legacy) |
| `location` | `string` | Yes | Property name/location |
| `distance` | `string` | Yes | Distance from user |
| `dates` | `string` | Yes | Available dates |
| `price` | `number` | Yes | Price per night |
| `rating` | `number` | Yes | Star rating (0-5) |

*Either `images` or `imageUrl` must be provided

## 🔧 Common Tasks

### Add a New Property
```tsx
const newProperty = {
  images: ["url1", "url2"],
  location: "Beach House",
  distance: "5 km away",
  dates: "Feb 1-7",
  price: 200,
  rating: 4.7
};

<PropertyCard {...newProperty} />
```

### Change Grid Columns
```tsx
// 3 columns on desktop
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

// 2 columns on desktop  
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
```

### Hide Rating
Set rating to 0:
```tsx
rating={0}  // Rating badge won't appear
```

### Single Column Layout
```tsx
<div className="max-w-md mx-auto">
  <PropertyCard {...property} />
</div>
```

## 🎨 Customization

### Change Card Spacing
```tsx
// Increase gap between cards
<div className="grid ... gap-8">  // was gap-6

// Add padding around grid
<div className="grid ... p-4">
```

### Change Border Radius
In `PropertyCard.tsx`, find:
```tsx
className="... rounded-xl ..."  // Change to rounded-lg, rounded-2xl, etc.
```

### Change Overlay Colors
In `PropertyCard.tsx`:
```tsx
bg-white/90        // Location pill background
bg-gray-900/85     // Price badge background
text-yellow-500    // Star color
fill-red-500       // Favorite heart color
```

## 🐛 Troubleshooting

### Images Not Showing
✅ Check image URLs are valid  
✅ Ensure CORS is enabled for image sources  
✅ Verify you provided either `images` or `imageUrl`

### Thumbnails Not Appearing
✅ Thumbnails only show when `images.length > 1`  
✅ Check you're using `images` array, not `imageUrl`

### Keyboard Navigation Not Working
✅ Click on the card area first to focus  
✅ Tab to the thumbnail dots  
✅ Press Enter or Space to navigate

### Backdrop Blur Not Working
✅ Update to latest browser version  
✅ Check browser support (works in Chrome, Firefox, Safari)  
✅ Overlays still work without blur effect

## 📚 Learn More

- **Full Documentation**: [PROPERTY_CARD_INTEGRATION.md](./PROPERTY_CARD_INTEGRATION.md)
- **Migration Guide**: [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)
- **Component Details**: [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)
- **Changelog**: [CHANGELOG.md](./CHANGELOG.md)

## 🎓 Examples in Code

Check these files for working examples:
- `src/App.tsx` - Main page integration
- `src/pages/PropertyShowcase.tsx` - Showcase page with demos

## ⚡ Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Proper Sizing**: Don't use 4K images for thumbnails
3. **Lazy Loading**: Add `loading="lazy"` to image tag
4. **CDN**: Host images on a CDN for faster loading

## 🎉 You're Ready!

That's it! You now have a beautiful, image-heavy property card component with:
- ✅ Multi-image support
- ✅ Interactive favorite button
- ✅ Keyboard navigation
- ✅ Responsive design
- ✅ Accessibility features

## 🆘 Need Help?

1. Check the [showcase page](http://localhost:5173/showcase)
2. Review the documentation files
3. Look at example code in `src/App.tsx`
4. Check the component source in `src/components/PropertyCard.tsx`

---

**Happy coding!** 🚀
