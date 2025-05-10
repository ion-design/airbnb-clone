import { useState, useEffect, ChangeEvent, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlaceholderSearchBar from "./components/header/PlaceholderSearchBar";
import TopTabs from "./components/header/bigsearch/TopTabs";
import UserInfo from "./components/header/UserInfo";
import PropertyCard from "./components/PropertyCard";
import Footer from "./components/Footer";
import CountryMarketing from "./components/CountryMarketing";
import Trips from "./pages/Trips";
import AirbnbLogo from "./assets/airbnb.svg";
import { BigSearchItemIds, NumDaysInMonth } from "./@types/types";
import BigSearch from "./components/header/bigsearch";

function MainContent() {
  const [showBigSearch, setShowBigSearch] = useState<boolean>(false);
  const [selectedBigSearchItemId, setSelectedBigSearchItemId] = useState<
    BigSearchItemIds | undefined
  >();
  const [selectedMonths, setMonth] = useState<
    { month: NumDaysInMonth; year: number }[] | undefined
  >();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleSelectBigSearchItem = (e: ChangeEvent<HTMLElement>) => {
    if (selectedBigSearchItemId === e.target.id)
      setSelectedBigSearchItemId(undefined);
    else setSelectedBigSearchItemId(e.target.id as BigSearchItemIds);
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
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      location: 'Notting Hill, London',
      distance: '2 kilometers away',
      dates: 'Aug 10-15',
      price: 750,
      rating: 4.88
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      location: 'Mayfair, London',
      distance: '6 kilometers away',
      dates: 'Aug 20-25',
      price: 1200,
      rating: 4.95
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      location: 'Hampstead, London',
      distance: '7 kilometers away',
      dates: 'Sep 1-6',
      price: 890,
      rating: 4.89
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e',
      location: 'Richmond, London',
      distance: '8 kilometers away',
      dates: 'Sep 5-10',
      price: 780,
      rating: 4.93
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
      location: 'Greenwich, London',
      distance: '9 kilometers away',
      dates: 'Sep 15-20',
      price: 820,
      rating: 4.91
    }
  ];

  return (
    <>
      <header className="border-b border-neutral-300 bg-white relative z-10">
        <div className="py-4 px-10 flex items-center justify-between text-sm font-semibold">
          <img src={AirbnbLogo} alt="" className="h-8" />
          <PlaceholderSearchBar
            showBigSearch={showBigSearch}
            setShowBigSearch={setShowBigSearch}
          />
          <TopTabs showBigSearch={showBigSearch} />
          <UserInfo />
        </div>

        {showBigSearch ? (
          <BigSearch
            selectedMonths={selectedMonths}
            selectedBigSearchItemId={selectedBigSearchItemId}
            setSelectedBigSearchItemId={setSelectedBigSearchItemId}
            handleSelectBigSearchItem={handleSelectBigSearchItem}
          />
        ) : null}
      </header>
      {showBigSearch ? (
        <div
          className="bg-black fixed top-0 left-0 h-screen w-screen bg-opacity-30"
          onClick={() => setShowBigSearch(false)}
        ></div>
      ) : null}
      <main className="max-w-7xl mx-auto px-8 py-8 flex-grow">
        <div 
          className="overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`flex gap-6 transition-transform duration-[30000ms] ease-linear ${!isHovered ? 'transform translate-x-[-50%]' : ''}`}
            style={{ width: 'fit-content' }}
          >
            {[...properties, ...properties].map((property, index) => (
              <div key={index} className="min-w-[300px]">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </div>
        <CountryMarketing />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/trips" element={<Trips />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;