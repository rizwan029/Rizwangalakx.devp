import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, FileCode, Palette, Layers, Github, Figma } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML5', icon: Code, color: 'text-primary' },
  { name: 'CSS3', icon: Palette, color: 'text-primary' },
  { name: 'JavaScript', icon: FileCode, color: 'text-primary' },
  { name: 'React', icon: Layers, color: 'text-primary' },
  { name: 'Figma', icon: Figma, color: 'text-accent' },
  { name: 'GitHub', icon: Github, color: 'text-primary' },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade and blur animation
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image slide in from left
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0, rotate: -5 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content fade in
      gsap.fromTo(
        contentRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Skills stagger animation
      gsap.fromTo(
        '.skill-item',
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-20 md:py-32 px-6 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="floating-orb w-60 h-60 top-20 -left-20 opacity-20" />
      <div className="floating-orb w-40 h-40 bottom-40 -right-10 opacity-15 bg-[radial-gradient(circle,hsla(280,80%,60%,0.3)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-primary tracking-[0.3em] text-sm uppercase mb-4 font-display">
            Get to know me
          </p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl animate-pulse-glow" />
              
              {/* Profile container */}
              <div className="profile-glow w-64 h-64 md:w-80 md:h-80 relative group">
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-card to-muted overflow-hidden">
                  {/* Placeholder avatar with initials */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <span className="text-6xl md:text-7xl font-display font-bold gradient-text">
                      R
                    </span>
                  </div>
                </div>
                
                {/* Hover effect ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-110" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border border-primary/30 animate-float" />
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-accent/20 animate-float-delayed" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold">
              Creative <span className="neon-text">Developer</span> & Designer
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I'm a passionate web developer with expertise in creating immersive digital 
              experiences. With a strong foundation in modern web technologies and a keen 
              eye for design, I transform ideas into stunning, functional websites.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              My focus is on crafting performant, accessible, and visually captivating 
              applications using cutting-edge tools like React, GSAP, and Three.js. 
              I believe in the power of animation and interaction to create memorable 
              user experiences.
            </p>

            {/* Skills grid */}
            <div ref={skillsRef} className="pt-6">
              <h4 className="text-lg font-display font-semibold mb-4 text-primary">
                Tech Stack
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-item skill-icon"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <skill.icon
                      size={32}
                      className={`mb-2 ${skill.color}`}
                      strokeWidth={1.5}
                    />
                    <span className="text-xs text-muted-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved decorative line */}
      <div className="curved-line w-[400px] h-[400px] -left-60 bottom-20 border-2 rotate-45" />
    </section>
  );
};

export default AboutSection;
