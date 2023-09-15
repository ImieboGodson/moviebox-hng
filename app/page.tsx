import getPopularMovies from "./actions/getPopularMovies";
import getTopRatedMovies from "./actions/getTopRatedMovies";
import ClientOnly from "./components/ClientOnly";
import HomeClient from "./HomeClient";

export default async function Home() {
  const topRatedMovies = await getTopRatedMovies();

  const popularMovies = await getPopularMovies();

  return (
    <ClientOnly>
      <HomeClient
        topRatedMovies={topRatedMovies}
        popularMovies={popularMovies}
      />
    </ClientOnly>
  );
}
