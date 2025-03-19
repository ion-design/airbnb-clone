import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { experiences } from '../components/ExperienceMarketing';

const ExperienceDetails: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return <div>Experience not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-8">
        <img src={experience.imageUrl} alt={experience.title} className="w-full h-full object-cover" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{experience.title}</h1>
          <p className="text-gray-600 mb-6">{experience.description}</p>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Itinerary</h2>
            {experience.itinerary.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg h-fit sticky top-8">
          <div className="text-2xl font-bold mb-4">
            ${experience.price}
            <span className="text-lg font-normal text-gray-600"> per person</span>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input type="date" className="w-full p-2 border rounded-lg" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Guests</label>
              <select className="w-full p-2 border rounded-lg">
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num} guest{num !== 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors">
              Book Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;