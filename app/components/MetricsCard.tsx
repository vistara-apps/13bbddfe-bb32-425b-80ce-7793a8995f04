'use client';

import { Card } from './ui/Card';
import { LucideIcon } from 'lucide-react';

export interface MetricsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon?: LucideIcon;
  variant?: 'default' | 'accent';
}

const MetricsCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon,
  variant = 'default'
}: MetricsCardProps) => {
  return (
    <Card 
      variant="glass" 
      className={`p-6 ${variant === 'accent' ? 'bg-white/20' : ''}`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-white/80">{title}</h3>
        {Icon && <Icon className="h-4 w-4 text-white/60" />}
      </div>
      
      <div className="space-y-1">
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-xs text-white/60">{subtitle}</div>
      </div>
    </Card>
  );
};

export { MetricsCard };
