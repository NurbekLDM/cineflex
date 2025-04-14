
import React from 'react';
import Navbar from '@/components/Navbar';
import MovieGrid from '@/components/MovieGrid';

const Movies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <div className="movie-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">All Movies</h1>
          <p className="text-muted-foreground mb-8">Browse our collection of movies</p>
        </div>
        <MovieGrid 
          title="" 
          subtitle=""
        />
      </main>
      <footer className="py-8 bg-card/50">
        <div className="movie-container text-center">
          <p className="text-gray-400 text-sm">© 2025 CineFlix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Movies;
