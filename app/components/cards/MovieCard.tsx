"use client";

import { useMemo } from "react";
import { Movie } from "@/types";
import Image from "next/image";
import HeartButton from "../HeartButton";
import { useRouter } from "next/navigation";
import formateDate from "@/app/libs/formatDate";

interface MovieCardProps {
  currentUser?: {} | null;
  data: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ currentUser, data }) => {
  const router = useRouter();

  return (
    <div
      data-testid="movie-card"
      onClick={() => router.push(`/movies/${data.id}`)}
      className="group w-full flex flex-col gap-4 cursor-pointer"
    >
      <div className="relative w-full aspect-2/3 overflow-hidden">
        <div className="absolute top-3 right-4 z-20">
          <HeartButton movieId={data.id} currentUser={currentUser} />
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt="movie poster"
          fill
          data-testid="movie-poster"
          className="object-cover group-hover:scale-110 transition"
        />
      </div>
      <div className="w-full flex flex-col gap-4 items-start">
        <div className="flex flex-row gap-1 items-center">
          <div className="text-xs font-semibold text-neutral-400">USA,</div>
          <div
            data-testid="movie-release-date"
            className="text-xs font-semibold text-neutral-400"
          >
            {formateDate(data.release_date)}
          </div>
        </div>

        <div data-testid="movie-title" className="text-sm font-bold">
          {data.title}
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/images/imdb.png"
              height={35}
              width={35}
              alt="imdb icon"
            />
            <div className="flex flex-row text-xs font-extralight">
              {data.vote_average.toFixed(1)} / 10
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
              {(data.vote_average * 10).toFixed()}%
            </div>
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
