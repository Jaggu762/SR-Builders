import { Building2, Factory, Home, Store, Warehouse, MapPin, Calendar, DollarSign } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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

  const projects = [
    {
      id: 1,
      title: 'Industrial Manufacturing Facility',
      category: 'industrial',
      location: 'Rai, Sonipat',
      year: '2023',
      value: '3.5 Cr',
      description: 'Complete construction of 50,000 sq ft manufacturing facility with heavy-duty foundations and steel structures',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Factory,
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      id: 2,
      title: 'Commercial Office Complex',
      category: 'commercial',
      location: 'Sonipat',
      year: '2023',
      value: '2.8 Cr',
      description: 'Modern 4-story office building with contemporary design and smart building features',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Building2,
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      id: 3,
      title: 'Warehouse & Storage Complex',
      category: 'industrial',
      location: 'Kundli Industrial Area',
      year: '2022',
      value: '2.2 Cr',
      description: 'Large-scale warehouse facility with advanced loading docks and climate control systems',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Warehouse,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      id: 4,
      title: 'Residential Villa Complex',
      category: 'residential',
      location: 'Sonipat',
      year: '2022',
      value: '1.8 Cr',
      description: 'Luxury residential villas with modern amenities and sustainable design features',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Home,
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      id: 5,
      title: 'Retail Shopping Center',
      category: 'commercial',
      location: 'Rai',
      year: '2021',
      value: '1.5 Cr',
      description: 'Multi-tenant retail space with modern façade and customer-friendly layout',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Store,
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      id: 6,
      title: 'Production Plant Expansion',
      category: 'industrial',
      location: 'Kundli',
      year: '2021',
      value: '2.0 Cr',
      description: 'Expansion and modernization of existing production facility with new equipment installation',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Factory,
      gradient: 'from-cyan-500 to-teal-600',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            Our Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A showcase of our completed projects demonstrating quality, innovation, and excellence
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-orange-500/50 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className={`absolute top-4 right-4 p-3 bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-lg text-xs font-semibold text-orange-400 border border-orange-500/30">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <DollarSign className="w-4 h-4 text-purple-400" />
                    <span>Project Value: {project.value}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border border-slate-700/50 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Project Highlights</h3>
              <ul className="space-y-4">
                {[
                  '12+ Crores in total project value delivered',
                  'Successfully completed projects across industrial, commercial, and residential sectors',
                  'On-time delivery with zero compromise on quality',
                  'Strong relationships with clients leading to repeat business',
                  'Expert team managing projects from conception to completion',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-6 text-center border border-orange-500/30">
                <div className="text-4xl font-bold text-orange-400 mb-2">12+</div>
                <div className="text-slate-300 text-sm">Crores Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl p-6 text-center border border-green-500/30">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-slate-300 text-sm">On-Time Delivery</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 text-center border border-blue-500/30">
                <div className="text-4xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-slate-300 text-sm">Project Types</div>
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
