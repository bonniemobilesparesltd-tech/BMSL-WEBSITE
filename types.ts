import React from 'react';

export interface Branch {
  id: string;
  name: string;
  phones: string[];
  address?: string;
  locationDetails?: string;
  mapQuery: string;
  rating?: number;
}

export interface Service {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
}