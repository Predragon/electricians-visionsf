export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          {/* Brand */}
          <a
            href="#home"
            className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 rounded-md"
          >
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-blue-400">Vision</span>
              <span className="text-amber-400">SF</span>
            </span>
          </a>

          {/* Tagline */}
          <p className="text-gray-400 max-w-md">
            Modern websites for electrical contractors — built by people who understand the trade.
          </p>

          {/* Contact Link */}
          <a
            href="mailto:hello@visionsf.ai"
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            hello@visionsf.ai
          </a>

          {/* VisionSF Link */}
          <a
            href="https://visionsf.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
          >
            A VisionSF project
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-600">
            &copy; {currentYear} VisionSF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
