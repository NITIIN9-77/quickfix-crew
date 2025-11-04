import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from './ServiceCard';
import type { Service } from '../types';

interface ServicesProps {
  onViewDetails: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onViewDetails }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-textPrimary">Our Services</h2>
          <p className="mt-4 text-lg text-textSecondary max-w-2xl mx-auto">
            We offer a wide range of services to keep your home running smoothly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} onViewDetails={onViewDetails} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
