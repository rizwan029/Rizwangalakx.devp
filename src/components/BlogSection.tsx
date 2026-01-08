import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

// Import blog images
import blogGsap from '@/assets/blog-gsap.jpg';
import blogThreejs from '@/assets/blog-threejs.jpg';
import blogReact from '@/assets/blog-react.jpg';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    title: 'Mastering GSAP Animations in React',
    excerpt: 'Learn how to create stunning, performant animations using GSAP with React hooks and best practices for smooth user experiences.',
    image: blogGsap,
    date: 'Jan 5, 2026',
    readTime: '8 min read',
    category: 'Animation',
    featured: true,
    url: '#',
  },
  {
    title: 'Building Immersive 3D Experiences with Three.js',
    excerpt: 'A deep dive into creating interactive 3D scenes, lighting, and camera controls for modern web applications.',
    image: blogThreejs,
    date: 'Dec 28, 2025',
    readTime: '12 min read',
    category: '3D Graphics',
    featured: false,
    url: '#',
  },
  {
    title: 'React Performance Optimization Techniques',
    excerpt: 'Essential strategies for optimizing React applications including memoization, code splitting, and virtual DOM optimization.',
    image: blogReact,
    date: 'Dec 15, 2025',
    readTime: '10 min read',
    category: 'React',
    featured: false,
    url: '#',
  },
];

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.blog-title',
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

      // Featured article animation
      gsap.fromTo(
        '.featured-article',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.blog-grid',
            start: 'top 75%',
          },
        }
      );

      // Side articles stagger animation
      gsap.fromTo(
        '.side-article',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.blog-grid',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featuredArticle = articles.find((a) => a.featured);
  const sideArticles = articles.filter((a) => !a.featured);

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative min-h-screen py-20 md:py-32 px-6 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="floating-orb w-60 h-60 -top-10 left-1/4 opacity-15" />
      <div className="floating-orb w-40 h-40 bottom-20 right-10 opacity-20 bg-[radial-gradient(circle,hsla(280,80%,60%,0.3)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16 md:mb-24 blog-title">
          <p className="text-primary tracking-[0.3em] text-sm uppercase mb-4 font-display">
            Latest Insights
          </p>
          <h2 className="section-title">
            Blog & <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sharing knowledge about web development, animations, and modern technologies
          </p>
        </div>

        {/* Blog grid - Featured + Side articles */}
        <div className="blog-grid grid lg:grid-cols-2 gap-8">
          {/* Featured article */}
          {featuredArticle && (
            <article className="featured-article glass-card group overflow-hidden lg:row-span-2">
              <a href={featuredArticle.url} className="block h-full">
                {/* Image */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-display font-medium rounded-full bg-primary/90 text-primary-foreground">
                      {featuredArticle.category}
                    </span>
                  </div>

                  {/* Featured badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-display font-medium rounded-full bg-accent/90 text-accent-foreground flex items-center gap-1">
                      <BookOpen size={12} />
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl lg:text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                    Read Article
                    <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            </article>
          )}

          {/* Side articles */}
          <div className="space-y-6">
            {sideArticles.map((article) => (
              <article
                key={article.title}
                className="side-article glass-card group overflow-hidden"
              >
                <a href={article.url} className="flex flex-col sm:flex-row h-full">
                  {/* Image */}
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 hidden sm:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent sm:hidden" />
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 text-xs font-display font-medium rounded-full bg-primary/90 text-primary-foreground">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col justify-center">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-base mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all duration-300">
                      Read More
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* View all articles button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="btn-glow inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Curved decorative line */}
      <div className="curved-line w-[400px] h-[400px] -right-60 bottom-40 border-2 -rotate-12" />
    </section>
  );
};

export default BlogSection;
