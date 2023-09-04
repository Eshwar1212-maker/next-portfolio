import { Button } from "@/components/ui/button";
import { Bonheur_Royale, Kalam, PT_Sans } from "next/font/google";
import Image from "next/image";
import { FC } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/Ai";

interface HeroProps {}
const inter = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "400",
});
const bon = Kalam({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "400",
});

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="flex flex-col justify-between max-w-[1400px] mx-auto">
      <div className="text-center py-[150px] flex flex-col text-gray-300">
      <div className=" space-y-8">
        <h1 className="text-6xl">Hi, I'm <span style={bon.style} className="text-blue-700">E</span>shwar</h1>
        <p className="text-4xl font-light">
          Building beautiful, complex <br /> user interfaces accross the stack.
        </p>
        <p className="text-xl">
          Full stack web developer skilled in modern web development
          technologies.
        </p>
      </div>
      <div className="mx-auto flex flex-col gap-8 py-6">
        <div className="space-x-2">
          <button
            className="relative bg-cover bg-center bg-no-repeat border-2 border-white shadow-lg p-2 rounded-lg"
            style={{ backgroundImage: `url('/back.mp4')` }}
          >
            <span className="absolute inset-0 bg-blue-300 opacity-20"></span>
            <span className="relative text-white text-md flex flex-row gap-1">
              Linkedin
              <span className="my-auto">
              {" "}
              <AiFillLinkedin />
            </span>
            </span>
          </button>
          <button
            className="relative bg-cover bg-center bg-no-repeat border-2 border-white shadow-lg p-2 rounded-lg"
            style={{ backgroundImage: `url('/back.mp4')` }}
          >
            <span className="absolute inset-0 bg-blue-300 opacity-20"></span>
            <span className="relative text-white text-md flex flex-row gap-1">
            Github
              <span className="my-auto">
              {" "}
              <AiFillGithub />
            </span>
            </span>
          </button>
        </div>
        <div>
          <button
            className="relative bg-cover bg-center bg-no-repeat border-2 border-white shadow-lg p-5 rounded-lg"
            style={{ backgroundImage: `url('/back.mp4')` }}
          >
            <span className="absolute inset-0 bg-blue-800 opacity-20"></span>
            <span className="relative text-white text-xl">View My Work</span>
          </button>
        </div>
      </div>
      </div>
      {/* <div style={bon.style} className="pr-[200px] text-[390px] text-blue-900 font-extrathin -rotate-12">
        E
    </div> */}
    </div>
  );
};

export default Hero;

{
  /* <Image
      src={"https://newreactportfolio.vercel.app/static/media/avatar.51c511c9c8967408beba.webp"}
      alt='My avatar'
      width={400}
      height={300}
      className='rounded-full'
       /> */
}
