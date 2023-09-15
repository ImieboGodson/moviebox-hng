"use client";

import Logo from "../Logo";
import { GoHome } from "react-icons/go";
import { PiVideoCamera, PiVideo } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { IoLogOutOutline } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import SideNavbarItem from "./SideNavbarItem";

const SideNavbar = () => {
  const router = useRouter();

  const params = useParams();

  console.log(params.movieId);

  if (!params.movieId) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 bottom-0 h-screen w-[13vw] py-5 border border-neutral-950/30 rounded-r-3xl overflow-hidden">
      <div className="flex flex-col gap-8 items-start justify-between">
        <div className="w-full py-2 px-5">
          <Logo />
        </div>
        <div className="w-full flex flex-col items-start">
          <SideNavbarItem
            label="Home"
            icon={GoHome}
            onClick={() => router.push("/")}
          />
          <SideNavbarItem
            label="Movies"
            icon={PiVideoCamera}
            onClick={() => router.push("/movies")}
          />
          <SideNavbarItem
            label="TV Series"
            icon={PiVideo}
            onClick={() => router.push("/tv-series")}
          />
          <SideNavbarItem
            label="Upcoming"
            icon={SlCalender}
            onClick={() => router.push("/upcoming")}
          />
        </div>
        <div className="mx-auto w-[80%] px-2 py-5 flex flex-col gap-2 border border-rose-700 rounded-xl bg-rose-700/5 ">
          <div className="flex flex-col gap-1 items-start">
            <p className="text-[0.7rem] font-bold text-neutral-700">
              Play movie quizes and earn free tickets
            </p>
            <p className="text-[0.65rem] font- text-neutral-600">
              50k people are playing now
            </p>
          </div>
          <div className="p-2 flex flex-row items-center justify-center text-[0.65rem] text-rose-700 bg-rose-700/10 rounded-xl cursor-pointer">
            Start playing
          </div>
        </div>
        <div className="w-full py-2 pl-8 flex flex-row gap-1 justify-start items-center text-neutral-600 hover:text-black transition cursor-pointer">
          <IoLogOutOutline size={20} />
          <p className="text-xs font-bold ">Log out</p>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
