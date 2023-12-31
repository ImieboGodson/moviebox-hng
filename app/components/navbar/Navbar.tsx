"use client";

import { useParams, usePathname } from "next/navigation";
import Container from "../Container";
import Logo from "../Logo";
import Search from "./Search";

import { HiMiniBars2 } from "react-icons/hi2";

const Navbar = () => {
  const pathname = usePathname();
  const params = useParams();

  if (params.movieId) {
    return;
  }

  return (
    <div className="relative w-full bg-transparent z-50">
      <Container>
        <div
          className={`w-full py-4 grid grid-cols-4 gap-2 ${
            pathname.includes("movies") ? "text-black" : "text-white"
          } `}
        >
          <div className="col-span-1 flex flex-row items-center justify-start ">
            <Logo />
          </div>
          <div className=" col-span-2 flex flex-row items-center justify-center">
            <div className="w-[85%]">
              <Search />
            </div>
          </div>
          <div className=" col-span-1 flex flex-row gap-4 items-center justify-end">
            <div className="py-2 px-3 text-sm font-semibold cursor-pointer ">
              Sign in
            </div>
            <div className="p-2 text-sm font-extrabold text-white bg-rose-700 rounded-full cursor-pointer ">
              <HiMiniBars2 size={18} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
