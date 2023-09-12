import { Button } from "@/components/ui/button";
import { Flex, Metric, Card, Text } from "@tremor/react";
import Image from "next/image";

export const ProjectItemTwo = () => (
  <div className="mx-auto items-center flex justify-center gap-6 text-white">
    <div className=" text-center border-white border-[1px] rounded-lg">
      <h3 className="text-2xl ">SwiftChat</h3>
      <div className="cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl hover:bg-slate-300 hover:p-1 duration-200">
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
      <div className="p-3">
        <Button className="text-black" variant={"outline"}>
          Launch SwiftChat
        </Button>
        <Button variant={"link"}>Github Repository</Button>
        <Button variant={"link"}>Video Demo</Button>
      </div>
    </div>
    <div className=" text-center border-white border-[1px] rounded-lg">
      <h3 className="text-2xl p-2">BasketballFit</h3>
      <div className="cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl hover:bg-slate-300 hover:p-1 duration-200">
        <a href="https://basketballfit-15b82.web.app/" target="_blank">
          <Image
            alt="Synced image"
            src={"/ball.png"}
            width={440}
            height={300}
          />
        </a>
      </div>
      <div className="p-3">
        <a href="https://basketballfit-15b82.web.app/" target="_blank">
          <Button className="text-black" variant={"outline"}>
            Launch BasketballFit
          </Button>
        </a>
      </div>
    </div>
  </div>
);
