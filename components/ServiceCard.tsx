import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onViewDetails: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onViewDetails }) => {
  return (
    <div className="bg-surface rounded-lg overflow-hidden flex flex-col p-6 text-center items-center transition-all duration-300 transform border border-slate-700 hover:border-primary hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/25">
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold text-textPrimary mb-2">{service.name}</h3>
      <p className="text-textSecondary flex-grow mb-4">{service.description}</p>
      <button
        onClick={() => onViewDetails(service)}
        className="mt-auto bg-primary/20 text-primary hover:bg-primary hover:text-slate-900 font-semibold py-2 px-6 rounded-full transition-colors duration-300"
      >
        View Services
      </button>
    </div>
  );
};

export default ServiceCard;