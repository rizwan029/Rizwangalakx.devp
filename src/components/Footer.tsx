import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" className="font-display font-bold text-xl tracking-wider gradient-text">
          RIZWAN
        </a>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          © {currentYear} Made with{' '}
          <Heart size={14} className="text-primary fill-primary animate-pulse" /> by Rizwan
        </p>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
