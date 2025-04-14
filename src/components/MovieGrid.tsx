
import React, { useState } from 'react';
import MovieCard from '@/components/MovieCard';
import { genres, movies } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { FilterX } from 'lucide-react';

interface MovieGridProps {
  title: string;
  subtitle?: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ title, subtitle }) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  
  const filteredMovies = selectedGenres.length > 0 
    ? movies.filter(movie => 
        movie.genres.some(genre => selectedGenres.includes(genre))
      )
    : movies;

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const clearFilters = () => {
    setSelectedGenres([]);
  };

  return (
    <section className="py-12">
      <div className="movie-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            {subtitle && <p className="text-gray-400">{subtitle}</p>}
          </div>
          
          {selectedGenres.length > 0 && (
            <Button 
              variant="ghost" 
              className="mt-4 md:mt-0 flex items-center gap-2"
              onClick={clearFilters}
            >
              <FilterX size={18} />
              Clear Filters
            </Button>
          )}
        </div>

        {/* Genre Pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {genres.slice(0, 12).map((genre) => (
            <button
              key={genre}
              className={`text-sm px-4 py-1.5 rounded-full transition-colors ${
                selectedGenres.includes(genre)
                  ? 'bg-movie-primary text-white'
                  : 'bg-secondary text-gray-300 hover:bg-secondary/80'
              }`}
              onClick={() => toggleGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No movies found with the selected genres</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={clearFilters}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieGrid;
