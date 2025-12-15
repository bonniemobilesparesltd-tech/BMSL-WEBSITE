import { Branch, Service } from './types';
import { Smartphone, Wrench, Battery, ShoppingBag } from 'lucide-react';

export const OPENING_HOURS = "8:00 AM – 7:30 PM";

export const BRANCHES: Branch[] = [
  {
    id: 'githurai',
    name: 'Githurai Branch',
    phones: ['0702 432 508'],
    address: 'Mwihoko Road',
    locationDetails: 'Opposite Railway Grounds',
    mapQuery: 'Mwihoko Road Githurai Kenya',
    rating: 3.9,
  },
  {
    id: 'ruiru',
    name: 'Ruiru Branch',
    phones: ['0708 198 931'],
    address: 'Opposite Magunas Supermarket',
    mapQuery: 'Magunas Supermarket Ruiru Kenya',
    rating: 4.7,
  },
  {
    id: 'nyeri',
    name: 'Nyeri Branch',
    phones: ['0708 271 540'],
    address: 'Gakere Road Junction',
    locationDetails: 'Opposite Samrat Supermarket',
    mapQuery: 'Gakere Road Junction Nyeri Kenya',
    rating: 4.9,
  },
  {
    id: 'kenol',
    name: 'Kenol Branch',
    phones: ['0728 854 284'],
    address: 'Between Magunas Supermarket, Kilele and Quiver',
    mapQuery: 'Magunas Supermarket Kenol Kenya',
    rating: 5.0,
  },
  {
    id: 'naivasha',
    name: 'Naivasha Branch',
    phones: ['0708 455 708', '0718 978 881'],
    address: 'Along Kenyatta Avenue',
    locationDetails: 'Next to Tower Sacco, Near Naivasha Main Stage',
    mapQuery: 'Kenyatta Avenue Naivasha Kenya',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'spares',
    title: 'Mobile Phone Spares',
    description: 'High quality screens, batteries, charging ports, and more.',
    icon: Battery,
  },
  {
    id: 'repairs',
    title: 'Professional Repairs',
    description: 'Expert technicians for screen replacement, software issues, and hardware fixes.',
    icon: Wrench,
  },
  {
    id: 'accessories',
    title: 'Phone Accessories',
    description: 'Protective cases, chargers, earphones, and screen protectors.',
    icon: Smartphone,
  },
  {
    id: 'wholesale',
    title: 'Wholesale Support',
    description: 'Supporting technicians and retailers with bulk pricing.',
    icon: ShoppingBag,
  },
];

// Helper to format phone for WhatsApp API (Assume Kenya +254)
export const formatPhoneForWhatsapp = (phone: string): string => {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('0')) {
    return `254${digits.substring(1)}`;
  }
  return digits;
};

// Helper for clickable phone links
export const formatPhoneForCall = (phone: string): string => {
  return `tel:${phone.replace(/\s/g, '')}`;
};