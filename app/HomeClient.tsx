"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "./components/Container";
import Button from "./components/Button";

import { BsDashLg, BsPlayCircleFill } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import EmptyState from "./components/EmptyState";
import { results } from "@/db.json";
import MovieCard from "./components/cards/MovieCard";

const HomeClient = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const [featuredMovies, setFeaturedMovies] = useState(results);
  const numbers = [1, 2, 3, 4, 5];

  const router = useRouter();

  return (
    <main className="-mt-24 min-w-screen min-h-screen flex-col items-center justify-center">
      <header className="relative w-full h-[110vh]">
        <Image
          src="/images/poster.png"
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
                        activeIndex === number ? "block" : "hidden"
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
                        activeIndex === number
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
                  John Wick 3: Parabellum
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
                      86.0 / 100
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
                      97%
                    </div>
                  </div>
                </div>
                <div className="w-full text-xs font-extralight">
                  <p>
                    John Wick is on the run after killing a member of the
                    international assassins&apos; guild, and with a $14 million
                    price tag on his head, he is the target of hit men and women
                    everywhere.
                  </p>
                </div>
                <div className="w-[55%]">
                  <Button
                    label="WATCH TRAILER"
                    onClick={() => {}}
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
              {!featuredMovies ? (
                <EmptyState
                  title="No featured Movies"
                  subtitle="Try refreshing the page."
                  showReset
                  center
                />
              ) : (
                <div className="w-full grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                  <MovieCard currentUser={null} data={results[0]} />
                  <MovieCard currentUser={null} data={results[1]} />
                  <MovieCard currentUser={null} data={results[2]} />
                  <MovieCard currentUser={null} data={results[3]} />
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
