
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Film } from 'lucide-react';

const TVShows = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <div className="movie-container py-12">
          <div className="flex flex-col items-center justify-center py-12">
            <Film size={64} className="text-movie-primary mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Coming Soon</h1>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Our TV Shows section is currently under development. Check back soon for the latest series!
            </p>
            <Button asChild>
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </div>
      </main>
      <footer className="py-8 bg-card/50">
        <div className="movie-container text-center">
          <p className="text-gray-400 text-sm">© 2025 CineFlix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TVShows;
