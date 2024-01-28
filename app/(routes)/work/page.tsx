import { FC } from "react";
import ProjectItem from "./components/ProjectItem";
import { ProjectItemTwo } from "./components/ProjectItemTwo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectItemThree  from "./components/ProjectItemThree";
import ProjectItemFour from "./components/ProjectItemFour";
interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <div className="px-8 bg-black sm:bg-inherit ">
      <Carousel className="max-w-[78vw] mx-auto">
        <CarouselContent>
          <CarouselItem key={0}>
            <ProjectItem />
          </CarouselItem>
          <CarouselItem key={1}>
            <ProjectItemThree />
          </CarouselItem>
          <CarouselItem key={2}>
            <ProjectItemTwo />
          </CarouselItem>
          <CarouselItem key={3}>
            <ProjectItemFour />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default page;
