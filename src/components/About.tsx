import { Zap, DollarSign, Clock, CheckCircle } from 'lucide-react';

export interface AboutProps {
  // Add props as needed
}

const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="bg-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Why Us?
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/ev-charging-hero.jpg"
                alt="Professional electrical work"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
              <Zap className="h-4 w-4" />
              From the Trade
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Our father was an electrician in Yugoslavia.
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              We grew up pulling wire in the Bay Area. Mirkovic Electric has served contractors for decades.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We're not some random agency — <strong>we're from the trade</strong>.
            </p>

            <div className="pt-4">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-2xl font-bold">V</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">VisionSF</p>
                  <p className="text-blue-100 text-sm">Now we build AI-powered software in Silicon Valley</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-2">
                Simple Pricing
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl font-bold text-gray-900">$750</span>
                <span className="text-gray-500">flat</span>
              </div>
              <p className="text-gray-600 mt-2">No monthly fees. No subscriptions.</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Custom design & development</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Hosting setup included</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Basic local SEO</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">You own everything</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl mb-6">
              <Clock className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium text-gray-900">2-week delivery</p>
                <p className="text-sm text-gray-500">From kickoff to live</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <DollarSign className="w-5 h-5 text-amber-600" />
              <div>
                <p className="font-medium text-gray-900">No lock-in</p>
                <p className="text-sm text-gray-600">Your site, your domain, your content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
