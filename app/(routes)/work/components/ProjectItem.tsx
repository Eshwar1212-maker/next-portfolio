import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";
import SyncedDialog from "./SyncedDialog";

interface ProjectItemProps {}

const ProjectItem: FC<ProjectItemProps> = ({}) => {
  return (
    <div className="mx-auto text-center border-white border-[1px] rounded-lg lg:w-[910px] md:my-7 sm:my-0 bg-black text-white ">
      <h2 className="font-semibold text-3xl py-2">Synced</h2>
      <div className="flex items-center flex-col md:flex-row py-1 px-4">
      <div className="md:w-1/2 cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl hover:bg-slate-300 hover:p-1 duration-200">
      <a href="https://sportssync.vercel.app/" target="_blank">
        <Image
            alt="Synced image"
            src={"/synced.png"}
            width={540}
            height={300}
          />
        </a>
        </div>
        <div className="text-left md:w-1/2 p-2 text-white">
          <p className="text-sm md:text-[14px] whitespace-normal ">
            Synced is an all-in-one workout and productivity application
            designed for athletes and teams. Users can establish group chats to
            coordinate games and workouts, log their training sessions in a
            calendar, and plan various sport-related activities, including
            games, practices, events, and meetings. Additionally, the
            application offers a visual dashboard to monitor progressive
            overload, workout intensity, and consistency.
          </p>
          <p className="text-[12px] py-4 font-bold">Nextjs, React, Prisma, Mongodb Typescript, Tailwind CSS, FullCalenderjs, Pusher.io, Shadcn/ui, Tremor</p>
        </div>
      </div>
      <div className="flex flex-row gap-6 mx-auto text-center justify-center pb-3">
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
  );
};

export default ProjectItem;
