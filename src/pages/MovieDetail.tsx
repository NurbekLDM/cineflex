
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Star, Clock, Calendar, ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { movies } from '@/lib/data';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find(m => m.id === Number(id));
  const [showTrailer, setShowTrailer] = useState(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Movie not found</h2>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Format runtime to hours and minutes
  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  // Format release date
  const formatReleaseDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero section with backdrop */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.backdropPath})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/30"></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
        
        <div className="movie-container relative h-full flex items-end pb-12">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 w-full">
            {/* Poster */}
            <div className="hidden md:block rounded-lg overflow-hidden shadow-xl">
              <img 
                src={movie.posterPath} 
                alt={movie.title} 
                className="w-full h-auto"
              />
            </div>
            
            {/* Movie Info */}
            <div className="animate-fade-in">
              <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors">
                <ArrowLeft size={16} className="mr-1" />
                Back to Browse
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                {movie.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm md:text-base mb-4">
                <div className="flex items-center gap-1">
                  <Star size={18} className="text-yellow-500 fill-yellow-500" />
                  <span>{movie.voteAverage.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={18} className="text-gray-400" />
                  <span>{formatRuntime(movie.runtime)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={18} className="text-gray-400" />
                  <span>{formatReleaseDate(movie.releaseDate)}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre, idx) => (
                  <span 
                    key={idx}
                    className="bg-secondary/60 backdrop-blur-sm text-sm px-3 py-1 rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 max-w-3xl">
                {movie.overview}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="gap-2 bg-movie-primary hover:bg-movie-primary/90"
                  onClick={() => setShowTrailer(true)}
                >
                  <Play size={18} /> Play Trailer
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-white/30">
                  <ExternalLink size={18} /> Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile poster for small screens */}
      <div className="md:hidden movie-container -mt-24 mb-8">
        <div className="rounded-lg overflow-hidden shadow-xl max-w-[200px] mx-auto">
          <img 
            src={movie.posterPath} 
            alt={movie.title} 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content tabs */}
      <div className="movie-container py-8">
        <Tabs defaultValue="trailer">
          <TabsList className="w-full flex mb-8 justify-start bg-card border-b border-b-border overflow-x-auto">
            <TabsTrigger value="trailer" className="flex-1 max-w-[180px]">Trailer</TabsTrigger>
            <TabsTrigger value="cast" className="flex-1 max-w-[180px]">Cast</TabsTrigger>
            <TabsTrigger value="screenshots" className="flex-1 max-w-[180px]">Screenshots</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trailer" className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={movie.trailerUrl}
                  title={`${movie.title} Trailer`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cast" className="animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {movie.cast.map((person) => (
                <div key={person.id} className="bg-card rounded-lg overflow-hidden shadow-md">
                  <div className="aspect-[3/4]">
                    <img 
                      src={person.profilePath} 
                      alt={person.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">{person.name}</h4>
                    <p className="text-sm text-gray-400">{person.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="screenshots" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {movie.screenshots.map((screenshot, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={screenshot} 
                    alt={`${movie.title} screenshot ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Trailer Dialog */}
      <Dialog open={showTrailer} onOpenChange={setShowTrailer}>
        <DialogContent className="max-w-[90vw] w-[1000px] p-0 bg-black">
          <div className="relative aspect-video w-full">
            <iframe
              src={`${movie.trailerUrl}?autoplay=1`}
              title={`${movie.title} Trailer`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MovieDetail;
