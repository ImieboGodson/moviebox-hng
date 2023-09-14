"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (pathname.includes("movies")) {
      inputRef.current?.focus();
    }
  }, [pathname]);

  const onSearchChange = useCallback(() => {
    if (inputRef.current) {
      setInputValue(inputRef.current.value);
    }
  }, []);

  const handleSearch = useCallback(async () => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      search: inputValue,
    };

    const url = qs.stringifyUrl(
      {
        url: "/movies",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [inputValue, params, router]);

  if (!pathname.includes("movies")) {
    return (
      <div
        onClick={() => router.push("/movies")}
        className={`relative w-full p-2 text-sm font-light rounded-lg cursor-pointer border-2 ${
          pathname.includes("movies") ? "border-black" : "border-white"
        }`}
      >
        What do you want to watch?
        <IoSearch size={17} className="absolute right-2 top-2" />
      </div>
    );
  }

  return (
    <div className="w-full p-2 flex flex-row items-center justify-between rounded-lg border-2 border-black">
      <input
        ref={inputRef}
        onChange={onSearchChange}
        placeholder="What do you want to watch?"
        className="w-full outline-none text-sm font-medium placeholder:text-sm placeholder:font-light"
      />
      <div onClick={handleSearch} className="p-1 cursor-pointer">
        <IoSearch size={16} className="" />
      </div>
    </div>
  );
};

export default Search;
