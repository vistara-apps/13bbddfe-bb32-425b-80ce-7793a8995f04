'use client';

import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Card } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { DropZone } from './components/ui/DropZone';
import { AdVariationCard, AdVariation } from './components/AdVariationCard';
import { PerformanceCard } from './components/PerformanceCard';
import { MetricsCard } from './components/MetricsCard';
import { useImageGeneration } from './hooks/useImageGeneration';
import { X, Upload, TrendingUp, Users, MessageCircle, DollarSign } from 'lucide-react';

export default function HomePage() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const { isGenerating, generatedAds, generateAdVariations } = useImageGeneration();

  const handleFileDrop = (files: File[]) => {
    const file = files[0];
    if (file) {
      setUploadedImage(file);
      const url = URL.createObjectURL(file);
      setUploadedImageUrl(url);
    }
  };

  const handleGenerateAds = async () => {
    if (!uploadedImage) return;
    
    try {
      await generateAdVariations(uploadedImage, {
        platform: 'general',
        style: 'product-focused'
      });
    } catch (error) {
      console.error('Failed to generate ads:', error);
    }
  };

  const handlePostToSocial = (variation: AdVariation) => {
    console.log('Posting to social:', variation);
    // Implement social posting logic here
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    setUploadedImageUrl('');
    if (uploadedImageUrl) {
      URL.revokeObjectURL(uploadedImageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1">
          <Header />
          
          <main className="px-6 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upload Section */}
              <div className="lg:col-span-2">
                <Card variant="glass" className="p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-white">Upload Image</h2>
                    <Button
                      variant="icon"
                      onClick={() => setShowUploadModal(true)}
                    >
                      <Upload className="h-5 w-5" />
                    </Button>
                  </div>

                  {!uploadedImage ? (
                    <DropZone onFileDrop={handleFileDrop} />
                  ) : (
                    <div className="space-y-4">
                      <div className="relative">
                        <img
                          src={uploadedImageUrl}
                          alt="Uploaded product"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute -top-2 -right-2"
                          onClick={handleRemoveImage}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <Button 
                        onClick={handleGenerateAds}
                        disabled={isGenerating}
                        className="w-full"
                      >
                        {isGenerating ? 'Generating...' : 'Generate Ad Variations'}
                      </Button>
                    </div>
                  )}
                </Card>

                {/* Generated Variations */}
                {generatedAds.length > 0 && (
                  <Card variant="glass" className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold text-white">Product in 3 ad variations</h2>
                      <div className="flex items-center gap-2 text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm">Live</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {generatedAds.map((variation) => (
                        <AdVariationCard
                          key={variation.id}
                          variation={variation}
                          onPostToSocial={handlePostToSocial}
                        />
                      ))}
                    </div>
                  </Card>
                )}
              </div>

              {/* Performance Sidebar */}
              <div className="space-y-6">
                <PerformanceCard
                  title="Post to Social"
                  metrics={{
                    views: 45,
                    engagement: '8.60%',
                    platform: 'Farcaster • Impressions',
                    trend: 'up'
                  }}
                />

                <Card variant="glass" className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Metrics</h3>
                    <Button variant="icon" size="sm">
                      <TrendingUp className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <MetricsCard
                      title="Post fully"
                      value="15"
                      subtitle="TikTok or Instagram system"
                      icon={Users}
                    />
                    <MetricsCard
                      title="Impressions"
                      value="7"
                      subtitle="Tile for TikTok or into post generated caption"
                      icon={MessageCircle}
                    />
                  </div>
                </Card>

                <Card variant="glass" className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Post Metric Interactions</h3>
                    <Button variant="icon" size="sm">
                      <TrendingUp className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-sm text-white">Tile TikTok</span>
                      </div>
                      <div className="text-sm text-white">$ 11,890</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span className="text-sm text-white">Fily 70</span>
                      </div>
                      <div className="text-sm text-white">$ 6/883,600</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-sm text-white">InversTag or Instagram</span>
                      </div>
                      <div className="text-sm text-white">$ 2,455 $ price</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        <span className="text-sm text-white">Engagement metrics</span>
                      </div>
                      <div className="text-sm text-white">$ 2,455 $ price</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card variant="default" className="w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Upload Product Image</h2>
              <Button
                variant="icon"
                onClick={() => setShowUploadModal(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <DropZone 
              onFileDrop={(files) => {
                handleFileDrop(files);
                setShowUploadModal(false);
              }}
            />
          </Card>
        </div>
      )}
    </div>
  );
}
