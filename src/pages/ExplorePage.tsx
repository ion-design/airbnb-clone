import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import AirbnbLogo from "../assets/airbnb.svg";
import UserInfo from "../components/header/UserInfo";
import Footer from "../components/Footer";

const countryData = {
  italy: {
    name: "Italy",
    hero: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    description: "Experience la dolce vita with our curated Italian journey",
    price: 4999,
    duration: "10 days",
    included: [
      "Luxury accommodations in historic properties",
      "Private guided tours of major attractions",
      "Exclusive cooking classes with renowned chefs",
      "Premium wine tastings in ancient cellars",
      "First-class train travel between cities",
      "Private transfers and luxury transportation",
      "24/7 concierge service",
    ],
    itinerary: [
      {
        day: "Days 1-3: Rome",
        activities: [
          "Private Vatican tour",
          "Colosseum at sunset",
          "Roman cooking class",
        ],
      },
      {
        day: "Days 4-6: Florence",
        activities: [
          "Uffizi Gallery private viewing",
          "Tuscan wine experience",
          "Artisan workshops",
        ],
      },
      {
        day: "Days 7-10: Venice",
        activities: [
          "Private gondola tour",
          "Murano glass blowing",
          "Secret passages tour",
        ],
      },
    ],
  },
  japan: {
    name: "Japan",
    hero: "https://images.unsplash.com/photo-1528164344705-47542687000d",
    description:
      "Embark on a journey through ancient traditions and modern wonders",
    price: 5999,
    duration: "12 days",
    included: [
      "Traditional ryokan and luxury hotel stays",
      "Private tea ceremonies and cultural experiences",
      "First-class bullet train passes",
      "Expert local guides and interpreters",
      "Traditional Japanese fine dining experiences",
      "Private temple visits and meditation sessions",
      "24/7 bilingual concierge service",
    ],
    itinerary: [
      {
        day: "Days 1-4: Tokyo",
        activities: [
          "Private Tsukiji market tour",
          "Exclusive sushi workshop",
          "Modern art galleries",
        ],
      },
      {
        day: "Days 5-8: Kyoto",
        activities: [
          "Traditional tea ceremony",
          "Private geisha district tour",
          "Zen garden meditation",
        ],
      },
      {
        day: "Days 9-12: Hakone & Mt. Fuji",
        activities: [
          "Private onsen experience",
          "Mt. Fuji helicopter tour",
          "Traditional ryokan stay",
        ],
      },
    ],
  },
  greece: {
    name: "Greece",
    hero: "https://images.unsplash.com/photo-1589330273594-fade1ee91647",
    description:
      "Journey through the cradle of Western civilization in ultimate luxury",
    price: 4599,
    duration: "9 days",
    included: [
      "Luxury boutique hotel accommodations",
      "Private yacht tours to hidden islands",
      "Expert archaeology guides",
      "Traditional Greek cooking workshops",
      "Private transfers and luxury transportation",
      "Exclusive wine tastings",
      "24/7 concierge service",
    ],
    itinerary: [
      {
        day: "Days 1-3: Athens",
        activities: [
          "Private Acropolis tour",
          "Ancient cooking workshop",
          "Secret local tavernas",
        ],
      },
      {
        day: "Days 4-6: Santorini",
        activities: [
          "Private caldera yacht tour",
          "Wine tasting experience",
          "Sunset photography",
        ],
      },
      {
        day: "Days 7-9: Mykonos",
        activities: [
          "Private beach club access",
          "Traditional village tours",
          "Luxury sailing",
        ],
      },
    ],
  },
};

function ExplorePage() {
  const { country } = useParams();
  const data = countryData[country as keyof typeof countryData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [country]);

  if (!data) return <div>Country not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-neutral-300 bg-white sticky top-0 z-50">
        <div className="py-4 px-10 flex items-center justify-between text-sm font-semibold">
          <Link to="/">
            <img src={AirbnbLogo} alt="" className="h-8" />
          </Link>
          <UserInfo />
        </div>
      </header>

      <div className="h-[70vh] relative">
        <img
          src={data.hero}
          alt={data.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
          <h1 className="text-6xl font-bold mb-4">{data.name}</h1>
          <p className="text-2xl">{data.description}</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.included.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Journey</h2>
              <div className="space-y-6">
                {data.itinerary.map((item, index) => (
                  <div key={index} className="border-l-2 border-rose-500 pl-4">
                    <h3 className="font-semibold text-lg">{item.day}</h3>
                    <ul className="mt-2 space-y-2">
                      {item.activities.map((activity, idx) => (
                        <li key={idx} className="text-gray-600">
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold">${data.price}</div>
                <div className="text-gray-600">per person</div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>Duration:</span>
                  <span className="font-semibold">{data.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Available:</span>
                  <span className="font-semibold">July 2023</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300">
                Book This Itinerary
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                Free cancellation up to 30 days before departure
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ExplorePage;
