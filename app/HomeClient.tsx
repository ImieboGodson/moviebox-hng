"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "./components/Container";
import Button from "./components/Button";

import { BsDashLg, BsPlayCircleFill } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import EmptyState from "./components/EmptyState";
import MovieCard from "./components/cards/MovieCard";
import { Movie } from "@/types";

interface HomeClientProps {
  topRatedMovies: Movie[];
  popularMovies: Movie[];
}

const HomeClient: React.FC<HomeClientProps> = ({
  topRatedMovies,
  popularMovies,
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [popularArray, setpopularArray] = useState(popularMovies);
  const numbers = [1, 2, 3, 4, 5];
  const router = useRouter();

  const changeShowing = useCallback(() => {
    if (currentIndex === popularArray.length) {
      setCurrentIndex(0);
    }

    setCurrentIndex((value) => value + 1);
  }, [currentIndex, popularArray]);

  useEffect(() => {
    const interval = setInterval(() => {
      changeShowing();
    }, 20000);

    return () => clearInterval(interval);
  }, [changeShowing]);

  return (
    <main className="-mt-24 min-w-screen min-h-screen flex-col items-center justify-center">
      <header className="relative w-full h-[110vh]">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            popularArray[currentIndex - 1].backdrop_path
          }`}
          fill
          alt="movie backdrop"
          className="object-cover w-full h-full -z-10 transition"
        />
        <div className="relative w-full h-full md:pt-24 bg-transparent  z-0">
          <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center">
            <div className="p-2 flex flex-col items-end gap-2 border border-white">
              {numbers.map((number) => {
                return (
                  <div
                    key={number}
                    className="flex flex-row items-center gap-1 transition"
                  >
                    <div
                      className={`text-lg font-extrabold ${
                        currentIndex === number ? "block" : "hidden"
                      }`}
                    >
                      <Image
                        src="/images/dash.svg"
                        height={16}
                        width={16}
                        alt="dash"
                      />
                    </div>
                    <div
                      className={`${
                        currentIndex === number
                          ? "text-xl font-extrabold text-white"
                          : "text-sm font-light text-neutral-400"
                      }`}
                    >
                      {number}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Container>
            <div className="w-full h-[60vh] bg-transparent flex gap-4 flex-col items-start justify-center ">
              <div className="w-[28%] py-5 flex gap-4 flex-col text-white bg-transparent">
                <h1 className="text-5xl/tight font-bold">
                  {popularArray[currentIndex - 1].title}
                </h1>
                <div className="w-full flex gap-10 flex-row justify-start items-center">
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      src="/images/imdb.png"
                      height={35}
                      width={35}
                      alt="imdb icon"
                    />
                    <div className="flex flex-row text-xs font-extralight">
                      {popularArray[currentIndex - 1].vote_average} / 10
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      src="/images/tomato.png"
                      height={16}
                      width={16}
                      alt="rotten tomato icon"
                    />
                    <div className="flex flex-row text-xs font-extralight">
                      {popularArray[currentIndex - 1].vote_average * 10}%
                    </div>
                  </div>
                </div>
                <div className="w-full text-xs font-extralight">
                  <p>{popularArray[currentIndex - 1].overview}</p>
                </div>
                <div className="w-[55%]">
                  <Button
                    label="WATCH TRAILER"
                    onClick={() =>
                      router.push(
                        `/movies/${popularArray[currentIndex - 1].id}`
                      )
                    }
                    icon={BsPlayCircleFill}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      <section className="w-full py-16 bg-transparent">
        <Container>
          <div className="w-full flex flex-col gap-12">
            <div className="w-full flex flex-row justify-between items-center">
              <p className="text-3xl font-bold text-black">Featured Movies</p>
              <div
                onClick={() => router.push("/movies")}
                className="flex flex-row gap-2 items-center text-rose-700 text-sm font-semibold cursor-pointer"
              >
                See more
                <FiChevronRight size={18} />
              </div>
            </div>
            <div className="w-full">
              {!topRatedMovies ? (
                <EmptyState
                  title="No featured Movies"
                  subtitle="Try refreshing the page."
                  showReset
                  center
                />
              ) : (
                <div className="w-full grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                  {topRatedMovies.map((movie) => {
                    return (
                      <MovieCard
                        key={movie.id}
                        currentUser={null}
                        data={movie}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default HomeClient;
