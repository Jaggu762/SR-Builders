import { Users, Award, Target, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const capabilities = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with decades of combined experience',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-500/30 hover:border-blue-500/60',
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'Certified and compliant with industry best practices',
      gradient: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-500/10 to-orange-600/10',
      borderColor: 'border-amber-500/30 hover:border-amber-500/60',
    },
    {
      icon: Target,
      title: 'Precision Delivery',
      description: 'On-time project completion with attention to detail',
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-500/10 to-emerald-600/10',
      borderColor: 'border-green-500/30 hover:border-green-500/60',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Adopting latest construction technologies and methods',
      gradient: 'from-cyan-500 to-teal-600',
      bgGradient: 'from-cyan-500/10 to-teal-600/10',
      borderColor: 'border-cyan-500/30 hover:border-cyan-500/60',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '25+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '150+', label: 'Expert Team Members' },
  ];

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 mb-4">
            Team & Capabilities
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Building excellence through expertise, dedication, and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${capability.bgGradient} backdrop-blur-sm rounded-2xl p-8 border ${capability.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${capability.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <capability.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-10 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Our diverse team brings together architects, engineers, project managers, and skilled craftsmen who share a commitment to excellence. With rigorous training programs and continuous professional development, we ensure every team member stays at the forefront of industry standards and innovations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
