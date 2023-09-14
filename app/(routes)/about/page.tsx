import { FC } from "react";

import Image from "next/image";
interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex flex-col md:flex-row mx-auto justify-between p-4 md:px-20 md:py-10 xl:max-w-[1200px] xl:py-[80px] lg:bg-black sm:rounded-lg gap-10 text-white">
      <div className="space-y-4 flex flex-col gap-4 max-w-xl mx-auto md:mx-0 justify-center text-center md:text-left">
        <h3 className='text-2xl font-semibold'>How I got started</h3>
        <p className="text-sm lg:text-base sm:max-w-xl mx-auto md:mx-0">
          I am a passionate software developer proficient in both frontend and
          backend technologies. From the moment I began coding, I was captivated
          by the idea of building applications that add value to people's lives,
          including my own. The ability to create solutions with code felt like
          a superpower, and the process of continuous learning is both immensely
          enjoyable and rewarding. Due to a chronic autoimmune disorder, I was
          unable to complete a traditional four-year degree. I acquired my
          skills through a combination of self-learning and by graduating from a
          comprehensive full-stack engineering coding bootcamp at the FlatIron
          School in May 2023.
          <br />
          <br />
          In my most recent project "
          <a
            className="underline"
            target="_blank"
            href="https://sportssync.vercel.app/"
          >
            Synced
          </a>
          " I feel like a lot of the struggle and hard work paid off. Sports is a big part of my life, 
          and I always wanted to be able to build an applicaiton I can use to track my workouts, 
          schedule games with my friends, have a full calender to track my events, and have a 
          dashboard to track my consistency, and more. Building great products as the end goal
          is what I love about being a developer.
        </p>
      </div>
      <div className="hidden sm:flex flex-col gap-10 py-16 mx-auto">
        <Image
          alt="About me"
          width={400}
          height={500}
          src={"/work.jpg"}
          className="rounded-xl"
        />
        <p className="text-sm">A laptop and coffee is all I need!</p>
      </div>
      <div className="flex flex-col gap-10 py-4 mx-auto sm:hidden">
        <Image
          alt="About me"
          width={260}
          height={500}
          src={"/work.jpg"}
          className="rounded-xl"
        />
        <p className="">A laptop and coffee is all I need!</p>
      </div>
    </div>
  );
};

export default page;
