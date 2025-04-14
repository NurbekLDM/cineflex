
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trending, movies } from '@/lib/data';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredMovies = trending.map(id => movies.find(movie => movie.id === id)).filter(Boolean);

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === featuredMovies.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  // Format runtime to hours and minutes
  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  // Format release date to year
  const formatReleaseYear = (dateString: string) => {
    return new Date(dateString).getFullYear();
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {featuredMovies.map((movie, index) => (
        <div 
          key={movie?.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${movie?.backdropPath})` }}
          >
            <div className="absolute inset-0 bg-hero-pattern"></div>
          </div>
          
          {/* Content */}
          <div className="relative h-full flex items-end md:items-center">
            <div className="movie-container pb-24 md:pb-0">
              <div className="max-w-2xl animate-slide-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white">
                  {movie?.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-3 text-sm md:text-base mb-4">
                  <span className="bg-movie-primary/90 px-2 py-0.5 rounded-sm">
                    {movie?.voteAverage.toFixed(1)} ★
                  </span>
                  <span>{formatReleaseYear(movie?.releaseDate || '')}</span>
                  <span>{formatRuntime(movie?.runtime || 0)}</span>
                </div>
                
                <div className="hidden md:flex flex-wrap gap-2 mb-4">
                  {movie?.genres.map((genre, idx) => (
                    <span 
                      key={idx}
                      className="bg-secondary/60 backdrop-blur-sm text-xs px-3 py-1 rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 line-clamp-3 md:line-clamp-none">
                  {movie?.overview}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 bg-movie-primary hover:bg-movie-primary/90">
                    <Play size={18} /> Play Trailer
                  </Button>
                  <Link to={`/movie/${movie?.id}`}>
                    <Button size="lg" variant="outline" className="gap-2 border-white/30 hover:bg-white/10">
                      <Info size={18} /> More Info
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {featuredMovies.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
