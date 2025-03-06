import { FC } from 'react';

const Newsroom: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Airbnb Newsroom</h1>
        
        <div className="grid gap-8">
          <article className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
            <p className="text-gray-600 mb-4">
              Discover the latest news, updates, and stories from Airbnb.
            </p>
            <a href="#" className="text-rose-500 hover:underline">
              Read more →
            </a>
          </article>

          <article className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-semibold mb-4">Press Releases</h2>
            <p className="text-gray-600 mb-4">
              Official announcements and press releases from Airbnb.
            </p>
            <a href="#" className="text-rose-500 hover:underline">
              View all press releases →
            </a>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mb-4">Media Resources</h2>
            <p className="text-gray-600 mb-4">
              Access media kits, brand assets, and other resources.
            </p>
            <a href="#" className="text-rose-500 hover:underline">
              Browse resources →
            </a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;
