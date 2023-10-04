import { Button } from "@/components/ui/button";
import { Flex, Metric, Card, Text } from "@tremor/react";
import Image from "next/image";

export const ProjectItemTwo = () => (
  <div className="mx-auto items-center flex flex-col md:flex-row justify-center gap-6 text-white py-4 bg-black md:bg-inherit my-6 sm:my-0">
    <div className=" text-center md:border-white md:border-[1px] rounded-lg">
      <h3 className="text-2xl py-1">SwiftChat</h3>
      <div className="cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl hover:bg-slate-300 hover:p-1 duration-200 hidden md:block">
        <a
          href="https://swiftchat-spvb.vercel.app/?callbackUrl=%2Fusers"
          target="_blank"
        >
          <Image
            alt="Synced image"
            src={"/chat.png"}
            width={440}
            height={300}
          />
        </a>
      </div>
      <div className="py-1">
        <Button className="sm:text-black bg-black sm:bg-white text-white" variant={"outline"}>
          Launch SwiftChat
        </Button>
        <Button variant={"link"}>Github Repository</Button>
      </div>
    </div>
    <div className="text-center md:border-white bg-black md:border-[1px] rounded-lg">
      <h3 className="text-2xl py-1">BasketballFit</h3>
      <div className="cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl hover:bg-slate-300 hover:p-1 duration-200 hidden md:block">
        <a href="https://basketballfit-15b82.web.app/" target="_blank">
          <Image
            alt="Synced image"
            src={"/ball.png"}
            width={440}
            height={300}
          />
        </a>
      </div>
      <div className=" py-4">
        <a href="https://basketballfit-15b82.web.app/" target="_blank">
        <Button className="sm:text-black bg-black sm:bg-white text-white" variant={"outline"}>
            Launch BasketballFit
          </Button>
        </a>
      </div>
    </div>
  </div>
);
