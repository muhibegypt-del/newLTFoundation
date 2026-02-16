'use client';

import { Button } from '@/components/ui/button';
import { useRef, useEffect } from 'react';

// Optimized Video: 720p width, 70% quality, No Audio Channel
const VIDEO_URL = 'https://ik.imagekit.io/dzmabcda0/finals/WEB%20BANNER%20VIDEO%20.mp4?updatedAt=1768715864066&tr=w-720,q-70';
// Optimized Poster: 800px width, 80% quality
const POSTER_URL = 'https://ik.imagekit.io/dzmabcda0/finals/9-DSC00914.jpg?tr=w-800,q-70';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Auto-play was prevented:', error);
        });
      }
    }
  }, []);

  return (
    <section className="relative w-full h-dvh flex flex-col font-sans overflow-hidden bg-gray-900">

      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={POSTER_URL}
        />
        {/* Editorial gradient — heavier at bottom for text, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

        {/* HERO CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 gap-8">
          <div className="w-full max-w-4xl opacity-0 animate-[fadeIn_2.5s_ease-in-out_forwards] flex flex-col items-center gap-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-white tracking-wide text-center drop-shadow-sm leading-[1.05]">
              The Latif Foundation
            </h1>
            <div className="h-px w-24 bg-brand-gold/80" />
            <p className="text-lg md:text-2xl text-white/85 font-light tracking-wider text-center max-w-2xl drop-shadow-sm leading-relaxed">
              Honoring a life. Building a legacy. <br className="hidden sm:block" />
              Empowering communities in West Africa.
            </p>
          </div>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-10 py-6 text-base font-semibold shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 bg-brand-gold hover:bg-brand-gold-light text-white border-none"
            >
              <a href="#" className="flex items-center gap-2">
                Donate Now
              </a>
            </Button>
          </div>
        </div>

        {/* SCROLL INDICATOR — subtle thin line, gentle fade */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">Scroll</span>
          <span className="w-px h-8 bg-white/40 animate-pulse" />
        </div>
      </div>

    </section>
  );
}
