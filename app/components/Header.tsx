'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Search, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 mb-8">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white/10 rounded-lg">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">AdSpark AI</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
        
        <ConnectWallet
          className="bg-purple-600 text-white hover:bg-purple-700"
        />
      </div>
    </header>
  );
};

export { Header };
