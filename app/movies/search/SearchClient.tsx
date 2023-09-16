"use client";

import MovieCard from "@/app/components/cards/MovieCard";
import { Movie } from "@/types";

interface SearchClientProps {
  movies: Movie[];
}

const SearchClient: React.FC<SearchClientProps> = ({ movies }) => {
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

export default SearchClient;
