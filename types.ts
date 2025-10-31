import type React from 'react';

export interface SubService {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  subServices: SubService[];
}

export interface CartItem extends SubService {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
