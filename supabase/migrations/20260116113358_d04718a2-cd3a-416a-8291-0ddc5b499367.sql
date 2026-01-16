-- Create blog_articles table
CREATE TABLE public.blog_articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT,
  category TEXT NOT NULL,
  image_url TEXT,
  read_time TEXT NOT NULL DEFAULT '5 min read',
  is_featured BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (blog articles are public)
CREATE POLICY "Blog articles are publicly readable" 
ON public.blog_articles 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_articles_updated_at
BEFORE UPDATE ON public.blog_articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample blog articles
INSERT INTO public.blog_articles (title, excerpt, category, image_url, read_time, is_featured, published_at) VALUES
(
  'Mastering GSAP Animations',
  'Learn how to create stunning, performant animations with GSAP ScrollTrigger and advanced timeline techniques for modern web experiences.',
  'Animation',
  '/placeholder.svg',
  '8 min read',
  true,
  '2024-01-15'
),
(
  'Building 3D Experiences with Three.js',
  'A comprehensive guide to creating immersive 3D web experiences using Three.js, WebGL, and modern rendering techniques.',
  '3D Graphics',
  '/placeholder.svg',
  '12 min read',
  false,
  '2024-01-10'
),
(
  'React Performance Optimization',
  'Deep dive into React performance patterns, memoization strategies, and bundle optimization for blazing-fast applications.',
  'React',
  '/placeholder.svg',
  '10 min read',
  false,
  '2024-01-05'
);