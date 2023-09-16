import { Suspense } from "react";
import getPopularMovies from "./actions/getPopularMovies";
import getTopRatedMovies from "./actions/getTopRatedMovies";
import HomeClient from "./HomeClient";
import Loading from "./loading";

const Home = async () => {
  const topRatedMovies = (await getTopRatedMovies()).topTen;
  const popularMovies = await getPopularMovies();

  return (
    <Suspense fallback={<Loading />}>
      <HomeClient
        topRatedMovies={topRatedMovies}
        popularMovies={popularMovies}
      />
    </Suspense>
  );
};

export default Home;
