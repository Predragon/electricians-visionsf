import { useEffect, useState } from 'react';
import { ArrowRight, Play, CheckCircle2, Clock } from 'lucide-react';

export interface HeroProps {
  // Add props as needed
}

const Hero: React.FC<HeroProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-900"
    >
      {/* Background video with dark gradient overlay */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <video
          src="/VisionSF_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-background.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <h1
            className={`text-5xl font-bold tracking-tight text-white transition-all duration-700 ease-out md:text-6xl lg:text-7xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            Your Vision,{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Built by AI
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed text-gray-100 transition-all delay-150 duration-700 ease-out md:text-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            Fast, affordable, intelligent software development
            for startups and businesses everywhere.
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6 transition-all delay-300 duration-700 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent-500/25 transition-all duration-200 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 active:scale-95"
            >
              Start Your Project
              <ArrowRight
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            {/* Secondary CTA */}
            <a
              href="#how-it-works"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:border-primary-600 hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:scale-95"
            >
              <Play
                className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                aria-hidden="true"
              />
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div
            className={`mt-16 flex flex-col gap-4 sm:flex-row sm:gap-8 transition-all delay-500 duration-700 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Projects completed stat */}
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-md ring-1 ring-gray-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                <CheckCircle2
                  className="h-5 w-5 text-primary-600"
                  aria-hidden="true"
                />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-500">Projects completed</p>
              </div>
            </div>

            {/* Average delivery stat */}
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-md ring-1 ring-gray-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100">
                <Clock
                  className="h-5 w-5 text-accent-600"
                  aria-hidden="true"
                />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900">14 days</p>
                <p className="text-sm text-gray-500">Average delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
