import React, { useState, useEffect } from 'react';
import type { CartItem } from '../types';

interface BookingFormProps {
  cart: CartItem[];
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ cart, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // In a real app, you'd use a geocoding API to get the address.
          setAddress(`Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)} (Approximate Location)`);
          setIsLocating(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Could not get your location. Please check your browser permissions and enter it manually.");
          setIsLocating(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && address) {
      console.log({
        services: cart,
        total,
        name,
        phone,
        address,
      });
      setSubmissionStatus('success');
      setTimeout(() => {
        onClose();
      }, 3500); // Increased timeout to allow animations to play
    } else {
      alert("Please fill in all fields.");
    }
  };
  
  if (submissionStatus === 'success') {
      return (
          <div className="fixed inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
              <div className="bg-surface rounded-lg shadow-2xl p-8 text-center animate-scale-up-fade-in animate-glow-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
                      <path 
                          stroke="currentColor" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M12 21a9 9 0 110-18 9 9 0 010 18z" 
                          className="animate-draw"
                          style={{ strokeDasharray: 57, strokeDashoffset: 57, animationDuration: '0.8s' }} 
                      />
                      <path 
                          stroke="currentColor" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M9 12l2 2 4-4" 
                          className="animate-draw"
                          style={{ strokeDasharray: 10, strokeDashoffset: 10, animationDelay: '0.8s', animationDuration: '0.4s' }}
                      />
                  </svg>
                  <h2 className="text-3xl font-bold text-textPrimary mb-3 animate-fade-in [animation-delay:1s]">Booking Confirmed!</h2>
                  <p className="text-textSecondary text-lg mb-4 animate-fade-in [animation-delay:1.2s]">Our expert technician will contact you shortly to confirm the details.</p>
                  <div className="bg-background/50 p-4 rounded-md mt-6 border border-primary/50 animate-fade-in [animation-delay:1.4s]">
                      <p className="text-primary font-bold">A Gift For Your Next Fix!</p>
                      <p className="text-textSecondary mt-1">As a token of our appreciation, enjoy <span className="font-bold text-white">10% to 20% OFF</span> on your next service.</p>
                  </div>
              </div>
          </div>
      );
  }

  return (
    <div className="fixed inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-surface rounded-lg shadow-2xl p-8 w-full max-w-lg m-4 relative animate-slide-in-up" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <h2 className="text-2xl font-bold text-textPrimary mb-2">Confirm Your Booking</h2>
        <div className="text-textSecondary mb-6 bg-background/50 p-4 rounded-md">
            <p className="font-semibold text-primary mb-2">Services Selected:</p>
            <ul className="space-y-1 max-h-32 overflow-y-auto divide-y divide-slate-700/50 py-2 my-2">
                {cart.map(item => (
                    <li key={item.id} className="flex justify-between items-center text-sm pt-2">
                        <span>{item.name} <span className="text-textSecondary/80">x{item.quantity}</span></span>
                        <span className="font-medium text-textPrimary">₹{item.price * item.quantity}</span>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between font-bold text-textPrimary mt-2 text-lg border-t border-slate-700 pt-2">
                <span>Total</span>
                <span>₹{total}</span>
            </div>
        </div>


        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-textSecondary">Full Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-background border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary text-textPrimary placeholder:text-slate-500" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-textSecondary">Phone Number</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-background border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary text-textPrimary placeholder:text-slate-500" required />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-textSecondary">Address</label>
            <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} rows={3} className="mt-1 block w-full px-3 py-2 bg-background border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary text-textPrimary placeholder:text-slate-500" required></textarea>
            <button type="button" onClick={handleGetLocation} disabled={isLocating} className="mt-2 text-sm text-primary hover:underline disabled:opacity-50 disabled:cursor-not-allowed">
              {isLocating ? 'Getting Location...' : 'Use My Current Location'}
            </button>
          </div>
          <div className="flex justify-end pt-4">
            <button type="button" onClick={onClose} className="bg-slate-600 text-slate-200 font-bold py-2 px-4 rounded-md mr-2 hover:bg-slate-500 transition-colors">Cancel</button>
            <button type="submit" className="bg-primary text-slate-900 font-bold py-2 px-4 rounded-md hover:brightness-110 transition-all animate-glow">Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;