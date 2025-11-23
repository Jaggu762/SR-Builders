import { ArrowLeft, Home, Mail, FileText } from 'lucide-react';

export default function Sitemap() {
  const sitePages = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { href: '#home', label: 'Home', description: 'Welcome to SR BUILDERS' },
        { href: '#about', label: 'About Us', description: 'Learn about our company and values' },
        { href: '#services', label: 'Services', description: 'Explore our construction services' },
        { href: '#team', label: 'Our Team', description: 'Meet our expert team members' },
        { href: '#projects', label: 'Projects', description: 'View our completed projects' },
        { href: '#contact', label: 'Contact', description: 'Get in touch with us' },
      ],
    },
    {
      title: 'Legal Pages',
      icon: FileText,
      links: [
        { href: '#privacy', label: 'Privacy Policy', description: 'How we handle your data' },
        { href: '#terms', label: 'Terms & Conditions', description: 'Terms of service and usage' },
      ],
    },
  ];

  return (
    <section id="sitemap" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </a>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-slate-700/50 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-600 mb-4">
            Sitemap
          </h1>
          <p className="text-slate-400 mb-12 text-lg">
            Navigate through all pages and sections of our website
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sitePages.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href={link.href}
                      className="group block p-5 bg-slate-900/50 hover:bg-slate-900/80 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-orange-400 group-hover:text-orange-300 transition-colors duration-300 mb-2">
                            {link.label}
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {link.description}
                          </p>
                        </div>
                        <ArrowLeft className="w-5 h-5 text-slate-600 group-hover:text-orange-400 transform rotate-180 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0 mt-1" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-xl p-6 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Need Help?</h3>
                  <p className="text-slate-400 mb-4">
                    Can't find what you're looking for? Get in touch with our team.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                    <ArrowLeft className="w-4 h-4 transform rotate-180" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
