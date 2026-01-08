import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with seamless UX and stunning animations.',
    tags: ['React', 'GSAP', 'Tailwind'],
    color: 'from-primary/20 to-accent/20',
  },
  {
    title: '3D Portfolio',
    description: 'Interactive 3D portfolio showcasing creative web experiences.',
    tags: ['Three.js', 'React', 'Spline'],
    color: 'from-accent/20 to-primary/20',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization.',
    tags: ['React', 'D3.js', 'TypeScript'],
    color: 'from-primary/20 to-secondary/40',
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
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card glass-card group relative overflow-hidden cursor-pointer`}
            >
              {/* Project image placeholder */}
              <div
                className={`h-48 md:h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code
                    size={60}
                    className="text-primary/30 group-hover:text-primary/50 transition-colors duration-500"
                  />
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* View button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-4">
                    <button className="p-3 rounded-full bg-background/90 backdrop-blur-sm border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <Globe size={20} />
                    </button>
                    <button className="p-3 rounded-full bg-background/90 backdrop-blur-sm border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <Code size={20} />
                    </button>
                  </div>
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
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Curved decorative line */}
      <div className="curved-line w-[350px] h-[350px] right-10 top-1/3 border rotate-12" />
    </section>
  );
};

export default ProjectsSection;
