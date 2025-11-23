import {
  Building2,
  Wrench,
  Hammer,
  PenTool,
  ShieldCheck,
  ClipboardCheck,
  Layers,
  Settings,
  Truck,
  HardHat,
  Factory,
  Home,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Services() {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const services = [
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'Complete construction solutions from foundation to finishing for all building types',
      features: ['Site preparation', 'Structural work', 'Building envelope', 'Final finishes'],
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-500/10 to-orange-600/10',
      borderColor: 'border-orange-500/30 hover:border-orange-500/60',
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'Expert oversight ensuring projects are completed on time, within budget, and to specification',
      features: ['Planning & scheduling', 'Resource allocation', 'Quality control', 'Risk management'],
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-500/10 to-emerald-600/10',
      borderColor: 'border-green-500/30 hover:border-green-500/60',
    },
    {
      icon: PenTool,
      title: 'Design-Build Services',
      description: 'Integrated approach combining design and construction for streamlined project delivery',
      features: ['Concept development', 'Engineering design', 'Value engineering', 'Construction execution'],
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-500/30 hover:border-blue-500/60',
    },
    {
      icon: Factory,
      title: 'Industrial Construction',
      description: 'Specialized construction for manufacturing facilities, warehouses, and industrial complexes',
      features: ['Heavy foundations', 'Steel structures', 'MEP systems', 'Safety compliance'],
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'border-purple-500/30 hover:border-purple-500/60',
    },
    {
      icon: Home,
      title: 'Commercial & Residential',
      description: 'Quality construction services for office buildings, retail spaces, and residential projects',
      features: ['Space planning', 'Interior finishing', 'HVAC installation', 'Landscaping'],
      gradient: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-500/10 to-rose-600/10',
      borderColor: 'border-pink-500/30 hover:border-pink-500/60',
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with modern upgrades and comprehensive renovation services',
      features: ['Space optimization', 'Structural modifications', 'Modern amenities', 'Energy efficiency'],
      gradient: 'from-cyan-500 to-teal-600',
      bgGradient: 'from-cyan-500/10 to-teal-600/10',
      borderColor: 'border-cyan-500/30 hover:border-cyan-500/60',
    },
  ];

  const additionalServices = [
    { icon: ShieldCheck, title: 'Quality Assurance', description: 'Systematic inspection and testing' },
    { icon: Layers, title: 'Civil Works', description: 'Earthwork, foundation, and structural services' },
    { icon: Settings, title: 'MEP Services', description: 'Mechanical, electrical, and plumbing systems' },
    { icon: Truck, title: 'Material Supply', description: 'Quality materials and timely delivery' },
    { icon: HardHat, title: 'Safety Management', description: 'Comprehensive site safety protocols' },
    { icon: Hammer, title: 'Finishing Works', description: 'Flooring, painting, and interior finishes' },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
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
            Our Services
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your project needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-3xl p-8 border ${service.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
              Additional Capabilities
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Supporting services to ensure comprehensive project delivery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transform hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${900 + index * 50}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-3 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">{service.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border border-slate-700/50 text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-3xl font-bold text-white mb-6">Have Something Unique in Mind?</h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            We know that no two projects are exactly alike. That's why we listen first, then craft custom solutions 
            tailored to your specific needs, budget, and vision. Let's talk about what you're planning to build.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
