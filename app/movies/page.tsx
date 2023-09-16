import { Suspense } from "react";

import getTopRatedMovies from "../actions/getTopRatedMovies";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import MovieCard from "../components/cards/MovieCard";
import Loading from "../loading";

export default async function MoviesPage() {
  const movies = (await getTopRatedMovies()).all;

  if (!movies) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState title="No movies available" />
        </Container>
      </ClientOnly>
    );
  }
  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <div className="w-full py-24">
          <div className="w-full grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {movies.map((movie: any) => {
              return <MovieCard key={movie.id} data={movie} />;
            })}
          </div>
        </div>
      </Container>
    </Suspense>
  );
}
