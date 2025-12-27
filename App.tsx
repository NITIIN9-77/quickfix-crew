import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';
import ChatModal from './components/ChatModal';
import Footer from './components/Footer';
import ServiceDetailModal from './components/ServiceDetailModal';
import type { Service, CartItem, SubService } from './types';

const App: React.FC = () => {
  // Modal states
  const [isServiceDetailOpen, setIsServiceDetailOpen] = useState<boolean>(false);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState<boolean>(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState<boolean>(false);
  
  // Data states
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Back Button Logic: Handle mobile back button to close modals
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (isServiceDetailOpen || isBookingFormOpen || isChatModalOpen) {
        setIsServiceDetailOpen(false);
        setIsBookingFormOpen(false);
        setIsChatModalOpen(false);
        // Prevent default browser back behavior since we've "handled" it by closing modals
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Push state when any modal opens
    if (isServiceDetailOpen || isBookingFormOpen || isChatModalOpen) {
      window.history.pushState({ modalOpen: true }, '');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, [isServiceDetailOpen, isBookingFormOpen, isChatModalOpen]);

  // Open service details modal
  const handleViewDetails = (service: Service) => {
    setSelectedService(service);
    setIsServiceDetailOpen(true);
  };

  const closeServiceDetailModal = () => {
    setIsServiceDetailOpen(false);
  };
  
  // Proceed to booking from the details modal
  const handleProceedToBooking = () => {
    if (cart.length > 0) {
      setIsServiceDetailOpen(false);
      setIsBookingFormOpen(true);
    } else {
      alert("Your cart is empty. Please add a service to proceed.");
    }
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
  };
  
  const handleBookingSuccess = () => {
    setIsBookingFormOpen(false);
    setCart([]); 
    setSelectedService(null);
  };

  const handleAddToCart = (subService: SubService, parentServiceName: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === subService.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === subService.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...subService, quantity: 1, parentServiceName }];
    });
  };

  const handleUpdateCartQuantity = (subServiceId: string, quantity: number) => {
    setCart(prevCart => {
      if (quantity <= 0) {
        return prevCart.filter(item => item.id !== subServiceId);
      }
      return prevCart.map(item =>
        item.id === subServiceId ? { ...item, quantity } : item
      );
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-textPrimary">
      <Header />
      <main className="flex-grow">
        <Hero onBookNow={() => {
          const mainServicesSection = document.getElementById('services');
          if (mainServicesSection) {
            mainServicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }} />
        <Services onViewDetails={handleViewDetails} />
        <Reviews />
      </main>
      <Footer />

      {isServiceDetailOpen && selectedService && (
        <ServiceDetailModal
          service={selectedService}
          cart={cart}
          onAddToCart={handleAddToCart}
          onUpdateCartQuantity={handleUpdateCartQuantity}
          onClose={closeServiceDetailModal}
          onProceed={handleProceedToBooking}
        />
      )}
      
      {isBookingFormOpen && (
        <BookingForm
          cart={cart}
          onClose={closeBookingForm}
          onSuccess={handleBookingSuccess}
        />
      )}

      <ChatModal 
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
        onOpen={() => setIsChatModalOpen(true)}
      />
    </div>
  );
};

export default App;