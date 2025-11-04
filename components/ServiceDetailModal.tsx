import React, { useEffect, useState } from 'react';
import type { Service, SubService, CartItem } from '../types';
import ExplanationModal from './ExplanationModal';

interface ServiceDetailModalProps {
  service: Service;
  cart: CartItem[];
  onAddToCart: (subService: SubService) => void;
  onUpdateCartQuantity: (subServiceId: string, quantity: number) => void;
  onClose: () => void;
  onProceed: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, cart, onAddToCart, onUpdateCartQuantity, onClose, onProceed }) => {
  const [explainingSubService, setExplainingSubService] = useState<SubService | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="fixed inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
        <div className="bg-surface rounded-lg shadow-2xl w-full max-w-2xl m-4 relative animate-slide-in-up flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
          
          <header className="p-4 border-b border-slate-700 flex justify-between items-center flex-shrink-0">
              <h2 className="text-2xl font-bold text-textPrimary">{service.name}</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
          </header>

          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            {service.subServices.map(subService => {
              const cartItem = cart.find(item => item.id === subService.id);
              return (
                <div key={subService.id} className="flex items-center justify-between border border-slate-700/50 hover:border-primary/50 transition-colors p-3 rounded-md">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center">
                      <h4 className="font-semibold text-textPrimary">{subService.name}</h4>
                      <button 
                        onClick={() => setExplainingSubService(subService)}
                        className="ml-2 text-textSecondary hover:text-primary transition-colors p-1 rounded-full"
                        aria-label={`Learn more about ${subService.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-primary font-medium mt-1">₹{subService.price}</p>
                    {subService.description && (
                      <p className="text-sm text-textSecondary mt-2">{subService.description}</p>
                    )}
                  </div>
                  {cartItem ? (
                    <div className="flex items-center">
                      <button onClick={() => onUpdateCartQuantity(subService.id, cartItem.quantity - 1)} className="bg-slate-700 text-textSecondary hover:bg-slate-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors font-bold">-</button>
                      <span className="w-10 text-center font-bold text-textPrimary">{cartItem.quantity}</span>
                      <button onClick={() => onUpdateCartQuantity(subService.id, cartItem.quantity + 1)} className="bg-primary text-slate-900 hover:brightness-110 rounded-full w-8 h-8 flex items-center justify-center transition-all font-bold">+</button>
                    </div>
                  ) : (
                    <button onClick={() => onAddToCart(subService)} className="bg-primary/10 border border-primary/30 text-primary font-semibold py-2 px-6 rounded-full hover:bg-primary/20 hover:border-primary transition-colors">
                      Add
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {totalItems > 0 && (
            <footer className="p-4 border-t border-slate-700 bg-surface/80 backdrop-blur-sm rounded-b-lg flex-shrink-0">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-textPrimary">{totalItems} {totalItems > 1 ? 'Items' : 'Item'}</p>
                  <p className="text-primary font-bold text-lg">₹{total}</p>
                </div>
                <button onClick={onProceed} className="bg-primary text-slate-900 font-bold py-3 px-8 rounded-md hover:brightness-110 transition-all text-lg">
                  Proceed to Book
                </button>
              </div>
            </footer>
          )}
        </div>
      </div>
      {explainingSubService && (
        <ExplanationModal
            serviceName={service.name}
            subService={explainingSubService}
            onClose={() => setExplainingSubService(null)}
        />
      )}
    </>
  );
};

export default ServiceDetailModal;