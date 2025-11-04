import React, { useState, useEffect } from 'react';
import type { SubService } from '../types';
import { getServiceExplanation } from '../services/geminiService';

interface ExplanationModalProps {
  serviceName: string;
  subService: SubService;
  onClose: () => void;
}

const ExplanationModal: React.FC<ExplanationModalProps> = ({ serviceName, subService, onClose }) => {
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const fetchExplanation = async () => {
      try {
        setIsLoading(true);
        const response = await getServiceExplanation(serviceName, subService.name, subService.price);
        setExplanation(response);
        setError('');
      } catch (err) {
        console.error("Failed to get explanation:", err);
        setError("I'm sorry, I couldn't fetch the details right now. Please try again in a moment.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchExplanation();
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [serviceName, subService]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] animate-fade-in" onClick={onClose}>
      <div className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-md m-4 relative animate-slide-in-up" onClick={(e) => e.stopPropagation()}>
        <header className="p-4 border-b border-slate-700 flex justify-between items-center">
          <h3 className="text-lg font-bold text-primary">
            Techie Explains: <span className="text-textPrimary">{subService.name}</span>
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <div className="p-6 min-h-[150px] flex items-center justify-center">
          {isLoading ? (
            <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse [animation-delay:0.2s]"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse [animation-delay:0.4s]"></div>
            </div>
          ) : error ? (
            <p className="text-red-400 text-center">{error}</p>
          ) : (
            <p className="text-textSecondary whitespace-pre-wrap">{explanation}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplanationModal;
