'use client';

import { cn } from '@/app/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';

const cardVariants = cva(
  'rounded-lg border transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-white shadow-card border-gray-200',
        withImage: 'bg-white shadow-card border-gray-200 overflow-hidden',
        loading: 'bg-white shadow-card border-gray-200 animate-pulse',
        glass: 'glass-card text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export { Card, cardVariants };
