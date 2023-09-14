"use client";

import { Movie } from "@/types";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface MovieCardProps {
  currentUser?: {} | null;
  data: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ currentUser, data }) => {
  return (
    <div className="group w-full flex flex-col gap-4 cursor-pointer">
      <div className="relative w-full aspect-2/3 overflow-hidden">
        <div className="absolute top-3 right-4 z-20">
          <HeartButton movieId={data.id} currentUser={currentUser} />
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt="movie poster"
          fill
          className="object-cover group-hover:scale-125 transition"
        />
      </div>
      <div className="w-full flex flex-col gap-4 items-start">
        <div className="text-xs font-semibold text-neutral-400">
          USA, 2016 - Current
        </div>
        <div className="text-sm font-bold">{data.title}</div>
        <div className="w-full flex flex-row justify-between items-center">
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
            <div className="flex flex-row text-xs font-extralight">97%</div>
          </div>
        </div>
        <div className="text-xs font-semibold text-neutral-400">
          Action, Adventure, Horror
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
