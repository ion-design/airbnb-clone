import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Experience {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  rating: number;
  itinerary: Array<{
    title: string;
    description: string;
  }>;
}

export const experiences: Experience[] = [
  {
    id: "italian-food-wine",
    imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    title: "Italian Food & Wine Adventure",
    description: "A culinary journey through Tuscany's finest vineyards and restaurants",
    duration: "5 days",
    price: 1299,
    rating: 4.92,
    itinerary: [
      {
        title: "Florence Cooking Class",
        description: "Learn authentic pasta making from local chefs"
      },
      {
        title: "Chianti Wine Tour",
        description: "Visit three historic wineries with tastings"
      },
      {
        title: "Truffle Hunting",
        description: "Search for truffles in the Tuscan countryside"
      }
    ]
  },
  // ... rest of experiences array ...
];

const ExperienceMarketing: FC = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Unforgettable experiences</h2>
        <button 
          onClick={() => navigate('/experiences')}
          className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
        >
          Show More
        </button>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {experiences.map((experience) => (
          <div 
            key={experience.id} 
            className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            onClick={() => navigate(`/experience/${experience.id}`)}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 aspect-[4/3] overflow-hidden">
                <img 
                  src={experience.imageUrl} 
                  alt={experience.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                    <p className="text-gray-600 mb-4">{experience.description}</p>
                    <p className="text-gray-500">{experience.duration}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-sm">★</span>
                      <span className="font-semibold">{experience.rating}</span>
                    </div>
                    <p className="text-xl font-bold">${experience.price}</p>
                    <p className="text-sm text-gray-500">per person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceMarketing;