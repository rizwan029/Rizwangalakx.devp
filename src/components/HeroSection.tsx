import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const curvedLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Title animation
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
      );

      // Subtitle animation
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );

      // CTA button animation
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.4'
      );

      // Curved line animation
      tl.fromTo(
        curvedLineRef.current,
        { opacity: 0, x: 100, rotate: 0 },
        { opacity: 0.3, x: 0, rotate: 15, duration: 1.2, ease: 'power2.out' },
        '-=0.8'
      );

      // Floating animation for decorative elements
      gsap.to('.hero-orb', {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });

      // Pulse animation for CTA button
      gsap.to(ctaRef.current, {
        boxShadow: '0 0 60px hsla(180, 100%, 50%, 0.8)',
        duration: 1.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/orb-Xpz9U8CUVC4Xmof5gjx0kCWq5/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="pointer-events-auto"
          title="3D Background"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/40 pointer-events-none" />
      </div>

      {/* Floating neon orbs */}
      <div className="hero-orb floating-orb w-32 h-32 top-1/4 left-10 md:left-20" />
      <div className="hero-orb floating-orb w-24 h-24 top-1/3 right-20 md:right-40 bg-[radial-gradient(circle,hsla(280,80%,60%,0.3)_0%,transparent_70%)]" />
      <div className="hero-orb floating-orb w-40 h-40 bottom-1/4 left-1/4" />
      <div className="hero-orb floating-orb w-20 h-20 bottom-1/3 right-10" />

      {/* Curved decorative line */}
      <div
        ref={curvedLineRef}
        className="curved-line w-[500px] h-[500px] -right-40 top-1/4 border-2"
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-primary tracking-[0.3em] text-sm md:text-base uppercase mb-4 font-display">
          Welcome to my world
        </p>

        <h1
          ref={titleRef}
          className="section-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">RIZWAN</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground/90">
            Web Developer
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting immersive digital experiences with cutting-edge technologies.
          Specializing in modern web development, animations, and 3D interactions.
        </p>

        <button
          ref={ctaRef}
          onClick={scrollToAbout}
          className="btn-glow"
        >
          Hire Me
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest text-muted-foreground uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
