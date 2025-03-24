import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TripDetail: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState<'details' | 'checkout'>('details');

  // This would typically come from an API
  const tripDetails = {
    id: "italy-2024",
    imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    country: "Italy",
    description: "Explore historic cities, coastal villages, and stunning countryside",
    price: 2499,
    duration: "10 days",
    startDates: ["June 15, 2024", "July 1, 2024", "August 15, 2024"],
    itinerary: [
      "Day 1-2: Rome - Colosseum & Vatican City",
      "Day 3-4: Florence - Art & Architecture",
      "Day 5-6: Venice - Canals & Culture",
      "Day 7-8: Amalfi Coast - Scenic Beauty",
      "Day 9-10: Milan - Fashion & Design"
    ],
    excursions: [
      {
        title: "Vatican Museums Skip-the-Line Tour",
        price: 89,
        duration: "3 hours"
      },
      {
        title: "Tuscany Wine Tasting",
        price: 129,
        duration: "6 hours"
      },
      {
        title: "Venice Gondola Ride",
        price: 79,
        duration: "30 minutes"
      }
    ]
  };

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedExcursions, setSelectedExcursions] = useState<string[]>([]);

  const handleDateSelect = (date: string) => setSelectedDate(date);
  
  const handleExcursionToggle = (title: string) => {
    setSelectedExcursions(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const calculateTotal = () => {
    const basePrice = tripDetails.price;
    const excursionsTotal = selectedExcursions.reduce((total, title) => {
      const excursion = tripDetails.excursions.find(e => e.title === title);
      return total + (excursion?.price || 0);
    }, 0);
    return basePrice + excursionsTotal;
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {step === 'details' ? (
        <>
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{tripDetails.country} Adventure</h1>
            <p className="text-xl text-gray-600">{tripDetails.description}</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <img 
                src={tripDetails.imageUrl} 
                alt={tripDetails.country}
                className="w-full h-[400px] object-cover rounded-xl mb-8"
              />

              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
                <div className="space-y-4">
                  {tripDetails.itinerary.map((day, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-2 bg-rose-500 rounded"></div>
                      <p>{day}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Optional Excursions</h2>
                <div className="space-y-4">
                  {tripDetails.excursions.map((excursion, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{excursion.title}</h3>
                        <p className="text-gray-600">{excursion.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${excursion.price}</p>
                        <button 
                          onClick={() => handleExcursionToggle(excursion.title)}
                          className={`px-4 py-2 rounded ${
                            selectedExcursions.includes(excursion.title)
                              ? 'bg-rose-500 text-white'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {selectedExcursions.includes(excursion.title) ? 'Selected' : 'Add'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-lg sticky top-8">
                <h2 className="text-2xl font-semibold mb-4">Book Your Trip</h2>
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">Select Start Date:</p>
                  <div className="space-y-2">
                    {tripDetails.startDates.map((date, index) => (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(date)}
                        className={`w-full p-3 rounded-lg border ${
                          selectedDate === date
                            ? 'border-rose-500 bg-rose-50'
                            : 'border-gray-200'
                        }`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Base Price</span>
                    <span>${tripDetails.price}</span>
                  </div>
                  {selectedExcursions.length > 0 && (
                    <div className="flex justify-between mb-2">
                      <span>Excursions</span>
                      <span>${calculateTotal() - tripDetails.price}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>

                <button
                  onClick={() => setStep('checkout')}
                  disabled={!selectedDate}
                  className={`w-full py-3 rounded-lg text-white text-lg font-semibold ${
                    selectedDate ? 'bg-rose-500 hover:bg-rose-600' : 'bg-gray-300'
                  }`}
                >
                  Continue to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Card Information</label>
              <input type="text" placeholder="Card number" className="w-full p-3 border rounded-lg mb-2" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="p-3 border rounded-lg" />
                <input type="text" placeholder="CVC" className="p-3 border rounded-lg" />
              </div>
            </div>
            <div className="border-t pt-6">
              <button className="w-full py-3 bg-rose-500 text-white rounded-lg font-semibold hover:bg-rose-600">
                Complete Booking
              </button>
            </div>
          </form>
        </div>
      )}
      {step === 'checkout' && (
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#e6e6e6] to-[#ffffff] border-2 border-[#999999] rounded p-8">
          <div className="flex items-center justify-center gap-2 mb-6 bg-[#fffde4] p-4 border border-[#ffdb4d] rounded">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Padlock.svg/1200px-Padlock.svg.png" 
              alt="secure" 
              className="w-6 h-6"
            />
            <span className="text-[#666666] font-bold">SECURE CHECKOUT - 128 BIT SSL ENCRYPTED</span>
          </div>

          <div className="flex justify-center mb-6">
            <img 
              src="https://www.pngall.com/wp-content/uploads/2/Security-Badge-PNG-Clipart.png" 
              alt="security badges" 
              className="h-16"
            />
          </div>

          <form className="space-y-6">
            <div className="bg-[#f0f7ff] p-4 border border-[#b3d1ff] rounded mb-6">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src="https://www.svgrepo.com/show/83495/shield-variant-with-check-mark.svg" 
                  alt="verified" 
                  className="w-5 h-5"
                />
                <span className="text-[#003366] font-bold text-sm">VERISIGN SECURED TRANSACTION</span>
              </div>
              <p className="text-[#666666] text-xs">All information is encrypted and transmitted using Secure Socket Layer (SSL) protocol.</p>
            </div>

            <div className="bg-white border border-[#cccccc] p-4 rounded">
              <label className="block text-[#333333] font-bold mb-2 text-sm">CARDHOLDER NAME:</label>
              <input 
                type="text" 
                className="w-full p-2 border border-[#999999] bg-[#f9f9f9] rounded font-['Courier_New']" 
              />
            </div>

            <div className="bg-white border border-[#cccccc] p-4 rounded">
              <label className="block text-[#333333] font-bold mb-2 text-sm">EMAIL ADDRESS:</label>
              <input 
                type="email" 
                className="w-full p-2 border border-[#999999] bg-[#f9f9f9] rounded font-['Courier_New']" 
              />
            </div>

            <div className="bg-white border border-[#cccccc] p-4 rounded">
              <label className="block text-[#333333] font-bold mb-2 text-sm">CARD INFORMATION:</label>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="XXXX-XXXX-XXXX-XXXX" 
                  className="w-full p-2 border border-[#999999] bg-[#f9f9f9] rounded font-['Courier_New']" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="MM/YY" 
                  className="p-2 border border-[#999999] bg-[#f9f9f9] rounded font-['Courier_New']" 
                />
                <input 
                  type="text" 
                  placeholder="CVV" 
                  className="p-2 border border-[#999999] bg-[#f9f9f9] rounded font-['Courier_New']" 
                />
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <img src="https://www.pngall.com/wp-content/uploads/2016/07/Mastercard-PNG-Pic.png" alt="mastercard" className="h-8" />
              <img src="https://www.pngall.com/wp-content/uploads/2016/07/Visa-PNG-Picture.png" alt="visa" className="h-8" />
              <img src="https://www.pngall.com/wp-content/uploads/2016/07/PayPal-Download-PNG.png" alt="paypal" className="h-8" />
            </div>

            <button 
              className="w-full py-3 bg-gradient-to-b from-[#4d90fe] to-[#357ae8] text-white font-bold rounded border border-[#3079ed] shadow-sm hover:from-[#357ae8] hover:to-[#2b6ad9]"
            >
              PROCESS SECURE PAYMENT
            </button>

            <p className="text-center text-xs text-[#666666] mt-4">
              By clicking "Process Secure Payment" you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default TripDetail;