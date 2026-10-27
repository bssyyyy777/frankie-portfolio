import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Language } from '../types';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  subtitle?: string;
  lang: Language;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
  lang,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
    }
  }, [isOpen, imageUrl]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.4, 3.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.4, 0.6));
  const handleReset = () => setZoomLevel(1);

  return (
    <div className="fixed inset-0 z-50 bg-[#100e09]/95 backdrop-blur-2xl flex flex-col p-4 sm:p-6 overflow-hidden">
      {/* Top Controls */}
      <div className="flex items-center justify-between pb-4 border-b border-[#e8e2d8]/10">
        <div className="flex flex-col">
          <h3 className="font-headline text-lg sm:text-xl font-bold text-[#e8e2d8] leading-tight">
            {title}
          </h3>
          {subtitle && (
            <span className="text-xs font-mono text-[#ffb3b1] mt-0.5">
              {subtitle}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="flex items-center bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-full p-1">
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded-full hover:bg-[#2c2a23] text-[#e8e2d8] transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 text-xs font-mono text-[#e4bdbc]/70 min-w-12 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-full hover:bg-[#2c2a23] text-[#e8e2d8] transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-full hover:bg-[#2c2a23] text-[#e8e2d8] transition-colors ml-1 border-l border-[#e8e2d8]/10 pl-2"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#1e1b15] hover:bg-[#cf2335] text-[#e8e2d8] transition-colors ml-2"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport with Pan / Zoom */}
      <div className="flex-1 overflow-auto flex items-center justify-center p-4 cursor-grab active:cursor-grabbing">
        <div 
          className="transition-transform duration-200 ease-out origin-center max-w-full max-h-full"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="rounded-xl object-contain max-h-[82vh] shadow-2xl border border-[#e8e2d8]/10"
          />
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-3 border-t border-[#e8e2d8]/10 flex items-center justify-between text-xs font-mono text-[#e4bdbc]/60">
        <span>{lang === 'en' ? 'Use mouse scroll or zoom buttons to inspect details' : '支持滚轮与缩放按键查看高精细节'}</span>
        <span>Original Master Quality</span>
      </div>
    </div>
  );
};
