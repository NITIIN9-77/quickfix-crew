import React from 'react';
import type { Service } from './types';

const AirConditionerIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 15h2v2h-2v-2zm-2 0h-2v2h2v-2zm6 0h-2v2h2v-2zm-1-8H8c-1.1 0-2 .9-2 2v4h12v-4c0-1.1-.9-2-2-2zm-1.5 3.5h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5c.28 0 .5.22.5.5s-.22.5-.5.5zM20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 17V7h16v10H4z" />
    </svg>
);

const FanIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v-6h-2v6zm0-8h2V7h-2v1zm-3.95 9.95l1.41-1.41C9.05 15.12 9 13.59 9 12c0-1.59.12-3.12 1.46-4.54l-1.41-1.41C7.6 7.5 7 9.67 7 12s.6 4.5 2.05 6.05zM15.54 16.54c1.34-1.42 1.46-2.95 1.46-4.54s-.12-3.12-1.46-4.54l1.41-1.41C16.4 7.5 17 9.67 17 12s-.6 4.5-2.05 6.05l-1.41-1.41z" />
    </svg>
);

const WiringIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const BoardIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" />
    </svg>
);

const ApplianceRepairIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.806.547" transform="rotate(45 12 12)"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414m12.728 0l-1.414 1.414m-12.728 0l1.414-1.414" />
    </svg>
);

const CoolerIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15V5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2-2H7a2 2 0 01-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15h14M8 19h8M9 7h6m-6 2h6m-6 2h6" />
    </svg>
);

const GeyserHeaterIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5C12 4.57 10.43 3 8.5 3S5 4.57 5 6.5c0 1.56.81 2.91 2 3.5v1.5H5v2h2v1.5c-1.19.59-2 1.94-2 3.5C5 20.43 6.57 22 8.5 22s3.5-1.57 3.5-3.5v-1.5h2v-2h-2v-1.5c1.19-.59 2-1.94 2-3.5zM8.5 5c.83 0 1.5.67 1.5 1.5S9.33 8 8.5 8 7 7.33 7 6.5 7.67 5 8.5 5zm0 15c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        <path d="M17 3l-1.45 3.12L13 7l2.55.88L17 11l1.45-3.12L21 7l-2.55-.88z" />
    </svg>
);

const WaterPurifierIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a7 7 0 007-7H5a7 7 0 007 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v10m-3 0h6M9 6h6m-5 3h4m4-7h-1a1 1 0 00-1 1v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15V8a2 2 0 012-2h10a2 2 0 012 2v7" />
    </svg>
);

const MicrowaveIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2zM8 12h8m-7 3a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
);

const PlumbingIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L12 12l-6.364-6.364" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V3" />
    </svg>
);

const TelevisionIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const IronIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 2h-7a1 1 0 00-1 1v.5a2.5 2.5 0 002.5 2.5h3a2.5 2.5 0 002.5-2.5V3a1 1 0 00-1-1zM8.5 6H15l4.45 6.23a1 1 0 01-.8.17H5.85a1 1 0 01-.8-1.77L8.5 6zM5 13h14v2a4 4 0 01-4 4H9a4 4 0 01-4-4v-2z" />
    </svg>
);

const AirPurifierIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h1m16 0h1m-8-9v1m0 16v1M5.6 5.6l.7.7m12.1-.7l-.7.7M5.6 18.4l.7-.7m12.1.7l-.7-.7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 12h.01M14 12h.01M12 10v.01M12 14v.01" />
    </svg>
);

const BlenderIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6m-6 3h6m-6 3h6M6 3v12a2 2 0 002 2h8a2 2 0 002-2V3M5 21h14M9 7l2 2m2-2l2 2m-4 4l2-2m2 2l-2-2" />
    </svg>
);

const WaterPumpIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0a7 7 0 01-7 7 7 7 0 01-7-7m14 0a7 7 0 00-7-7 7 7 0 00-7 7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5V2m0 20v-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l2.5-2.5M12 12l-2.5 2.5" />
    </svg>
);

const HandymanIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);


export const SERVICES: Service[] = [
  {
    id: 'ac',
    name: 'AC Service & Repair',
    description: 'Expert installation, repair, and maintenance for all types of air conditioners.',
    icon: <AirConditionerIcon className="w-12 h-12 text-primary" />,
    subServices: [
      { id: 'ac-s-jet', name: 'Split AC Jet Service', price: 599, description: 'Deep cleaning of indoor & outdoor units with a high-pressure water jet for improved cooling and air quality.' },
      { id: 'ac-w-jet', name: 'Window AC Jet Service', price: 499, description: 'Thorough cleaning of your window AC using a power jet to remove dust and grime, ensuring fresh air.' },
      { id: 'ac-gas', name: 'AC Gas Charge (up to 1.5 ton)', price: 2499, description: 'Refilling of refrigerant gas to restore cooling performance. Price may vary based on gas type and amount.' },
      { id: 'ac-s-install', name: 'Split AC Installation', price: 1499, description: 'Professional installation of a new split AC, including connecting indoor and outdoor units.' },
      { id: 'ac-w-install', name: 'Window AC Installation', price: 799, description: 'Hassle-free installation for your new window AC unit in the designated window space.' },
      { id: 'ac-s-uninstall', name: 'Split AC Uninstallation', price: 699, description: 'Safe removal of your existing split AC, including both indoor and outdoor units.' },
      { id: 'ac-inspect', name: 'AC Repair (Inspection Fee)', price: 299, description: 'A basic visit fee for our technician to diagnose the issue. This amount is adjusted in the final bill.' },
    ]
  },
  {
    id: 'fan',
    name: 'Fan Repair & Installation',
    description: 'Ceiling and exhaust fan installation, repair, and servicing for optimal performance.',
    icon: <FanIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'fan-c-install', name: 'Ceiling Fan Installation', price: 199, description: 'Proper and safe installation of your new ceiling fan, ensuring balanced and quiet operation.' },
        { id: 'fan-e-install', name: 'Exhaust Fan Installation', price: 299, description: 'Installation of an exhaust fan in your kitchen or bathroom for better ventilation.' },
        { id: 'fan-c-repair', name: 'Ceiling Fan Repair (Inspection)', price: 249, description: 'Inspection charge to identify the root cause of any fan issue, like noise or slow speed.' },
        { id: 'fan-capacitor', name: 'Capacitor Replacement', price: 180, description: 'Replacement of a faulty capacitor to fix slow fan speed and restore performance.' },
        { id: 'fan-bearing', name: 'Bearing Replacement (Noise Fix)', price: 449, description: 'Fixes annoying rattling or grinding noises by replacing worn-out ball bearings.' },
        { id: 'fan-regulator', name: 'Regulator Replacement', price: 149, description: 'Installation or replacement of a fan speed regulator switch on the switchboard.' },
    ]
  },
  {
    id: 'cooler',
    name: 'Cooler Service & Repair',
    description: 'Keep cool with our expert cooler servicing, motor repairs, and pad replacements.',
    icon: <CoolerIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'cooler-service', name: 'Cooler General Service', price: 399, description: 'Complete cleaning of the cooler, water tank, and cooling pads for fresh, cool air.' },
        { id: 'cooler-motor', name: 'Motor Replacement', price: 899, description: 'Replacement of a burnt-out or non-functional cooler fan motor.' },
        { id: 'cooler-pump', name: 'Water Pump Replacement', price: 499, description: 'Replacement of the water pump if it\'s not lifting water to the cooling pads.' },
        { id: 'cooler-pads', name: 'Cooling Pad Replacement', price: 299, description: 'Replacement of old wood wool or honeycomb pads for better cooling efficiency.' },
    ]
  },
  {
    id: 'large-appliance',
    name: 'Large Appliance Repair',
    description: 'Fixing all major home appliances including refrigerators and washing machines.',
    icon: <ApplianceRepairIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'app-fridge', name: 'Refrigerator Repair (Inspection)', price: 299, description: 'Our technician will visit and diagnose the problem. Fee is adjusted in the final bill.' },
        { id: 'app-fridge-gas', name: 'Refrigerator Gas Charging', price: 2199, description: 'Refilling refrigerant gas in your fridge to solve cooling problems. Includes leak detection.' },
        { id: 'app-fridge-thermo', name: 'Refrigerator Thermostat Change', price: 799, description: 'Fixes issues of too much or no cooling by replacing the thermostat.' },
        { id: 'app-wm', name: 'Washing Machine Repair (Inspection)', price: 299, description: 'A standard inspection charge for diagnosing any issue with your washing machine.' },
        { id: 'app-wm-drain', name: 'Washing Machine Drainage Problem', price: 499, description: 'Clearing blockages or repairing parts to fix water drainage problems in your machine.' },
        { id: 'app-wm-spin', name: 'Washing Machine Not Spinning', price: 599, description: 'Resolving issues that prevent the drum from spinning during the wash or dry cycle.' },
    ]
  },
  {
    id: 'geyser_heater',
    name: 'Geyser & Heater Repair',
    description: 'Solutions for hot water geysers and room heaters, from installation to repairs.',
    icon: <GeyserHeaterIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'app-geyser-install', name: 'Geyser Installation', price: 449, description: 'Safe and secure wall-mounting and connection of your new water geyser.' },
        { id: 'app-geyser-repair', name: 'Geyser Repair (Inspection)', price: 249, description: 'Inspection charge to find the fault with your geyser, such as no heating.' },
        { id: 'heater-inspect', name: 'Room Heater Inspection', price: 199, description: 'A visit to diagnose and identify the problem with your room heater.' },
        { id: 'heater-element', name: 'Heating Element Change', price: 499, description: 'Replacement of the heating element or coil if the heater is not producing heat.' },
    ]
  },
  {
    id: 'water_purifier',
    name: 'Water Purifier Service',
    description: 'Ensure safe drinking water with RO/UV purifier installation, servicing, and repairs.',
    icon: <WaterPurifierIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'ro-service', name: 'Complete RO Service', price: 599, description: 'Full service including cleaning of all filters, pipes, and the storage tank for pure water.' },
        { id: 'ro-filters', name: 'Filter Cartridge Change', price: 349, description: 'Replacement of sediment, carbon, or other pre-filters. Does not include RO membrane.' },
        { id: 'ro-install', name: 'RO Installation', price: 499, description: 'Professional installation and setup of your new RO or UV water purifier.' },
        { id: 'ro-repair', name: 'RO Repair (Inspection)', price: 249, description: 'Inspection charge for our technician to diagnose any issue with your water purifier.' },
    ]
  },
  {
    id: 'microwave',
    name: 'Microwave Repair',
    description: 'Quick and reliable repairs for microwave ovens, from heating issues to panel problems.',
    icon: <MicrowaveIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'microwave-inspect', name: 'Microwave Repair (Inspection)', price: 299, description: 'A visit charge to diagnose the problem with your microwave oven.' },
        { id: 'microwave-noheat', name: 'Not Heating Repair', price: 799, description: 'Repairing the magnetron or other parts to fix the issue of food not heating.' },
        { id: 'microwave-plate', name: 'Turntable Motor Repair', price: 499, description: 'Repair or replacement of the motor that rotates the glass plate inside the oven.' },
    ]
  },
  {
    id: 'wiring',
    name: 'Home Wiring Solutions',
    description: 'Complete home wiring, re-wiring, and fault detection by certified electricians.',
    icon: <WiringIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'wiring-point', name: 'New Wiring Point (per point)', price: 299, description: 'Creating a new electrical point for a light, fan, or socket, including basic wiring.' },
        { id: 'wiring-fault', name: 'Fault Detection & Repair', price: 300, description: 'Identifying and fixing issues like short circuits or power failures in your home wiring.' },
        { id: 'wiring-full', name: 'Full Home Health Checkup', price: 799, description: 'A complete inspection of your home\'s wiring, switches, and MCBs for safety.' },
    ]
  },
  {
    id: 'board',
    name: 'Switchboard Installation',
    description: 'Safe and secure installation and upgrade of main switchboards and circuit breakers.',
    icon: <BoardIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'board-switch-replace', name: 'Switch/Socket Replacement', price: 99, description: 'Replacement of a single broken or faulty switch or socket on an existing board.' },
        { id: 'board-install', name: 'New Switchboard Installation', price: 699, description: 'Installation of a brand new switchboard with switches and sockets.' },
        { id: 'board-mcb-replace', name: 'MCB Replacement', price: 199, description: 'Replacing a faulty or tripped Miniature Circuit Breaker (MCB) in your distribution box.' },
        { id: 'board-fuse-replace', name: 'Fuse Replacement', price: 149, description: 'Replacing a blown fuse to restore power to a circuit.' },
    ]
  },
  {
    id: 'plumbing',
    name: 'Plumbing Services',
    description: 'Comprehensive plumbing solutions from leaky faucets to major pipe installations.',
    icon: <PlumbingIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'plumb-faucet', name: 'Faucet/Tap Replacement', price: 249, description: 'Removal of an old tap or faucet and installation of a new one in the kitchen or bathroom.' },
        { id: 'plumb-leak', name: 'Minor Leakage Repair', price: 349, description: 'Fixing minor water leakages from pipes, taps, or joints to prevent water wastage.' },
        { id: 'plumb-toilet', name: 'Toilet Jet Spray Installation', price: 199, description: 'Installation or replacement of a toilet jet spray or health faucet.' },
        { id: 'plumb-tank', name: 'Water Tank Cleaning', price: 599, description: 'Professional 5-step cleaning of your overhead water storage tank for clean water supply.' },
    ]
  },
  {
    id: 'water_pump',
    name: 'Water Pump Services',
    description: 'Installation and repair for submersible, monoblock, and other domestic water pumps.',
    icon: <WaterPumpIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'pump-sub-install', name: 'Submersible Pump Installation', price: 1299, description: 'Professional installation of submersible pumps for borewells or underground tanks.' },
        { id: 'pump-mono-install', name: 'Monoblock Pump Installation', price: 599, description: 'Setup and installation of surface monoblock pumps for boosting water pressure.' },
        { id: 'pump-repair-inspect', name: 'Pump Repair (Inspection)', price: 299, description: 'A standard visit fee to diagnose issues like not starting, low pressure, or leaks.' },
        { id: 'pump-starter-repair', name: 'Starter/Panel Repair', price: 499, description: 'Fixing issues with the electrical starter, capacitor, or control panel for your pump.' },
        { id: 'pump-un-install', name: 'Pump Uninstallation/Removal', price: 499, description: 'Safe removal and disconnection of existing submersible or monoblock pumps.' },
    ]
  },
  {
    id: 'television',
    name: 'Television Repair',
    description: 'Expert repairs for all TV types including LED, LCD, and Smart TVs. Installation services also available.',
    icon: <TelevisionIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'tv-install', name: 'TV Wall Mount Installation', price: 499, description: 'Securely mount your TV on the wall for the best viewing experience. Bracket not included.' },
        { id: 'tv-inspect', name: 'TV Repair (Inspection)', price: 299, description: 'A visit charge to diagnose display, sound, or power issues with your television.' },
        { id: 'tv-no-display', name: 'No Display / Backlight Repair', price: 1199, description: 'Fixing issues where the TV has sound but no picture. Price varies with screen size.' },
        { id: 'tv-software', name: 'Smart TV Software Troubleshooting', price: 399, description: 'Resolving issues with apps, connectivity, or slow performance on your Smart TV.' },
    ]
  },
  {
    id: 'iron',
    name: 'Iron Repair',
    description: 'Quick and efficient repair services for both steam and dry irons.',
    icon: <IronIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'iron-inspect', name: 'Iron Repair (Inspection)', price: 149, description: 'A small fee to diagnose the problem with your clothes iron.' },
        { id: 'iron-no-heat', name: 'Not Heating Repair', price: 299, description: 'Repair or replacement of the heating element or thermostat to fix heating issues.' },
        { id: 'iron-cord', name: 'Power Cord Replacement', price: 249, description: 'Replacing a damaged or frayed power cord to ensure safety and functionality.' },
    ]
  },
  {
    id: 'air_purifier',
    name: 'Air Purifier Service',
    description: 'Maintain clean air in your home with our professional air purifier services.',
    icon: <AirPurifierIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'ap-service', name: 'General Service & Cleaning', price: 399, description: 'Complete cleaning of the unit and pre-filters to ensure optimal performance.' },
        { id: 'ap-filter', name: 'Filter Replacement (HEPA, Carbon)', price: 249, description: 'Installation of new filters. Price is for labor only; filter cost is extra.' },
        { id: 'ap-inspect', name: 'Air Purifier Repair (Inspection)', price: 249, description: 'Diagnosing issues like unusual noise, low airflow, or power problems.' },
    ]
  },
  {
    id: 'blender_mixer',
    name: 'Blender & Mixer Repair',
    description: 'Expert repair for mixer grinders, blenders, and juicers to get your kitchen running again.',
    icon: <BlenderIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'mixer-inspect', name: 'Mixer/Blender Repair (Inspection)', price: 199, description: 'A visit to diagnose the issue with your mixer, grinder, or blender.' },
        { id: 'mixer-jar', name: 'Jar Leakage/Blade Repair', price: 299, description: 'Fixing leaks from the jar or replacing the blade assembly or coupler.' },
        { id: 'mixer-motor', name: 'Motor Repair / Carbon Change', price: 499, description: 'Addressing issues with the motor, such as sparks, smoke, or complete failure.' },
    ]
  },
  {
    id: 'minor_work',
    name: 'Minor Home Repairs',
    description: 'Quick fixes for all the small but important jobs around your house. Get a handyman at your doorstep.',
    icon: <HandymanIcon className="w-12 h-12 text-primary" />,
    subServices: [
        { id: 'mw-drilling', name: 'Drill & Hang (per item)', price: 99, description: 'Professional drilling and hanging for photo frames, clocks, mirrors, etc.' },
        { id: 'mw-hinge', name: 'Door Hinge/Handle Repair', price: 149, description: 'Fixing loose hinges, handles, or latches on doors and cabinets.' },
        { id: 'mw-assembly', name: 'Minor Furniture Assembly', price: 399, description: 'Assembly of small, flat-pack furniture items like shelves or small tables.' },
        { id: 'mw-curtain', name: 'Curtain Rod Installation', price: 249, description: 'Installation of a single curtain rod with brackets and support.' },
        { id: 'mw-general', name: 'General Handyman (Inspection)', price: 199, description: 'For any other small tasks. Our technician will assess and quote on site.' },
    ]
  },
];