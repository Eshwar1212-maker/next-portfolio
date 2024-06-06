import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";
import SyncedDialog from "./SyncedDialog";

interface ProjectItemProps {}

const ProjectItemThree: FC<ProjectItemProps> = ({}) => {
  return (
    <div className="mx-auto text-center rounded-lg md:my-3 sm:my-0 bg-black text-white h-[75vh]">
      <h2 className="font-semibold text-3xl py-2">Langflow </h2>
      <div className="flex flex-col">
      <div className="flex items-center flex-col lg:flex-row py-1 px-4 xl:max-w-[86%] mx-auto gap-5">
        <div className="cursor-pointer">
      <a href="https://github.com/Eshwar1212-maker/flashcardsapp" target="_blank">
        <Image
            alt="Synced Image"
            src={"/Learned.png"}
            width={490}
            height={300}
          />
        </a>
        <p className="text-sm max-w-[460px]">This app is currently under development. I plan to deploy both the front end and backend in the upcoming weeks on AWS.</p>
        </div>
        <div className="text-left lg:w-1/2 p-2 text-white">
          <p className="text-[13px] 2xl:text-[15px] whitespace-normal">
          Langflow is a flashcards application I made using React, Redux toolkit, Typescript, Supabase, and Django.
           This app has a feature called classrooms, which is whatever topic the user wants to learn more about, and 
           each classroom has multiple sets of flashcards. The motivation for me building this app was to learn Hindi, 
           and I ended up loving Django!
          </p>
          <h3 className="text-md xl:text-lg pt-3 underline py-1 font-extrabold">Key Technologies Used:</h3>

          <p className="text-sm xl:text-[15px] font-semibold">Typescript, React, Redux Toolkit, Django, Django Rest Framework, PostgreSQL</p>
        </div>
  
      </div>
      </div>
      <div className="my-10 hidden lg:block">
        <h3 className="text-lg font-semibold">Core Technical Features</h3>
        <ul className="text-[10px] md:text-[13px] whitespace-normal lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[48%] mx-auto list-disc space-y-3">
          <li>Used Redux Toolkit and Redux-Persist,along with Supabase for global state management of the users authentication state</li>
          <li>Used Django Rest Framework for its powerful Model View Template architecture, allowing seamless model relations and url mapping.</li>
          <li>Combined Django and Supabase for a self hosted PostgreSQL database, every time I make migrations in Django it is updated to Supabase</li>
          <li>Used Redux Toolkit's RTK Query for powerful data fetching and caching, ensuring a seamless user and developer experience.</li>
        </ul>
      </div>
      <a className="" href="https://github.com/Eshwar1212-maker/flashcardsapp" target="_blank">
        <Button className="underline" >Github Repository</Button>

        </a>
    </div>
  );
};

export default ProjectItemThree;
