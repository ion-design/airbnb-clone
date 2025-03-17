import { FC } from 'react';

const Footer: FC = () => {
  const footerSections = [
    {
      title: 'Support',
      links: ['Help Center', 'AirCover', 'Safety information', 'Supporting people with disabilities', 'Cancellation options']
    },
    {
      title: 'Community',
      links: ['Airbnb.org: disaster relief housing', 'Combating discrimination']
    },
    {
      title: 'Hosting',
      links: ['Airbnb your home', 'AirCover for Hosts', 'Explore hosting resources', 'Visit our community forum']
    },
    {
      title: 'Airbnb',
      links: ['Newsroom', 'Learn about new features', 'Letter from our founders', 'Careers', 'Investors']
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-100 to-pink-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <span>© 2023 Airbnb, Inc.</span>
              <span>·</span>
              <a href="#" className="hover:underline">Privacy</a>
              <span>·</span>
              <a href="#" className="hover:underline">Terms</a>
              <span>·</span>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center">
                🌐 <a href="#" className="hover:underline ml-1">English (US)</a>
              </span>
              <span className="flex items-center">
                $ <a href="#" className="hover:underline ml-1">USD</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;