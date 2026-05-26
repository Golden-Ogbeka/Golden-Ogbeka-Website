import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

interface ImageGalleryProps {
  screenshots: string[];
  projectName: string;
}

export default function ImageGallery({ screenshots, projectName }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) return null;

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-display font-semibold mb-6">Project Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {screenshots.map((src, index) => (
          <div
            key={index}
            onClick={() => openGallery(index)}
            className="cursor-pointer relative aspect-video overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 group"
          >
            <img
              src={src}
              loading="lazy"
              alt={`${projectName} screenshot ${index + 1}`}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
               <span className="opacity-0 group-hover:opacity-100 text-white font-medium drop-shadow-md">View Full</span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-zinc-300 p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="relative w-full flex items-center justify-center">
              <button
                onClick={prevImage}
                className="absolute left-0 z-10 p-2 bg-black/50 text-white rounded-r-xl hover:bg-black/70 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>

              <img
                src={screenshots[currentIndex]}
                alt={`${projectName} full view ${currentIndex + 1}`}
                className="max-h-[85vh] object-contain w-full rounded-md"
              />

              <button
                onClick={nextImage}
                className="absolute right-0 z-10 p-2 bg-black/50 text-white rounded-l-xl hover:bg-black/70 transition-colors"
              >
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            
            <div className="mt-4 text-white/80">
              {currentIndex + 1} / {screenshots.length}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
