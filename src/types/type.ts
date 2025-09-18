import type { JSX } from 'react';

export interface ContactInformation {
  text: string;
  inconUrl: string;
  alt: string;
}

export interface Media {
  text: string;
  icon: JSX.Element;
}

export interface Feature {
  title: string;
  description: string;
  iconUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}