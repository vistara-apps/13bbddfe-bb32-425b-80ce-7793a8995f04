'use client';

import { Card } from './ui/Card';
import { ImagePreview } from './ui/ImagePreview';
import { CopyText } from './ui/CopyText';
import { Button } from './ui/Button';
import { Share2, DollarSign } from 'lucide-react';

export interface AdVariation {
  id: string;
  imageUrl: string;
  copy: string;
  price?: string;
  platform?: string;
}

export interface AdVariationCardProps {
  variation: AdVariation;
  onPostToSocial: (variation: AdVariation) => void;
}

const AdVariationCard = ({ variation, onPostToSocial }: AdVariationCardProps) => {
  return (
    <Card variant="default" className="p-6 space-y-4">
      <div className="aspect-square relative">
        <ImagePreview
          src={variation.imageUrl}
          alt="Generated ad variation"
          className="w-full h-full"
        />
      </div>
      
      <div className="space-y-3">
        <CopyText text={variation.copy} />
        
        <div className="flex items-center justify-between">
          {variation.price && (
            <div className="flex items-center text-sm text-gray-600">
              <DollarSign className="h-4 w-4 mr-1" />
              {variation.price}
            </div>
          )}
          
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onPostToSocial(variation)}
            className="flex items-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            Post to Social
          </Button>
        </div>
      </div>
    </Card>
  );
};

export { AdVariationCard };
