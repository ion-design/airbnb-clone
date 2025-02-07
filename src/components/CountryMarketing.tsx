import { FC } from 'react';
import { Link } from 'react-router-dom';

interface CountryCard {
  imageUrl: string;
  country: string;
  urlSlug: string;
  description: string;
  highlights: string[];
  activities: string[];
}

const CountryMarketing: FC = () => {
  const countries: CountryCard[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
      country: "Italy",
      urlSlug: "italy",
      description: "Immerse yourself in a country where art, cuisine, and history blend perfectly with modern luxury and timeless charm.",
      highlights: [
        "Stay in restored Tuscan villas",
        "Private cooking classes with local chefs",
        "Exclusive wine tastings in ancient cellars"
      ],
      activities: [
        "Tour the Vatican with a private guide",
        "Make pasta in a countryside farmhouse",
        "Sail along the Amalfi Coast",
        "Visit hidden Venice canals"
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80",
      country: "Japan",
      urlSlug: "japan",
      description: "Discover a fascinating blend of ancient traditions and cutting-edge technology in the Land of the Rising Sun.",
      highlights: [
        "Traditional ryokan stays with onsen",
        "Exclusive tea ceremonies",
        "Luxury bullet train experiences"
      ],
      activities: [
        "Learn sushi-making from master chefs",
        "Experience cherry blossom festivals",
        "Meditate in ancient temples",
        "Explore Tokyo's future-forward districts"
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      country: "Greece",
      urlSlug: "greece",
      description: "Step into a world where ancient myths meet Mediterranean luxury, where every sunset tells a story thousands of years in the making.",
      highlights: [
        "Private villa stays in Santorini",
        "Exclusive yacht experiences",
        "Boutique island accommodations"
      ],
      activities: [
        "Private tours of ancient ruins",
        "Island-hopping by private boat",
        "Traditional cooking in local homes",
        "Sunset wine tasting in Oia"
      ]
    }
  ];

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-8">Inspiration for your next trip</h2>
      <div className="space-y-16">
        {countries.map((country, index) => (
          <div key={index} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-[16/9] overflow-hidden rounded-xl">
                <img 
                  src={country.imageUrl} 
                  alt={country.country}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{country.country}</h3>
                <p className="text-gray-600 text-lg">{country.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Exclusive Highlights</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {country.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-600">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Featured Experiences</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {country.activities.map((activity, idx) => (
                        <li key={idx} className="text-gray-600">{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link 
                  to={`/explore/${country.urlSlug}`}
                  className="inline-block mt-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300"
                >
                  Explore {country.country}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryMarketing;
