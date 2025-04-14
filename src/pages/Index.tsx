
import React from 'react';
import Hero from '@/components/Hero';
import MovieGrid from '@/components/MovieGrid';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MovieGrid 
          title="Explore Movies" 
          subtitle="Discover your next favorite film"
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

export default Index;
