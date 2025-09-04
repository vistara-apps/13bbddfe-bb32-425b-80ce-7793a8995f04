'use client';

import { cn } from '@/app/lib/cn';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from './Button';

export interface ImagePreviewProps {
  src: string;
  alt: string;
  onRemove?: () => void;
  className?: string;
}

const ImagePreview = ({ src, alt, onRemove, className }: ImagePreviewProps) => {
  return (
    <div className={cn('relative group', className)}>
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {onRemove && (
        <Button
          variant="destructive"
          size="icon"
          className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={onRemove}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export { ImagePreview };
