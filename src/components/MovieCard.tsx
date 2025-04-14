
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { Movie } from '@/lib/data';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // Format release date to year
  const formatReleaseYear = (dateString: string) => {
    return new Date(dateString).getFullYear();
  };

  // Format runtime to hours and minutes
  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours === 0) return `${remainingMinutes}m`;
    if (remainingMinutes === 0) return `${hours}h`;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <Link 
      to={`/movie/${movie.id}`} 
      className="movie-card-hover group relative flex flex-col overflow-hidden bg-card rounded-lg shadow-lg"
    >
      <div className="aspect-[2/3] w-full overflow-hidden relative">
        <img 
          src={movie.posterPath} 
          alt={movie.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-card-gradient pt-16 pb-4 px-4 transition-opacity group-hover:opacity-100 opacity-90">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium">{movie.voteAverage.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-gray-300" />
              <span className="text-sm text-gray-300">{formatRuntime(movie.runtime)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold line-clamp-1 group-hover:text-movie-primary transition-colors">
          {movie.title}
        </h3>
        <span className="text-sm text-gray-400 mb-2">
          {formatReleaseYear(movie.releaseDate)}
        </span>
        <div className="flex flex-wrap gap-1 mt-auto">
          {movie.genres.slice(0, 2).map((genre, idx) => (
            <span 
              key={idx} 
              className="text-xs px-2 py-0.5 bg-secondary text-gray-300 rounded-sm"
            >
              {genre}
            </span>
          ))}
          {movie.genres.length > 2 && (
            <span className="text-xs px-2 py-0.5 bg-secondary text-gray-300 rounded-sm">
              +{movie.genres.length - 2}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
