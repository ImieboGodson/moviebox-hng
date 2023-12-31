"use client";

import { useParams, useRouter } from "next/navigation";
import Container from "../Container";

import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import SocialButton from "./SocialButton";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const params = useParams();

  if (params.movieId) {
    return null;
  }

  return (
    <div className="mt-12 w-full bg-transparent">
      <Container>
        <div className="w-full py-12">
          <div className="w-full flex gap-6 flex-col items-center justify-center">
            <div className="flex flex-row gap-3 items-center">
              <SocialButton
                link="https://twitter.com/home"
                icon={FaFacebookSquare}
              />
              <SocialButton
                link="https://twitter.com/home"
                icon={FaInstagram}
              />
              <SocialButton link="https://twitter.com/home" icon={FaTwitter} />
              <SocialButton link="https://twitter.com/home" icon={FaYoutube} />
            </div>
            <div className="flex flex-row gap-7 items-center">
              <div
                onClick={() => router.push("/")}
                className="text-xs font-bold cursor-pointer"
              >
                Conditions of Use
              </div>
              <div
                onClick={() => router.push("/")}
                className="text-xs font-bold cursor-pointer"
              >
                Privacy & Policy
              </div>
              <div
                onClick={() => router.push("/")}
                className="text-xs font-bold cursor-pointer"
              >
                Press Room
              </div>
            </div>
            <div className="text-xs font-light text-neutral-500">
              &copy; 2023 MovieBox with ❤️ by{" "}
              <Link
                href="https://github.com/ImieboGodson"
                target="blank"
                className="font-semibold text-neutral-700 hover:underline"
              >
                Godson Imiebo
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
