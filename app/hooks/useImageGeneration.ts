'use client';

import { useState } from 'react';
import { AdVariation } from '../components/AdVariationCard';

export interface GenerationOptions {
  productType?: string;
  platform?: 'instagram' | 'tiktok' | 'facebook' | 'general';
  style?: 'minimal' | 'bold' | 'lifestyle' | 'product-focused';
}

export const useImageGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAds, setGeneratedAds] = useState<AdVariation[]>([]);

  const generateAdVariations = async (
    imageFile: File, 
    options: GenerationOptions = {}
  ): Promise<AdVariation[]> => {
    setIsGenerating(true);
    
    try {
      // Convert image to base64
      const base64Image = await fileToBase64(imageFile);
      
      // Generate variations using OpenAI
      const variations = await generateVariationsWithAI(base64Image, options);
      
      setGeneratedAds(variations);
      return variations;
    } catch (error) {
      console.error('Failed to generate ad variations:', error);
      throw error;
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    isGenerating,
    generatedAds,
    generateAdVariations,
  };
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

const generateVariationsWithAI = async (
  base64Image: string, 
  options: GenerationOptions
): Promise<AdVariation[]> => {
  // Mock implementation - replace with actual OpenAI API calls
  const mockVariations: AdVariation[] = [
    {
      id: '1',
      imageUrl: '/api/placeholder/400/400',
      copy: 'Transform your workflow with AI-powered creativity. Get professional results in minutes, not hours.',
      price: '$6,650 /m',
      platform: 'instagram'
    },
    {
      id: '2',
      imageUrl: '/api/placeholder/400/400',
      copy: 'Discover the future of content creation. Streamlined, efficient, and incredibly powerful.',
      price: '$885 /d',
      platform: 'tiktok'
    },
    {
      id: '3',
      imageUrl: '/api/placeholder/400/400',
      copy: 'Join thousands of creators who trust our platform. Start your journey today.',
      price: '$1,240 /w',
      platform: 'facebook'
    }
  ];

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return mockVariations;
};
