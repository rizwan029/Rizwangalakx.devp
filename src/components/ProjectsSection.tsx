import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code, Globe, ExternalLink } from 'lucide-react';

// Import project images
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectPortfolio from '@/assets/project-portfolio.jpg';
import projectDashboard from '@/assets/project-dashboard.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with seamless UX, stunning animations, and a sleek shopping cart interface.',
    tags: ['React', 'GSAP', 'Tailwind'],
    image: projectEcommerce,
    liveUrl: 'https://example-ecommerce.com',
    codeUrl: 'https://github.com/rizwan/ecommerce-platform',
  },
  {
    title: '3D Portfolio',
    description: 'Interactive 3D portfolio with floating orbs, immersive hero section, and creative web experiences.',
    tags: ['Three.js', 'React', 'Spline'],
    image: projectPortfolio,
    liveUrl: 'https://example-portfolio.com',
    codeUrl: 'https://github.com/rizwan/3d-portfolio',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization, charts, and professional business interface.',
    tags: ['React', 'D3.js', 'TypeScript'],
    image: projectDashboard,
    liveUrl: 'https://example-dashboard.com',
    codeUrl: 'https://github.com/rizwan/saas-dashboard',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.projects-title',
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

      // Project cards stagger animation
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen py-20 md:py-32 px-6 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="floating-orb w-72 h-72 -top-20 right-0 opacity-15" />
      <div className="floating-orb w-48 h-48 bottom-20 -left-10 opacity-20 bg-[radial-gradient(circle,hsla(280,80%,60%,0.3)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16 md:mb-24 projects-title">
          <p className="text-primary tracking-[0.3em] text-sm uppercase mb-4 font-display">
            My Work
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card glass-card group relative overflow-hidden"
            >
              {/* Project image */}
              <div className="h-48 md:h-56 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                
                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/90 backdrop-blur-sm border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="View live demo"
                  >
                    <Globe size={20} />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/90 backdrop-blur-sm border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="View source code"
                  >
                    <Code size={20} />
                  </a>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2 border-t border-border/30">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Code size={14} />
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/rizwan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Curved decorative line */}
      <div className="curved-line w-[350px] h-[350px] right-10 top-1/3 border rotate-12" />
    </section>
  );
};

export default ProjectsSection;
