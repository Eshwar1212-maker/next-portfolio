import { Button } from "@/components/ui/button";
import { Flex, Metric, Card, Text } from "@tremor/react";
import Image from "next/image";

export const ProjectItemTwo =  () => (
  <div className="mx-auto items-center flex justify-center gap-6">
    <div className=" text-center border-white border-[1px] rounded-lg">
        <h3 className="text-2xl ">
            SwiftChat
        </h3>
        <div className="cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl hover:bg-slate-300 hover:p-1 duration-200">
        <Image
            alt="Synced image"
            src={"/chat.png"}
            width={440}
            height={300}
          />
        </div>
        <div className="p-3">
            <Button>
                Launch SwiftChat
            </Button>
            <Button variant={"secondary"}>
                Github Repository
            </Button>
            <Button variant={"secondary"}>
                Video Demo
            </Button>
        </div>
      </div>
      <div className=" text-center border-white border-[1px] rounded-lg">
        <h3 className="text-2xl p-2">
            BasketballFit
        </h3>
        <div className="cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl hover:bg-slate-300 hover:p-1 duration-200">
        <Image
            alt="Synced image"
            src={"/ball.png"}
            width={440}
            height={300}
          />
        </div>
        <div className="p-3">
            <Button>
                Launch SwiftChat
            </Button>
            <Button variant={"secondary"}>
                Github Repository
            </Button>
            <Button variant={"secondary"}>
                Video Demo
            </Button>
        </div>
      </div>
  </div>
);