"use client";

import SideNavbar from "@/app/components/navbar/SideNavbar";
import { Movie, MovieDetails } from "@/types";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoMdPricetags, IoIosList } from "react-icons/io";
import { PiCaretDownLight } from "react-icons/pi";

import formatDate from "@/app/libs/formatDate";
import formatInt from "@/app/libs/formatInt";
import Button from "@/app/components/Button";
import { useMemo } from "react";
import formatePlaytime from "@/app/libs/formatPlaytime";
import formatPlaytime from "@/app/libs/formatPlaytime";

interface MovieClientProps {
  data: MovieDetails;
}

const MovieClient: React.FC<MovieClientProps> = ({ data }) => {
  // console.log(data);

  const findCast = useMemo(() => {
    if (!data.credits) {
      return;
    }

    const findDirector = data.credits.crew.find(
      (item) => item.known_for_department === "Directing"
    );

    const findWriters = data.credits.crew.filter(
      (item) => item.known_for_department === "Writing"
    );

    if (!findDirector) {
      return;
    }

    if (!findWriters) {
      return;
    }

    const obj = {
      director: {
        name: findDirector?.name,
        id: findDirector?.id,
      },
      writers: findWriters,
    };

    return obj;
  }, [data.credits]);

  return (
    <div className="ml-auto w-[86vw] min-h-screen flex flex-row justify-between items-center overflow-x-hidden">
      <div className="w-full h-full py-4 px-6 bg-transparent overflow-x-hidden">
        <div className="w-full h-full flex flex-col gap-2 items-start">
          <div className="relative group bg-neutral-200 w-full h-[50vh] rounded-xl overflow-hidden cursor-pointer">
            <Image
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt="movie backdrop"
              fill
              priority
              data-testid="movie-poster"
              className="object-cover transition"
            />
            <div className="absolute top-[40%] left-[45%] flex flex-col gap-2 items-center text-white z-30">
              <div className="p-5 rounded-full bg-neutral-200/30 group-hover:bg-neutral-200/60 cursor-pointer transition">
                <FaPlay size={30} />
              </div>
              <div className="text-base font-normal">Watch Trailer</div>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="w-full flex flex-col gap-2 items-start">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <div className="flex flex-row gap-2 items-center text-base font-semibold text-neutral-700">
                    <div data-testid="movie-title">{data.title}</div>
                    <span className="text-[3px]">&#9899;</span>
                    <div data-testid="movie-release-date">
                      {formatDate(data.release_date)}
                    </div>
                    <span className="text-[3px]">&#9899;</span>
                    <div>PG-16</div>
                    <span className="text-[3px]">&#9899;</span>
                    <div data-testid="movie-runtime">
                      {formatPlaytime(data.runtime)}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center text-sm">
                    {data.genres.map((genre) => {
                      return (
                        <div
                          key={genre.id}
                          className="h-full px-2 text-[0.65rem] text-rose-700 border border-rose-700/30 bg-white rounded-xl"
                        >
                          {genre.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <div className="text-base">⭐</div>
                  <div className="flex flex-row gap-1 items-center text-sm font-semibold text-neutral-600">
                    <span className="text-lg text-neutral-400">
                      {data.vote_average.toFixed(1)}
                    </span>{" "}
                    | {formatInt(data.vote_count)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-2 grid grid-cols-3 gap-6">
            <div className="col-span-2 flex flex-col gap-8 items-start">
              <div
                data-testid="movie-overview"
                className="w-full text-base text-neutral-600"
              >
                {data.overview}
              </div>
              <div className="flex flex-col gap-4 items-start">
                {findCast?.director && (
                  <div className="flex flex-row gap-1 items-center">
                    <div className="text-base text-neutral-600">Director :</div>
                    <div
                      key={findCast?.director.id}
                      className="text-base text-rose-700"
                    >
                      {findCast?.director.name}
                    </div>
                  </div>
                )}
                {findCast?.writers[0] && (
                  <div className="flex flex-row gap-1 items-center">
                    <div className="text-base text-neutral-600">Writers :</div>
                    <div
                      key={findCast?.writers[0].id}
                      className="text-base text-rose-700"
                    >
                      {findCast?.writers[0].name}
                    </div>
                    {findCast?.writers[2] && (
                      <div
                        key={findCast?.writers[2].id}
                        className="text-base text-rose-700"
                      >
                        {findCast?.writers[2].name}
                      </div>
                    )}
                  </div>
                )}
                <div className="flex flex-row gap-1 items-center">
                  <div className="text-base text-neutral-600">Stars :</div>
                  <div
                    key={data.credits.cast[0].id}
                    className="text-base text-rose-700"
                  >
                    {data.credits.cast[0].name},
                  </div>
                  <div
                    key={data.credits.cast[1].id}
                    className="text-base text-rose-700"
                  >
                    {data.credits.cast[1].name},
                  </div>
                  <div
                    key={data.credits.cast[2].id}
                    className="text-base text-rose-700"
                  >
                    {data.credits.cast[2].name}
                  </div>
                </div>
              </div>
              <div className="relative w-full border p-2 flex flex-row items-center rounded-lg cursor-pointer">
                <div className="absolute -top-1 -left-1 -bottom-1 px-3 flex flex-row justify-center items-center text-sm text-white bg-rose-700 rounded-lg">
                  Top rated movie #65
                </div>
                <div className="ml-44 text-sm font-medium text-neutral-700">
                  Awards 9 nominations
                </div>
                <div className="absolute right-3 top-2 text-neutral-600">
                  <PiCaretDownLight size={20} />
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-between">
              <div className="w-full flex flex-col gap-3 items-start">
                <div className="w-full h-[8vh]">
                  <Button
                    label="See Showtimes"
                    icon={IoMdPricetags}
                    onClick={() => {}}
                  />
                </div>
                <div className="w-full h-[8vh]">
                  <Button
                    label="More watch options"
                    icon={IoIosList}
                    onClick={() => {}}
                    outline
                  />
                </div>
              </div>
              <div className="relative mt-3 w-full h-[32vh] rounded-lg overflow-hidden">
                <Image
                  src="/images/movies-poster.png"
                  alt="movies poster"
                  fill
                  priority
                  data-testid="movies-poster"
                  className="object-cover transition"
                />
                <div className="absolute bottom-0 right-0 left-0 p-2 bg-neutral-800/50">
                  <div className="w-full flex flex-row gap-2 justify-center items-center text-sm font-semibold text-white">
                    <IoIosList size={20} />
                    <p>The Best Movies and Shows in September</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieClient;
