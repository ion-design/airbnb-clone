import { useState, useEffect, ChangeEvent } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FunnelIcon } from '@heroicons/react/24/solid';

// Components
import PlaceholderSearchBar from "./components/header/PlaceholderSearchBar";
import TopTabs from "./components/header/bigsearch/TopTabs";
import UserInfo from "./components/header/UserInfo";
import PropertyCard from "./components/PropertyCard";
import Footer from "./components/Footer";
import CountryMarketing from "./components/CountryMarketing";
import Trips from "./pages/Trips";
import BigSearch from "./components/header/bigsearch";

// Types
import { BigSearchItemIds, NumDaysInMonth } from "./@types/types";

function MainContent() {
  const [showBigSearch, setShowBigSearch] = useState<boolean>(false);
  const [selectedBigSearchItemId, setSelectedBigSearchItemId] = useState<BigSearchItemIds | undefined>();
  const [selectedMonths, setMonth] = useState<{ month: NumDaysInMonth; year: number }[] | undefined>();
  const [likedProperties, setLikedProperties] = useState<number[]>([]);

  const handleSelectBigSearchItem = (e: ChangeEvent<HTMLElement>) => {
    if (selectedBigSearchItemId === e.target.id)
      setSelectedBigSearchItemId(undefined);
    else setSelectedBigSearchItemId(e.target.id as BigSearchItemIds);
  };

  const handleLikeProperty = (index: number) => {
    setLikedProperties(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    const date = new Date();
    setMonth(
      getMonthAndYear(date.getMonth() as NumDaysInMonth, date.getFullYear())
    );
  }, []);

  const getMonthAndYear = (month: NumDaysInMonth, year: number) => {
    let nextMonth = month + 1;
    let nextYear = year;
    if (nextMonth >= 12) {
      nextMonth = 0;
      nextYear = year + 1;
    }
    return [
      { month, year },
      { month: nextMonth, year: nextYear },
    ] as { month: NumDaysInMonth; year: number }[];
  };

  const properties = [
    {
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858"
      ],
      location: "Notting Hill, London",
      distance: "2 kilometers away",
      dates: "Aug 10-15",
      price: 750,
      rating: 4.75
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      location: "Shoreditch, London",
      distance: "3 kilometers away",
      dates: "Jul 20-25",
      price: 850,
      rating: 4.91
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Chelsea, London",
      distance: "4 kilometers away",
      dates: "Aug 1-6",
      price: 675,
      rating: 4.82
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      location: "Kensington, London",
      distance: "20 kilometers away",
      dates: "Jul 14-19",
      price: 950,
      rating: 4.95
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col text-base">
      <header className="sticky top-0 z-50 bg-white border-b">
        {/* Header content */}
      </header>
      <main className="flex-1 max-w-7xl mx-auto px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              {...property}
              isLiked={likedProperties.includes(index)}
              onLike={() => handleLikeProperty(index)}
            />
          ))}
        </div>
        <CountryMarketing />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </Router>
  );
}

export default App;