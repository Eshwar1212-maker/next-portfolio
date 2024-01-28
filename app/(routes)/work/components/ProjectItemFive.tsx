import { Button } from "@/components/ui/button";
import { Flex, Metric, Card, Text } from "@tremor/react";
import Image from "next/image";

export const ProjectItemFive = () => (
  <div className="mx-auto text-center md:my-3 sm:my-0 bg-black text-white h-[70vh]">
    <div className="">
      <div className="flex justify-center">
        <div className="">
          <h3 className="text-2xl py-1">SwiftChat</h3>

          <a
            href="https://swiftchat-spvb.vercel.app/?callbackUrl=%2Fusers"
            target="_blank"
            className="cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl hover:bg-slate-300 hover:p-1 duration-200 mx-auto"
          >
            <Image
              alt="Synced image"
              src={"/chat.png"}
              width={440}
              height={300}
              className="mx-auto"
            />
          </a>
          <p className="text-[13px] max-w-[890px]">
            {" "}
            SwiftChat is a fully fledged chat application, allowing group chats
            and direct messages, along with image upload. This app is the same
            chat feature in my main application 'Synced'. I worked on this app
            first, and then thought it would be a great idea to use it for
            Synced as well.{" "}
          </p>
        </div>
      </div>
      <div className="py-9">
        <div className="">
          <h3 className="text-lg font-semibold">Core features</h3>
          <ul className="text-[10px] md:text-[13px] whitespace-normal lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[40%] mx-auto list-disc space-y-3">
            <li>
              Leveraged NextJS13 modern app routing system and server-side
              rendering features to improve performance.
            </li>
            <li>
              Integrated Pusher for real-time web socket communication, enabling
              instant updates across all users.
            </li>
            <li>
              Utilized Cloudinary for efficient image upload, enhancing the
              app's multimedia capabilities.
            </li>
            <li>
              Used Zustand, along with Prismas client provider, to seamlessly
              manage state in my application.
            </li>
          </ul>
        </div>
        <div className=" py-10">
          <a href="https://swiftchat.vercel.app/" target="_blank">
            <Button
              className="sm:text-black bg-black sm:bg-white text-white"
              variant={"outline"}
            >
              Launch SwiftChat
            </Button>
          </a>
          <a
            href="https://github.com/Eshwar1212-maker/swiftchat"
            target="_blank"
          >
            <Button variant={"link"}>Github Repository</Button>
          </a>
        </div>
      </div>
    </div>
  </div>
);
