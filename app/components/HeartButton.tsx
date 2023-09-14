"use client";

import React, { useCallback, useState } from "react";
// import useFavorite from "../hooks/useFavorite";
// import { SafeUser } from "../types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface HeartButtonProps {
  currentUser?: {} | null;
  movieId: number;
}

const HeartButton: React.FC<HeartButtonProps> = ({ currentUser, movieId }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  //   const { isFavorited, toggleFavorite } = useFavorite({
  //     currentUser,
  //     listingId,
  //   });

  // const isFavorited = true;

  const handleFavorite = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      setIsFavorited(!isFavorited);
    },
    [isFavorited]
  );

  return (
    <div
      onClick={handleFavorite}
      className="p-1.5 bg-neutral-300/80 rounded-full hover:opacity-70"
    >
      <div className="relative transition cursor-pointer">
        <AiOutlineHeart
          size={21}
          className={`relative ${
            isFavorited ? "fill-red-500" : "fill-neutral-200"
          } z-30 overflow-hidden`}
        />
        <AiFillHeart
          size={19}
          className={`absolute top-[1.5px] left-[1.5px] ${
            isFavorited ? "fill-red-500" : "fill-neutral-200"
          } z-0`}
        />
      </div>
    </div>
  );
};

export default HeartButton;
