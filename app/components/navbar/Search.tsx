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
      title: inputValue,
    };

    const url = qs.stringifyUrl(
      {
        url: "/movies/search",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [inputValue, params, router]);

  const handlekeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }

    console.log("keypressed is: ", e.key);
    return handleSearch();
  };

  // if (!pathname.includes("movies")) {
  //   return (
  //     <div
  //       onClick={() => router.push("/movies")}
  //       className={`relative w-full p-2 text-sm font-light rounded-lg cursor-pointer border-2 ${
  //         pathname.includes("movies") ? "border-black" : "border-white"
  //       }`}
  //     >
  //       What do you want to watch?
  //       <IoSearch size={17} className="absolute right-2 top-2" />
  //     </div>
  //   );
  // }

  return (
    <div
      className={`w-full p-2 flex flex-row items-center justify-between bg-transparent rounded-lg border-2 ${
        pathname.includes("movies") ? "border-black" : "border-white"
      }`}
    >
      <input
        ref={inputRef}
        onChange={onSearchChange}
        onKeyDown={(e) => handlekeyPress(e)}
        placeholder="What do you want to watch?"
        className={`w-full outline-none text-sm font-medium placeholder:text-sm placeholder:font-light ${
          pathname.includes("movies")
            ? "placeholder:text-black"
            : "placeholder:text-white"
        } bg-transparent`}
      />
      <div onClick={handleSearch} className="p-1 cursor-pointer">
        <IoSearch size={16} className="" />
      </div>
    </div>
  );
};

export default Search;
