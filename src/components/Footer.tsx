import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    'General Contracting',
    'Project Management',
    'Design-Build Services',
    'Industrial Construction',
    'Commercial & Residential',
    'Renovation & Remodeling',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  SR BUILDERS
                </div>
                <div className="text-xs text-green-400 font-medium">We Build Smart Spaces</div>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Construction Services & Project Management delivering excellence since 2019.
              Providing quality construction solutions with clear communication and execution.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-slate-800 rounded-lg hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-orange-400 transition-colors duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-green-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-green-400 transition-colors duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919991918125"
                  className="flex items-start gap-3 text-slate-400 hover:text-orange-400 text-sm transition-colors duration-300 group"
                >
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-orange-500/20 transition-colors duration-300 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1">Phone</div>
                    <div>+91-9991918125</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:srbuilders9999@gmail.com"
                  className="flex items-start gap-3 text-slate-400 hover:text-green-400 text-sm transition-colors duration-300 group"
                >
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1">Email</div>
                    <div className="break-all">srbuilders9999@gmail.com</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <div className="p-2 bg-slate-800 rounded-lg flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1">Address</div>
                    <div className="leading-relaxed">
                      123 Construction Ave<br />
                      Building City, BC 12345
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              &copy; {currentYear} SR BUILDERS. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#sitemap" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-slate-500 text-xs">
            Crafted with excellence by SR BUILDERS
          </p>
        </div>
      </div>
    </footer>
  );
}
