import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: FC = () => {
  const navigate = useNavigate();
  
  const footerSections = [
    {
      title: 'Support',
      links: [
        { text: 'Help Center', url: '/help-center' },
        { text: 'AirCover', url: '/aircover' },
        { text: 'Safety information', url: '/safety' },
        { text: 'Supporting people with disabilities', url: '/accessibility' },
        { text: 'Cancellation options', url: '/cancellation' }
      ]
    },
    {
      title: 'Community',
      links: [
        { text: 'Airbnb.org: disaster relief housing', url: '/disaster-relief' },
        { text: 'Combating discrimination', url: '/against-discrimination' }
      ]
    },
    {
      title: 'Hosting',
      links: [
        { text: 'Airbnb your home', url: '/host' },
        { text: 'AirCover for Hosts', url: '/host-aircover' },
        { text: 'Explore hosting resources', url: '/hosting-resources' },
        { text: 'Visit our community forum', url: '/community' }
      ]
    },
    {
      title: 'Airbnb',
      links: [
        { text: 'Newsroom', url: '/news' },
        { text: 'Learn about new features', url: '/features' },
        { text: 'Letter from our founders', url: '/founders-letter' },
        { text: 'Careers', url: '/careers' },
        { text: 'Investors', url: '/investors' }
      ]
    }
  ];

  const handleNavigation = (url: string) => {
    navigate(url);
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      onClick={() => handleNavigation(link.url)}
                      className="text-gray-600 hover:underline cursor-pointer"
                    >
                      {link.text}
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
              <a onClick={() => handleNavigation('/privacy')} className="hover:underline cursor-pointer">Privacy</a>
              <span>·</span>
              <a onClick={() => handleNavigation('/terms')} className="hover:underline cursor-pointer">Terms</a>
              <span>·</span>
              <a onClick={() => handleNavigation('/sitemap')} className="hover:underline cursor-pointer">Sitemap</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center">
                🌐 <a onClick={() => handleNavigation('/language')} className="hover:underline ml-1 cursor-pointer">English (US)</a>
              </span>
              <span className="flex items-center">
                $ <a onClick={() => handleNavigation('/currency')} className="hover:underline ml-1 cursor-pointer">USD</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
