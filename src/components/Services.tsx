import { AlertCircle, Globe, Calendar, Search, Clock, CheckCircle, Zap, Shield } from 'lucide-react';

export interface ServicesProps {
  // Add props as needed
}

const problems = [
  {
    icon: AlertCircle,
    text: "Your website looks like 2008",
  },
  {
    icon: Calendar,
    text: "Customers can't book online",
  },
  {
    icon: Search,
    text: "You're losing jobs to contractors with better Google presence",
  },
  {
    icon: Clock,
    text: "You're too busy running jobs to fix it",
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Modern, mobile-first website",
    description: "Looks great on every device — especially phones, where your customers search",
  },
  {
    icon: Calendar,
    title: "Online booking & quote request form",
    description: "Customers can reach you 24/7, even when you're on the job",
  },
  {
    icon: Search,
    title: "Google-optimized (local SEO basics)",
    description: "Show up when people search for electricians in your area",
  },
  {
    icon: Zap,
    title: "Fast load times",
    description: "No slow, bloated templates — your site loads instantly",
  },
  {
    icon: Shield,
    title: "You own it — no monthly fees",
    description: "Your site, your domain, your content. No lock-in, ever.",
  },
];

const Services: React.FC<ServicesProps> = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sound Familiar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            You're great at your trade. But the online stuff? That's where it gets frustrating.
          </p>

          {/* Problem Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="bg-red-50 rounded-xl p-6 border border-red-100"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 mb-4">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <p className="text-gray-800 font-medium">{problem.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* What You Get Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What You Get
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to look professional online — nothing you don't.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="relative group rounded-2xl p-6 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-blue-100">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Checkmark */}
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
