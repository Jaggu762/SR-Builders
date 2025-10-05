import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+919991918125',
      link: 'tel:+919991918125',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'srbuilders9999@gmail.com',
      link: 'mailto:srbuilders9999@gmail.com',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'OPP. RELAINCE MET CITY GATE NO. SECTOR 5&7 YAKUBPUR JHAJJAR GURGAON HIGHWAY (HR.)',
      link: '#',
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
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
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className={`group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${info.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <info.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
              <p className="text-slate-300 text-sm">{info.content}</p>
            </a>
          ))}
        </div>

        <div
          className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="+91-755-581-1318"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl">
                <p className="text-green-400 text-center font-medium">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl">
                <p className="text-red-400 text-center font-medium">
                  Something went wrong. Please try again.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
