import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";
import SyncedDialog from "./SyncedDialog";

interface ProjectItemProps {}

const ProjectItem: FC<ProjectItemProps> = ({}) => {
  return (
    <div className="mx-auto sm:my-0 bg-black text-white">
      <h2 className="font-semibold text-3xl py-2">Synced </h2>
      <div className="flex flex-col">
        <div className="flex items-center flex-col lg:flex-row py-1 px-4 xl:max-w-[86%] mx-auto gap-5">
          <div className="">
            <a href="https://sportssync.vercel.app/" target="_blank" className="cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl hover:bg-slate-300 hover:p-1 duration-200">
              <Image
                alt="Synced Image"
                src={"/synced.png"}
                width={490}
                height={300}
              />
              <p className="text-[13px] max-w-[490px]">
                This is my main full stack application that I work on the most, built over many months. The other projects in the rest of the carousel 
                are less complex in terms of functionality. 
              </p>
            </a>
          </div>
          <div className="text-left lg:w-1/2 text-white mb-10">
            <p className="text-[13px] 2xl:text-[15px] whitespace-normal">
              Synced is an all-in-one workout and productivity application
              designed for athletes and teams. Users can establish group chats
              to coordinate games and workouts, log their training sessions in a
              calendar, and plan various sport-related activities, including
              games, practices, events, and meetings. Additionally, the
              application offers a visual dashboard to monitor progressive
              overload, workout intensity, and consistency.
            </p>
            <h3 className="text-md xl:text-lg pt-3 underline py-1 font-extrabold">
              Key Technologies Used:
            </h3>

            <p className="text-[15px] xl:text-[15px] font-semibold">
              Nextjs, Typescript, React, Prisma, Mongodb, Tailwind CSS,
              FullCalenderjs, Pusher.io, Shadcn/ui, Tremor
            </p>
          </div>
        </div>
        <div className="2xl:py-5">
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold">Core features (MVP)</h3>
            <ul className="text-[10px] md:text-[13px] whitespace-normal lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[61%] mx-auto list-disc space-y-3">
              <li>
                Full Workout log, consisting of charts tracking progressive
                overload, workout tracking calender for different days. Each
                exercise their completed will have its own chart of the
                respective weight over time.
              </li>
              <li>
                Calendars, and team workspace calendars. Users have their own
                personal calendar to track their own events related to their
                sport, and users can also create team calendars and coordinate
                games and events with their team.
              </li>
              <li>
                Fully fledged messaging system. Users can direct message their
                friends, or create group chats with their teams and schedule
                games, events, practices, or hangouts. Moderators of groups can
                invite new users and boot existing users.
              </li>
              <li className="">
                Users have their own dashboard tracking how many days they
                worked out each month, and how many workout exercises they
                completed each month.
              </li>
            </ul>
          </div>

        </div>
        <div className="2xl:py-5">
        <div className="fixed bottom-8 flex gap-2 right-0 left-0 justify-center">
        <a href="https://sportssync.vercel.app/" target="_blank">
        <Button className="text-black" variant={"outline"}>Launch Synced</Button>
        </a>
        <a className="hidden md:block" href="https://github.com/Eshwar1212-maker/Sports-Sync" target="_blank">
        <Button className="underline" >Github Repository</Button>

        </a>
        <a className="hidden md:block" href="https://www.loom.com/share/5f16510216c04e51b25aa49cc48819c8" target="_blank">
        <Button className="underline" >Video Demo</Button>
        </a>
        <Button className="underline">
          <SyncedDialog />
        </Button>
        </div>

      </div>
      </div>
    </div>
  );
};

export default ProjectItem;
