import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Dribbble', icon: Dribbble, href: '#' },
];

const contactInfo = [
  { icon: Mail, text: 'hello@rizwan.dev', label: 'Email' },
  { icon: MapPin, text: 'Jakarta, Indonesia', label: 'Location' },
  { icon: Phone, text: '+62 812 3456 7890', label: 'Phone' },
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.contact-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Contact info animation
      gsap.fromTo(
        '.contact-info-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
          },
        }
      );

      // Form animation
      gsap.fromTo(
        '.contact-form',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
          },
        }
      );

      // Social links animation
      gsap.fromTo(
        '.social-link',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.social-links',
            start: 'top 90%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen py-20 md:py-32 px-6 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="floating-orb w-64 h-64 top-20 -right-20 opacity-20" />
      <div className="floating-orb w-48 h-48 bottom-40 left-10 opacity-15 bg-[radial-gradient(circle,hsla(280,80%,60%,0.3)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16 md:mb-24 contact-title">
          <p className="text-primary tracking-[0.3em] text-sm uppercase mb-4 font-display">
            Let's connect
          </p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <div className="contact-info space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Let's Create Something <span className="neon-text">Amazing</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects and collaborate with 
                creative minds. Whether you have a project in mind or just want to 
                say hello, feel free to reach out!
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="contact-info-item flex items-center gap-4 p-4 glass-card"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="social-links">
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="social-link p-3 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className="contact-form glass-card p-6 md:p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-muted-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-muted-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm mb-2 text-muted-foreground">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-glow w-full flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Curved decorative line */}
      <div className="curved-line w-[300px] h-[300px] -left-40 top-1/2 border-2 -rotate-45" />
    </section>
  );
};

export default ContactSection;
