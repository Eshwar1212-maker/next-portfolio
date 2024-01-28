import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";
import SyncedDialog from "./SyncedDialog";

interface ProjectItemProps {}

const ProjectItemFour: FC<ProjectItemProps> = ({}) => {
  return (
    <div className="mx-auto text-center rounded-lg md:my-3 sm:my-0 bg-black text-white h-[75vh]">
      <h2 className="font-semibold text-3xl py-2">BasketballFit </h2>
      <div className="flex flex-col">
        <div className="flex items-center flex-col lg:flex-row py-1 px-4 xl:max-w-[86%] mx-auto gap-5">
          <div className="cursor-pointer">
            <a href="https://capstone-ec476.firebaseapp.com/" target="_blank">
              <Image
                alt="Synced Image"
                src={"/basketballfit.png"}
                width={490}
                height={300}
              />
            </a>
            <p className="text-sm max-w-[460px]">
              This app was my capstone project at Flatiron school. It has some
              issues in terms of architectural design and UI, but now 'Synced'
              now is what this app was supposed to be.
            </p>
          </div>
          <div className="text-left lg:w-1/2 p-2 text-white mb-9">
            <p className="text-[13px] 2xl:text-[15px] whitespace-normal">
              BasketballFit is designed to help basketball players track their
              workouts and improve their performance. It provides a platform for
              personalized workout routines, insightful discussions, and a
              community of like-minded individuals focused on their fitness
              goals.
            </p>
            <h3 className="text-md xl:text-lg pt-3 underline py-1 font-extrabold">
              Key Technologies Used:
            </h3>

            <p className="text-sm xl:text-[15px] font-semibold">
              Typescript, React, React Context, Nestjs, Mongodb, Firebase
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 hidden lg:block">
        <h3 className="text-lg font-semibold">
          Key features and technologies used:
        </h3>
        <ul className="text-[10px] md:text-[13px] whitespace-normal lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[53%] mx-auto list-disc space-y-3">
          <li>
            Users can manage their workout routines on a calendar, I used Nestjs
            and Mongodb for the backend.
          </li>
          <li>
            The application provides visual charts for monthly workout
            consistency and intensity. I used Reacts Recharts for the chart
            library
          </li>
          <li>
            I used Firebase's real time database for the community chat feature,
            along with with the Forums.
          </li>
          <li>
            The application uses React Context API for global state management,
            including user data and theme settings. I used Firebase for
            authentication, and only allow authenticated users to interact with
            my Nestjs REST Api.
          </li>
        </ul>
      </div>
      <div className="2xl:py-5">
        <div className="flex gap-3 justify-center">
        <a href="https://capstone-ec476.firebaseapp.com/" target="_blank">
        <Button className="text-black" variant={"outline"}>Launch BasketballFit</Button>
        </a>
        <a className="" href="https://github.com/Eshwar1212-maker/BasketballFit" target="_blank">
        <Button className="underline" >Github Repository</Button>

        </a>
        <a className="" href="https://www.loom.com/share/d7b67b83c5e1436ba89c522fe884e387" target="_blank">
        <Button className="underline" >Video Demo</Button>
        </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectItemFour;
