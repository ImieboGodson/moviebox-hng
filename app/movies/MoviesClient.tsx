"use client";

import { Movie } from "@/types";
import MovieCard from "../components/cards/MovieCard";

interface MoviesClientProps {
  movies: Movie[];
}

const MoviesClient: React.FC<MoviesClientProps> = ({ movies }) => {
  return (
    <div className="w-full py-24">
      <div className="w-full grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} currentUser={null} data={movie} />;
        })}
      </div>
    </div>
  );
};

export default MoviesClient;
