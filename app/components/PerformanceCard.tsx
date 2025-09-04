'use client';

import { Card } from './ui/Card';
import { TrendingUp, Eye, Share2, Heart } from 'lucide-react';

export interface PerformanceMetrics {
  views: number;
  engagement: string;
  platform: string;
  trend: 'up' | 'down' | 'stable';
}

export interface PerformanceCardProps {
  title: string;
  metrics: PerformanceMetrics;
}

const PerformanceCard = ({ title, metrics }: PerformanceCardProps) => {
  return (
    <Card variant="glass" className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="flex items-center gap-1 text-green-400">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm">Live</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">{metrics.views}</div>
          <div className="text-sm text-white/70">{metrics.engagement}</div>
        </div>

        <div className="h-20 flex items-end space-x-1">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="flex-1 bg-white/30 rounded-sm"
              style={{
                height: `${Math.random() * 60 + 20}%`,
                opacity: 0.7 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>

        <div className="text-xs text-white/60">
          Follow-ups • Impressions • {metrics.platform}
        </div>
      </div>
    </Card>
  );
};

export { PerformanceCard };
