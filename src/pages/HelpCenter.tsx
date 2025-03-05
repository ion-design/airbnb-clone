import { FC, useState } from 'react';

interface ExpandedContent {
  title: string;
  sections: {
    subtitle: string;
    content: string;
  }[];
}

const HelpCenter: FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const helpCategories = [
    {
      title: "Booking and Payments",
      description: "Get help with reservations, payments, and refunds",
      icon: "💳",
      expandedContent: {
        title: "Booking and Payments Help",
        sections: [
          {
            subtitle: "How to make a reservation",
            content: "Search for your desired location and dates, review the property details, and click 'Reserve'. Follow the booking steps to confirm your stay and make the payment."
          },
          {
            subtitle: "Payment methods",
            content: "We accept credit cards, debit cards, PayPal, and Google Pay. Some regions also support payment plans and alternative payment methods."
          },
          {
            subtitle: "Refund process",
            content: "Refunds are processed according to the cancellation policy of your booking. Most refunds are completed within 10 business days."
          }
        ]
      }
    },
    {
      title: "Hosting",
      description: "Learn about hosting and managing your listings",
      icon: "🏠",
      expandedContent: {
        title: "Hosting Guide",
        sections: [
          {
            subtitle: "Getting started as a host",
            content: "Create your listing by adding photos, descriptions, and setting house rules. We'll guide you through pricing and calendar management."
          },
          {
            subtitle: "Host protection and insurance",
            content: "AirCover for Hosts includes $1M USD liability insurance and $1M USD damage protection."
          },
          {
            subtitle: "Superhost status",
            content: "Maintain a 4.8+ rating, less than 1% cancellation rate, and 90% response rate to achieve Superhost status."
          }
        ]
      }
    },
    {
      title: "Account Settings",
      description: "Manage your account and profile settings",
      icon: "⚙️",
      expandedContent: {
        title: "Account Management",
        sections: [
          {
            subtitle: "Profile settings",
            content: "Update your personal information, profile photo, and contact details in your account settings."
          },
          {
            subtitle: "Security features",
            content: "Enable two-factor authentication, manage connected devices, and review login history."
          },
          {
            subtitle: "Notification preferences",
            content: "Customize your email, SMS, and push notification settings for bookings, messages, and promotions."
          }
        ]
      }
    },
    {
      title: "Safety Concerns",
      description: "Report safety issues and get emergency help",
      icon: "🛡️",
      expandedContent: {
        title: "Safety Information",
        sections: [
          {
            subtitle: "Emergency assistance",
            content: "Access 24/7 customer support for urgent safety issues. Local emergency numbers are available in the app."
          },
          {
            subtitle: "COVID-19 safety",
            content: "Review our enhanced cleaning protocols and safety guidelines for guests and hosts during the pandemic."
          },
          {
            subtitle: "Neighborhood safety",
            content: "Check neighborhood safety scores and reviews from previous guests in your desired location."
          }
        ]
      }
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-8 py-12 flex-grow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">How can we help?</h1>
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        
        <div className="space-y-6">
          {helpCategories.map((category, index) => (
            <div key={index} className="w-full">
              <div 
                onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
                className="w-full bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-3xl mb-4">{category.icon}</div>
                    <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <div className="text-2xl text-gray-400">
                    {expandedCategory === category.title ? '−' : '+'}
                  </div>
                </div>
              </div>
              
              {expandedCategory === category.title && (
                <div className="w-full mt-4 bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-semibold mb-6">{category.expandedContent.title}</h3>
                  <div className="space-y-6">
                    {category.expandedContent.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border-b border-gray-100 pb-4 last:border-0">
                        <h4 className="text-lg font-medium mb-2 text-gray-800">{section.subtitle}</h4>
                        <p className="text-gray-600">{section.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Popular articles</h2>
          <ul className="space-y-4">
            <li className="hover:text-red-500 cursor-pointer">How do I cancel my reservation?</li>
            <li className="hover:text-red-500 cursor-pointer">What are the requirements for hosting?</li>
            <li className="hover:text-red-500 cursor-pointer">How do I change my payment method?</li>
            <li className="hover:text-red-500 cursor-pointer">What is Airbnb's refund policy?</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HelpCenter;
