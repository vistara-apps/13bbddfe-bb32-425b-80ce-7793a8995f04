'use client';

import { cn } from '@/app/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { Upload } from 'lucide-react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const dropzoneVariants = cva(
  'border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'border-gray-300 bg-gray-50 hover:bg-gray-100',
        dragging: 'border-purple-500 bg-purple-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface DropZoneProps extends VariantProps<typeof dropzoneVariants> {
  onFileDrop: (files: File[]) => void;
  className?: string;
  accept?: Record<string, string[]>;
  maxFiles?: number;
}

const DropZone = ({
  onFileDrop,
  className,
  accept = {
    'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp']
  },
  maxFiles = 1,
}: DropZoneProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFileDrop(acceptedFiles);
  }, [onFileDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        dropzoneVariants({
          variant: isDragActive ? 'dragging' : 'default',
          className,
        })
      )}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      {isDragActive ? (
        <div>
          <p className="text-lg font-medium text-purple-600">Drop the files here...</p>
          <p className="text-sm text-gray-500 mt-2">Release to upload</p>
        </div>
      ) : (
        <div>
          <p className="text-lg font-medium text-gray-900">Upload product image</p>
          <p className="text-sm text-gray-500 mt-2">
            Drag & drop your product image here, or click to select
          </p>
          <p className="text-xs text-gray-400 mt-1">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      )}
    </div>
  );
};

export { DropZone, dropzoneVariants };
