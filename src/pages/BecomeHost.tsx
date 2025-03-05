import { FC, useState } from 'react';

interface HostFormData {
  propertyType: string;
  location: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  title: string;
  description: string;
  price: number;
  name: string;
  email: string;
  phone: string;
}

const BecomeHost: FC = () => {
  const [step, setStep] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<HostFormData>({
    propertyType: '',
    location: '',
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    title: '',
    description: '',
    price: 0,
    name: '',
    email: '',
    phone: ''
  });

  const steps = [
    {
      title: "Tell us about your place",
      description: "Share some basic info, like where it is and how many guests can stay.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    },
    {
      title: "Make it stand out",
      description: "Add 5 or more photos plus a title and description—we'll help you out.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    {
      title: "Finish up and publish",
      description: "Set a starting price and publish your listing.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for registering as a host! We will contact you soon.');
    setShowForm(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowForm(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      {showForm ? (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-2xl w-full max-w-2xl flex flex-col h-[90vh]">
            {/* Sticky Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white sticky top-0 rounded-t-2xl z-10">
              <h2 className="text-2xl font-bold">Register as a Host</h2>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
              <form id="hostForm" onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Property Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-lg"
                        required
                      >
                        <option value="">Select type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="guesthouse">Guesthouse</option>
                        <option value="hotel">Hotel</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter address"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                      <input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full p-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                      <input
                        type="number"
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full p-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                      <input
                        type="number"
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full p-2 border rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Listing Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-lg"
                      placeholder="Enter a catchy title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-lg"
                      rows={4}
                      placeholder="Describe your place"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price per Night ($)</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full p-2 border rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-lg"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-lg"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Sticky Footer with Submit Button */}
            <div className="border-t border-gray-200 p-6 bg-white sticky bottom-0 rounded-b-2xl z-10">
              <button 
                type="submit"
                form="hostForm"
                className="w-full bg-gradient-to-r from-red-600 to-red-400 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-500 transition-all"
              >
                Submit Registration
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">Become an Airbnb Host</h1>
        <p className="text-xl text-gray-600">Join us. We'll help you every step of the way.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="space-y-8">
            {steps.map((s, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl transition-all ${
                  step === index + 1 
                    ? 'bg-white shadow-lg scale-105' 
                    : 'bg-gray-50 cursor-pointer hover:bg-gray-100'
                }`}
                onClick={() => setStep(index + 1)}
              >
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setShowForm(true)}
            className="w-full mt-8 bg-gradient-to-r from-red-600 to-red-400 text-white py-4 px-8 rounded-xl font-semibold hover:from-red-700 hover:to-red-500 transition-all"
          >
            Get Started
          </button>
        </div>

        <div className="relative h-[600px] rounded-2xl overflow-hidden">
          <img 
            src={steps[step - 1].image}
            alt="Hosting"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center mb-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((n) => (
                    <img
                      key={n}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      src={`https://randomuser.me/api/portraits/${n % 2 ? 'women' : 'men'}/${n}.jpg`}
                      alt="Host"
                    />
                  ))}
                </div>
                <span className="ml-4 font-medium">Join 4M+ Hosts</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Host your space on Airbnb</h2>
                <p className="text-white/80">Join a vibrant community of hosts and earn extra income sharing your space.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="text-xl font-semibold mb-2">Earn extra income</h3>
          <p className="text-gray-600">Turn your extra space into extra income.</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">🏠</div>
          <h3 className="text-xl font-semibold mb-2">Host with ease</h3>
          <p className="text-gray-600">We'll help you every step of the way.</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-semibold mb-2">Host with confidence</h3>
          <p className="text-gray-600">You're protected by $1M in liability insurance.</p>
        </div>
      </div>
    </main>
  );
};

export default BecomeHost;
