import { Button } from "@/components/ui/button";
import { Flex, Metric, Card, Text } from "@tremor/react";
import Image from "next/image";

export const ProjectItemFive = () => (
  <div className="mx-auto text-center md:my-3 sm:my-0 bg-black text-white h-[70vh]">
    <div className="">
      <div className="flex justify-center">
        <div className="">
          <h3 className="text-2xl py-1">React Code Challenges Repo</h3>

          <a
            href="https://github.com/Eshwar1212-maker/React-Practice"
            target="_blank"
            className="cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl hover:bg-slate-300 hover:p-1 duration-200 mx-auto"
          >
            <Image
              alt="Synced image"
              src={"/code.png"}
              width={440}
              height={300}
              className="mx-auto"
            />
          </a>
          <p className="text-[12px] md:text-[14px] max-w-[890px] pt-12 pb-4">
            Now, this isn't exactly a project, its just a fun little repository im working on. This repo
            consists of code challenges that test your React, Typescript, and CSS skills. 
            I thought it would be great to make this open source, to prepare for interviews and practice your front end
            development skills. The description of the challenges are described in the README, and the files are in the /challenges folder. 
            
          </p>
        </div>
      </div>
        <h3 className="text-lg font-semibold pb-3">Steps to start learning:</h3>
        <ol className="text-[12px] md:text-[13px] whitespace-normal lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[30%] mx-auto space-y-3 list-decimal">
            <li>
              Clone the Repo.x
            </li>
            <li>
                Browse the README to see what challenges you want to work on.            
            </li>
            <li>
              Navigate to the SRC folder for you to start coding!
            </li>
          </ol>
          <a
            href="https://github.com/Eshwar1212-maker/React-Practice"
            target="_blank"
          >
            <Button className="my-5">Github Repository</Button>
          </a>
    </div>
  </div>
);
