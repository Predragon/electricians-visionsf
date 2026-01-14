import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

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
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Simple gradient background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-amber-900/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Limited Badge */}
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 ring-1 ring-amber-500/20 transition-all duration-700 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
            </span>
            Limited to 5 contractors
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl font-bold tracking-tight text-white transition-all duration-700 ease-out sm:text-5xl md:text-6xl lg:text-7xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            We Wired Buildings for 30 Years.{' '}
            <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              Now We Wire Your Digital Presence.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 transition-all delay-150 duration-700 ease-out md:text-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            Modern websites for electrical contractors — built by people who understand the trade.
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
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-gray-900 shadow-lg shadow-amber-500/25 transition-all duration-200 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 active:scale-95"
            >
              Claim Your Spot — $750 Flat
              <ArrowRight
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            {/* Secondary CTA */}
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-600 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-blue-500 hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:scale-95"
            >
              <ChevronDown
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-y-1"
                aria-hidden="true"
              />
              See What You Get
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
