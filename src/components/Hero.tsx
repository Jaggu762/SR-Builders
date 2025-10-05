import { Building2, ArrowRight, Phone, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl mb-8 transform hover:scale-110 transition-transform duration-300">
              <Building2 className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2">
                SR BUILDERS
              </span>
            </h1>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              WE BUILD SMART SPACES
            </h2>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Construction Services & Project Management delivering excellence since 2019.
              We provide our clients with an <span className="text-green-400 font-semibold">"I am assured"</span> experience
              through clear communication and quality execution.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <a
              href="https://wa.me/919991918125?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20a%20construction%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Get Quote Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-800/80 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-orange-500/50 hover:border-orange-400 hover:bg-slate-700/80 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              View Our Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto pt-12 sm:pt-16 transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-orange-500/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-1 sm:mb-2">6+</div>
              <div className="text-slate-300 text-xs sm:text-sm">Years Experience</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-orange-500/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-1 sm:mb-2">12+</div>
              <div className="text-slate-300 text-xs sm:text-sm">Crores Projects</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-green-500/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2">80+</div>
              <div className="text-slate-300 text-xs sm:text-sm">Team Members</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-green-500/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2">100%</div>
              <div className="text-slate-300 text-xs sm:text-sm">Client Satisfaction</div>
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 sm:pt-12 transform transition-all duration-1000 delay-1200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <a
              href="tel:+919991918125"
              className="inline-flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors duration-300 group"
            >
              <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-orange-500/20 transition-colors duration-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium">+91-9991918125</span>
            </a>
            <a
              href="mailto:srbuilders9999@gmail.com"
              className="inline-flex items-center gap-3 text-slate-300 hover:text-green-400 transition-colors duration-300 group"
            >
              <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium break-all">srbuilders9999@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-white transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
