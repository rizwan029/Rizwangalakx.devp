import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            if (preloaderRef.current) {
              preloaderRef.current.style.display = 'none';
            }
            onComplete();
          },
        });
      },
    });

    // Animate text entrance
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
    );

    // Animate progress bar
    tl.to(
      progressBarRef.current,
      {
        width: '100%',
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: function () {
          const progressValue = Math.round(this.progress() * 100);
          setProgress(progressValue);
        },
      },
      '-=0.3'
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      {/* Floating orbs in background */}
      <div className="floating-orb w-64 h-64 top-1/4 left-1/4 animate-float opacity-30" />
      <div className="floating-orb w-48 h-48 bottom-1/4 right-1/4 animate-float-delayed opacity-20" />
      
      {/* Main content */}
      <div ref={textRef} className="relative z-10 flex flex-col items-center">
        <h1 className="preloader-text mb-2">RIZWAN</h1>
        <p className="text-muted-foreground tracking-[0.3em] text-sm uppercase">
          Web Developer
        </p>
      </div>

      {/* Progress bar */}
      <div className="progress-container relative z-10">
        <div ref={progressBarRef} className="progress-bar" />
      </div>

      {/* Progress percentage */}
      <span ref={percentRef} className="progress-text relative z-10">
        {progress}%
      </span>

      {/* Decorative curved lines */}
      <div className="curved-line top-10 right-10 w-40 h-40 rotate-45" />
      <div className="curved-line bottom-20 left-20 w-60 h-60 -rotate-12" />
    </div>
  );
};

export default Preloader;
