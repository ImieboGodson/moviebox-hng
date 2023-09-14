"use client";

import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/search")}
      className="relative w-full p-2 text-sm font-light rounded-lg cursor-pointer border-2 border-white"
    >
      What do you want to watch?
      <IoSearch size={17} className="absolute right-2 top-2" />
    </div>
  );
};

export default Search;
