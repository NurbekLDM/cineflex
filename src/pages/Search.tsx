
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Movie, movies } from '@/lib/data';
import MovieCard from '@/components/MovieCard';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  useEffect(() => {
    if (query) {
      // Simple search implementation - case insensitive search through titles and overview
      const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.overview.toLowerCase().includes(query.toLowerCase()) ||
        movie.genres.some(genre => genre.toLowerCase().includes(query.toLowerCase()))
      );
      
      setSearchResults(filteredMovies);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <div className="movie-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {query ? `Search Results for "${query}"` : 'Search'}
          </h1>
          
          {query ? (
            <p className="text-muted-foreground mb-8">
              {searchResults.length === 0 
                ? 'No results found. Try a different search term.' 
                : `Found ${searchResults.length} result${searchResults.length === 1 ? '' : 's'}`}
            </p>
          ) : (
            <p className="text-muted-foreground mb-8">Search for movies by title, genre, or keywords</p>
          )}
          
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {searchResults.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : query ? (
            <div className="flex flex-col items-center justify-center py-12">
              <SearchIcon size={64} className="text-muted-foreground mb-4" />
              <p className="text-lg mb-4 text-center">No movies match your search criteria</p>
              <Button asChild>
                <a href="/">Browse All Movies</a>
              </Button>
            </div>
          ) : null}
        </div>
      </main>
      <footer className="py-8 bg-card/50 mt-auto">
        <div className="movie-container text-center">
          <p className="text-gray-400 text-sm">© 2025 CineFlix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Search;
