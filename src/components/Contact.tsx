import { useState } from 'react';
import { Mail, Send, CheckCircle, Loader2 } from 'lucide-react';

export interface ContactProps {
  // Add props as needed
}

// Formspree form ID - reuse existing or create new
const FORMSPREE_ID = 'xdaanvew';

const Contact: React.FC<ContactProps> = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    if (!form.checkValidity()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Reserve Your Spot
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Only taking 5 contractors. Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                You're In!
              </h3>
              <p className="text-gray-400 max-w-sm">
                Thanks for reaching out. We'll get back to you within 24 hours to discuss your project.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-blue-400 hover:text-blue-300 font-medium"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden field for form identification */}
              <input type="hidden" name="_form_name" value="electricians-contact" />

              {/* Two Column Layout for Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-500 text-white"
                  />
                </div>

                {/* Company Name Field */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Smith Electric"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-500 text-white"
                  />
                </div>
              </div>

              {/* Two Column Layout for Phone and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-500 text-white"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@smithelectric.com"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-500 text-white"
                  />
                </div>
              </div>

              {/* Current Website Field */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Current Website <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="current_website"
                  placeholder="https://yourcompany.com"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-500 text-white"
                />
              </div>

              {/* Frustration Textarea */}
              <div>
                <label
                  htmlFor="frustration"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  What's your biggest frustration with your current online presence? <span className="text-gray-500">(optional)</span>
                </label>
                <textarea
                  id="frustration"
                  name="frustration"
                  rows={4}
                  placeholder="Tell us what's not working..."
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-500 text-white resize-none"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-600 disabled:cursor-not-allowed text-gray-900 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Reserve My Spot
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Email Contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-2">Or email us directly:</p>
          <a
            href="mailto:hello@visionsf.ai"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            <Mail className="w-5 h-5" />
            hello@visionsf.ai
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
