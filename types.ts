import React from 'react';

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface Testimonial extends ImageAsset {
  id: number;
}

export interface ResultImage extends ImageAsset {
  id: number;
  category?: string;
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}