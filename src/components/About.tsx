import { Target, Eye, Users, Award, CheckCircle2, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  const philosophyPoints = [
    {
      icon: CheckCircle2,
      title: 'Detailed Planning',
      description: 'Comprehensive project analysis and strategic planning before execution',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled engineers and supervisors ensuring quality at every stage',
    },
    {
      icon: Target,
      title: 'Clear Communication',
      description: 'Transparent updates and seamless coordination with all stakeholders',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous standards and systematic inspection processes',
    },
    {
      icon: TrendingUp,
      title: 'Timely Delivery',
      description: 'Efficient execution meeting deadlines without compromising quality',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            About SR Builders
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Building excellence since 2019 with a commitment to quality and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Story</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Founded in 2019, SR Builders has grown into a trusted name in construction services and project management.
                Based in Rai, Sonipat, Haryana, we specialize in delivering comprehensive building solutions for industrial,
                commercial, and residential projects.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                With a strong portfolio exceeding 12 Crores in project value, we have established ourselves as reliable
                partners who deliver on our promise of quality, timeliness, and transparent communication.
              </p>
              <p className="text-green-400 font-semibold text-lg">
                "I am assured" - That's the confidence we provide to every client.
              </p>
            </div>
          </div>

          <div
            className={`space-y-6 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-3xl p-8 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <Eye className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Vision</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To be the leading construction and project management company, recognized for innovation,
                sustainability, and delivering smart spaces that enhance quality of life and business operations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-3xl p-8 border border-green-500/30 hover:border-green-500/60 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mission</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To provide exceptional construction services through expert project management, quality craftsmanship,
                and unwavering commitment to client satisfaction. We build lasting relationships by delivering
                projects that exceed expectations.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
              Our Philosophy
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We believe in systematic project management and clear communication at every step
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transform hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl mb-4">
                    <point.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{point.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border border-slate-700/50 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Experienced team with 80+ skilled professionals',
                  'Proven track record with 12+ Crores in completed projects',
                  'Comprehensive services from design to execution',
                  'Transparent communication and regular updates',
                  'Quality materials and systematic inspection',
                  'Timely project delivery without compromise',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-6 text-center border border-orange-500/30">
                <div className="text-4xl font-bold text-orange-400 mb-2">5</div>
                <div className="text-slate-300 text-sm">Professional Engineers</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl p-6 text-center border border-green-500/30">
                <div className="text-4xl font-bold text-green-400 mb-2">10</div>
                <div className="text-slate-300 text-sm">Site Supervisors</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 text-center border border-blue-500/30">
                <div className="text-4xl font-bold text-blue-400 mb-2">80+</div>
                <div className="text-slate-300 text-sm">Skilled Workers</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-6 text-center border border-purple-500/30">
                <div className="text-4xl font-bold text-purple-400 mb-2">6+</div>
                <div className="text-slate-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
