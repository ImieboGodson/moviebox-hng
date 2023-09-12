"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-white text-black ">
      <div className="w-fit h-fit text-[12.5rem] font-bold tracking-widest">
        404
      </div>
      <div className="flex flex-row justify-center items-center">
        <p
          onClick={() => router.refresh()}
          className="text-sm font-light underline"
        >
          Try again
        </p>
      </div>
    </div>
  );
};

export default ErrorState;
