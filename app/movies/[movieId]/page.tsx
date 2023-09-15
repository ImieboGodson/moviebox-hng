import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import MovieClient from "./MovieClient";
import getMovieById from "@/app/actions/getMovieById";

interface IParams {
  movieId: number;
}

const MoviePage = async ({ params }: { params: IParams }) => {
  const movie = await getMovieById(params);

  if (!movie) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState title="Resource not found." />
        </Container>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <MovieClient data={movie} />
    </ClientOnly>
  );
};

export default MoviePage;
