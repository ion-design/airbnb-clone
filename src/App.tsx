import { useState, useEffect, ChangeEvent } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import PlaceholderSearchBar from "./components/header/PlaceholderSearchBar";
import TopTabs from "./components/header/bigsearch/TopTabs";
import UserInfo from "./components/header/UserInfo";
import PropertyCard from "./components/PropertyCard";
import Footer from "./components/Footer";
import CountryMarketing from "./components/CountryMarketing";
import Trips from "./pages/Trips";
import TripDetail from "./pages/TripDetail";

function MainContent() {
  const [showBigSearch, setShowBigSearch] = useState<boolean>(false);
  const [selectedBigSearchItemId, setSelectedBigSearchItemId] = useState<
    BigSearchItemIds | undefined
  >();
  const [selectedMonths, setMonth] = useState<
    { month: NumDaysInMonth; year: number }[] | undefined
  >();

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
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Notting Hill, London",
      bedrooms: 3,
      bathrooms: 2,
      dates: "Aug 10-15",
      price: 750,
      rating: 4.88,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      location: "Shoreditch, London",
      bedrooms: 2,
      bathrooms: 1,
      dates: "Jul 20-25",
      price: 850,
      rating: 4.96,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Chelsea, London",
      bedrooms: 4,
      bathrooms: 3,
      dates: "Aug 1-6",
      price: 675,
      rating: 4.92,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      location: "Kensington, London",
      bedrooms: 5,
      bathrooms: 4,
      dates: "Jul 14-19",
      price: 950,
      rating: 4.98,
    },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
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
          <Route path="/trip/:id" element={<TripDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;