'use client';

import { Home, Upload, BarChart3, Settings } from 'lucide-react';
import { cn } from '@/app/lib/cn';
import { useState } from 'react';

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Upload, label: 'Generate', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <aside className="w-16 bg-black/20 backdrop-blur-lg border-r border-white/10 flex flex-col items-center py-6 space-y-4">
      {sidebarItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            onClick={() => setActiveItem(index)}
            className={cn(
              'p-3 rounded-lg transition-all duration-200 group',
              activeItem === index
                ? 'bg-white/20 text-white'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            )}
            title={item.label}
          >
            <Icon className="h-6 w-6" />
          </button>
        );
      })}
    </aside>
  );
};

export { Sidebar };
