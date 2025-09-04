'use client';

import { cn } from '@/app/lib/cn';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button';

export interface CopyTextProps {
  text: string;
  className?: string;
}

const CopyText = ({ text, className }: CopyTextProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={cn('relative group', className)}>
      <p className="text-sm text-gray-600 pr-10">{text}</p>
      <Button
        variant="icon"
        size="sm"
        className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export { CopyText };
